import {
  Injectable,
  // BadRequestException,
} from '@nestjs/common';
import { UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleOrderDto } from '../dtos/sale-order.dto';
import { CreateInventoryTransactionDto } from '../dtos/inventory-transaction.dto';
import { UploadFilesService } from 'src/files/upload-files.service';
import { ParseFilesService } from 'src/files/parse-files.service';
import { querys } from 'src/sql/querys';

@Injectable()
export class SaleOrdersService {
  constructor(
    private prisma: PrismaService,
    private uploadFilesService: UploadFilesService,
    private parseFilesService: ParseFilesService,
  ) {}

  async findAll() {
    return await this.prisma.saleOrder.findMany({
      include: { saleOrderDetails: true },
    });
  }

  async getResumeMonth() {
    const query = querys.getResumeMonthSaleDetails;

    try {
      const resultado = await this.prisma.$queryRawUnsafe(query);
      return resultado;
    } catch (error) {
      return error;
    }
  }

  async getResumeDay() {
    const query = querys.getResumeDaySaleDetails;

    try {
      const resultado = await this.prisma.$queryRawUnsafe(query);
      return resultado;
    } catch (error) {
      return error;
    }
  }

  async getResumeYear() {
    const query = querys.getResumeYearSaleDetails;

    try {
      const resultado = await this.prisma.$queryRawUnsafe(query);
      return resultado;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    const order = await this.prisma.saleOrder.findUnique({
      where: { id },
      include: { saleOrderDetails: true },
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
          unitprice: number;
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
        const order: CreateSaleOrderDto = {
          total: element.total,
          createdAt: time,
          saleOrderDetails: [
            {
              productId: element.productid,
              unit_price: element.unitprice,
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

  async create(payload: CreateSaleOrderDto) {
    // console.log(productsId);
    let saleOrderDetails: any[] = payload.saleOrderDetails.slice();

    try {
      return await this.prisma.$transaction(async (tx) => {
        let InventaryTransaction: CreateInventoryTransactionDto[] = [];

        for (let i = 0; i < saleOrderDetails.length; i++) {
          const element = payload.saleOrderDetails[i];
          const result = (await tx.product.findFirst({
            select: {
              quantity: true,
              unitCostAvg: true,
              id: true,
            },
            where: { OR: [{ id: element.productId }, { sku: element.sku }] },
          })) || {
            id: null,
            quantity: 0,
            unitCostAvg: 0,
          };

          saleOrderDetails[i] = {
            productId: result.id,
            quantity: element.quantity,
            unit_price: element.unit_price,
            createdAt: element.createdAt,
          };

          const newsaldo = Number(result.quantity) - element.quantity;

          InventaryTransaction.push({
            productId: result.id,
            transactionTypeId: 2, //id type compra
            quantity: -element.quantity,
            unitPrice: element.unit_price,
            balance: newsaldo,
            unitCostAvg: result.unitCostAvg,
          });

          console.log(InventaryTransaction);
          // Update product db
          await tx.product.update({
            data: {
              quantity: newsaldo,
              unitCostAvg: result.unitCostAvg,
            },
            where: {
              id: result.id,
            },
          });
        }

        // Query create sale order and order detail
        const response = await tx.saleOrder.create({
          data: {
            total: payload.total,
            createdAt: payload.createdAt,
            saleOrderDetails: {
              create: saleOrderDetails,
            },
          },
          include: {
            saleOrderDetails: true, // Include all posts in the returned object
          },
        });
        // console.log(response);

        //Query add inventory transaction
        await tx.inventoryTransaction.createMany({
          data: InventaryTransaction,
        });

        return response;
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, changes: UpdateSaleOrderItemDto[]) {
    // const order = await this.prisma.saleOrder.findOne({ where: { id } });
    // if (!order) {
    //   throw new NotFoundException(`Order #${id} not found`);
    // }
    // console.log(changes);
    // // this.prisma.saleOrder.merge(order, changes); Parsea el order a lo recibido en el changes
    // return await this.prisma.saleOrder.save(order);
  }

  async remove(id: number) {
    return await this.prisma.saleOrder.delete({ where: { id } });
  }
}
