import { Injectable } from '@nestjs/common';

import { CreatePurchaseOrderDto } from '../dtos/purchase-order.dto';
import { CreateInventoryTransactionDto } from '../dtos/inventory-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PurchaseOrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.purchaseOrder.findMany({
      include: {
        purchaseOrderDetails: true,
      },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.purchaseOrder.findUnique({
      where: { id },
      include: { purchaseOrderDetails: true },
    });
    return order;
  }

  async create(payload: CreatePurchaseOrderDto) {
    const productsId = payload.purchaseOrderDetails.map(
      (element) => element.productId,
    );
    try {
      return await this.prisma.$transaction(async (tx) => {
        let InventaryTransaction: CreateInventoryTransactionDto[] = [];

        //Search in db inventoryTransaction the last costAvg and balance for products
        for (let i = 0; i < productsId.length; i++) {
          const element = payload.purchaseOrderDetails[i];
          const result = (await tx.inventoryTransaction.findFirst({
            select: {
              balance: true,
              unitCostAvg: true,
            },
            where: { productId: productsId[i] },
            orderBy: { id: 'desc' },
          })) || {
            balance: 0,
            unitCostAvg: 0,
          };
          const totalsaldo =
            Number(result.unitCostAvg) * Number(result.balance);
          const newsaldo = Number(result.balance) + element.quantity;
          const newcosto_prom =
            (totalsaldo + element.quantity * element.unit_cost) / newsaldo;

          //Add in inventorytransaction the values
          InventaryTransaction.push({
            productId: element.productId,
            transactionTypeId: 1, //id type compra
            quantity: element.quantity,
            unitPrice: element.unit_cost,
            balance: newsaldo,
            unitCostAvg: newcosto_prom,
          });

          // Update product db
          await tx.product.update({
            data: {
              quantity: newsaldo,
              unitCostAvg: newcosto_prom,
            },
            where: {
              id: productsId[i],
            },
          });
        }

        //Query create purchaseOrder and detailOrders
        const response = await tx.purchaseOrder.create({
          data: {
            purchaseOrderDetails: {
              create: payload.purchaseOrderDetails,
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
