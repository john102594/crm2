import {
  Injectable,
  NotFoundException,
  // BadRequestException,
} from '@nestjs/common';
import {
  CreateSaleOrderItemDto,
  UpdateSaleOrderItemDto,
} from '../dtos/sale-order-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleOrderDto } from '../dtos/sale-order.dto';
import { CreateInventoryTransactionDto } from '../dtos/inventory-transaction.dto';

@Injectable()
export class SaleOrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.saleOrder.findMany({
      include: { saleOrderDetails: true },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.saleOrder.findUnique({
      where: { id },
      include: { saleOrderDetails: true },
    });
    return order;
  }

  async create(payload: CreateSaleOrderDto) {
    const productsId = payload.saleOrderDetails.map(
      (element) => element.productId,
    );
    try {
      return await this.prisma.$transaction(async (tx) => {
        let InventaryTransaction: CreateInventoryTransactionDto[] = [];

        for (let i = 0; i < productsId.length; i++) {
          const element = payload.saleOrderDetails[i];
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
          const newsaldo = Number(result.balance) - element.quantity;

          InventaryTransaction.push({
            productId: element.productId,
            transactionTypeId: 2, //id type compra
            quantity: -element.quantity,
            unitPrice: element.unit_price,
            balance: newsaldo,
            unitCostAvg: result.unitCostAvg,
          });

          // Update product db
          await tx.product.update({
            data: {
              quantity: newsaldo,
              unitCostAvg: result.unitCostAvg,
            },
            where: {
              id: productsId[i],
            },
          });
        }

        //Query create sale order and order detail
        const response = await tx.saleOrder.create({
          data: {
            saleOrderDetails: {
              create: payload.saleOrderDetails,
            },
          },
          include: {
            saleOrderDetails: true, // Include all posts in the returned object
          },
        });

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
