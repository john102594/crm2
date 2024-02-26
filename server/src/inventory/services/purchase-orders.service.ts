import { Injectable } from '@nestjs/common';

import { CreatePurchaseOrderDto } from '../dtos/purchase-order.dto';
import { CreateInventoryTransactionDto } from '../dtos/inventory-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import { UploadFilesService } from 'src/files/upload-files.service';
import { ParseFilesService } from 'src/files/parse-files.service';
import { querys } from 'src/sql/querys';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    private prisma: PrismaService,
    private uploadFilesService: UploadFilesService,
    private parseFilesService: ParseFilesService,
  ) {}

  async findAll() {
    return await this.prisma.purchaseOrder.findMany({
      include: {
        purchaseOrderDetails: true,
      },
    });
  }

  async getResumeMonth() {
    const query = querys.getResumeMonthPurchaseDetails;

    try {
      const resultado = await this.prisma.$queryRawUnsafe(query);
      return resultado;
    } catch (error) {
      return error;
    }
  }

  async getResumeDay() {
    const query = querys.getResumeDayPurchaseDetails;

    try {
      const resultado = await this.prisma.$queryRawUnsafe(query);
      return resultado;
    } catch (error) {
      return error;
    }
  }

  async getResumeYear() {
    const query = querys.getResumeYearPurchaseDetails;

    try {
      const resultado = await this.prisma.$queryRawUnsafe(query);
      return resultado;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    const order = await this.prisma.purchaseOrder.findUnique({
      where: { id },
      include: { purchaseOrderDetails: true },
    });
    return order;
  }

  async createFromCsv(file) {
    try {
      const csvData = await this.uploadFilesService.uploadCsv(file, true);

      const csvParse = (await this.parseFilesService.parseCsv(csvData)) as [
        {
          sku: string;
          total: number;
          productid: number;
          quantity: number;
          unitcost: number;
          createdat: string;
        },
      ];

      // Parse Data
      let data = [];
      for (let i = 0; i < csvParse.length; i++) {
        const element = csvParse[i];
        let dateString = element.createdat;
        const time = await new Date(
          dateString.replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, '$2/$1/$3'),
        );
        const order: CreatePurchaseOrderDto = {
          total: element.total,
          createdAt: time,
          purchaseOrderDetails: [
            {
              productId: element.productid,
              unit_cost: element.unitcost,
              quantity: element.quantity,
              sku: element.sku,
              createdAt: time,
            },
          ],
        };
        data.push(await this.create(order));
        // data.push(order);
      }
      const registernum = data.length;
      data = null;
      return registernum;
    } catch (error) {
      return error;
    }
  }

  async create(payload: CreatePurchaseOrderDto) {
    // Copy payload
    let purchaseOrderDetails: any[] = payload.purchaseOrderDetails.slice();

    try {
      return await this.prisma.$transaction(async (tx) => {
        let InventaryTransaction: CreateInventoryTransactionDto[] = [];

        //Search in db inventoryTransaction the last costAvg and balance for products
        for (let i = 0; i < purchaseOrderDetails.length; i++) {
          const element = payload.purchaseOrderDetails[i];
          const result = (await tx.product.findFirst({
            select: {
              quantity: true,
              unitCostAvg: true,
              id: true,
            },
            where: { OR: [{ id: element.productId }, { sku: element.sku }] },
          })) || {
            quantity: 0,
            unitCostAvg: 0,
            id: null,
          };
          const totalsaldo =
            Number(result.unitCostAvg) * Number(result.quantity);
          const newsaldo = Number(result.quantity) + element.quantity;
          const newcosto_prom =
            (totalsaldo + element.quantity * element.unit_cost) / newsaldo;

          purchaseOrderDetails[i] = {
            productId: result.id,
            quantity: element.quantity,
            unit_cost: element.unit_cost,
            createdAt: element.createdAt,
          };

          //Add in inventorytransaction the values
          InventaryTransaction.push({
            productId: result.id,
            transactionTypeId: 1, //id type compra
            quantity: element.quantity,
            unitPrice: element.unit_cost,
            balance: newsaldo,
            unitCostAvg: newcosto_prom,
          });
          // console.log(InventaryTransaction);
          // Update product db
          await tx.product.update({
            data: {
              quantity: newsaldo,
              unitCostAvg: newcosto_prom,
            },
            where: {
              id: result.id,
            },
          });
        }

        //Query create purchaseOrder and detailOrders
        const response = await tx.purchaseOrder.create({
          data: {
            total: payload.total,
            createdAt: payload.createdAt,
            purchaseOrderDetails: {
              create: purchaseOrderDetails,
            },
          },
          include: {
            purchaseOrderDetails: true, // Include all posts in the returned object
          },
        });

        //Query add Inventory transactions
        await tx.inventoryTransaction.createMany({
          data: InventaryTransaction,
        });

        return response;
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, changes: any[]) {
    // const order = await this.prisma.purchaseOrderDetail.findOne({
    //   where: { id },
    // });
    // if (!order) {
    //   throw new NotFoundException(`Order #${id} not found`);
    // }
    // console.log(changes);
    // // this.prisma.purchaseOrderDetail.merge(order, changes); Parsea el order a lo recibido en el changes
    // return await this.prisma.purchaseOrderDetail.save(order);
  }

  async remove(id: number) {
    return await this.prisma.purchaseOrderDetail.delete({ where: { id } });
  }
}
