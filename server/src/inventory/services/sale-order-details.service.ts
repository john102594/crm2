import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CreateSaleOrderItemDto,
  UpdateSaleOrderItemDto,
} from '../dtos/sale-order-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class SaleOrderDetailsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.saleOrderDetail.findMany();
  }

  async findOne(id: number) {
    const SaleOrderDetail = await this.prisma.saleOrderDetail.findUnique({
      where: { id },
    });
    return SaleOrderDetail;
  }

  async create(data: CreateSaleOrderItemDto[]) {
    //   //Validando que todos los productos existen
    //   const productIds = data.map((element) => element.productId);
    //   const products = await this.productRepo.findByIds(productIds);
    //   if (data.length !== products.length) {
    //     const idsFound = products.map((product) => product.id);
    //     const idsNotFound = productIds.filter(
    //       (element) => !idsFound.includes(element),
    //     );
    //     throw new NotFoundException(`Products #${idsNotFound} not found`);
    //   }
    //   const SaleOrderItems = await this.prisma.saleOrderDetail.create(data);
    //   const inventoryTransactions = [];
    //   //Asignando productos al detalle de la orden
    //   await SaleOrderItems.forEach(async (SaleOrderDetail, i) => {
    //     SaleOrderDetail.product = products[i];
    //     inventoryTransactions[i] = {
    //       product: products[i],
    //       quantity: -data[i].quantity,
    //       unit_price: data[i].unit_price,
    //     };
    //     const { balance, unit_cost_avg } = await this.calcProductCostAvg(
    //       inventoryTransactions[i],
    //     );
    //     inventoryTransactions[i].balance = balance;
    //     inventoryTransactions[i].unit_cost_avg = unit_cost_avg;
    //   });
    //   const newSaleOrder = this.saleOrderRepo.create(); //Parsea la data al Repo
    //   newSaleOrder.saleOrderDetail = SaleOrderItems;
    //   newSaleOrder.inventoryTransactions = inventoryTransactions;
    //   await this.prisma.saleOrderDetail.save(SaleOrderItems);
    //   await this.prisma.saleOrderDetail.save(inventoryTransactions);
    //   await this.saleOrderRepo.save(newSaleOrder);
    //   return newSaleOrder;
  }

  async update(id: number, changes: UpdateSaleOrderItemDto[]) {
    // const SaleOrder = await this.prisma.saleOrderDetail.findOne({ where: { id } });
    // if (!SaleOrder) {
    //   throw new NotFoundException(`SaleOrder #${id} not found`);
    // }
    // console.log(changes);
    // // this.prisma.saleOrderDetail.merge(SaleOrder, changes); Parsea el SaleOrder a lo recibido en el changes
    // return await this.prisma.saleOrderDetail.save(SaleOrder);
  }

  async remove(id: number) {
    return await this.prisma.saleOrderDetail.delete({ where: { id } });
  }

  async calcProductCostAvg(saleOrder) {
    const lastTransaction = await this.prisma.saleOrderDetail.findFirst({
      where: { product: saleOrder.product.id },
      orderBy: { id: 'desc' },
    });

    // let prevBalance = 0;
    // let newBalance = saleOrder.quantity;
    // let unit_cost_avg = 0;

    // if (lastTransaction) {
    //   prevBalance = lastTransaction.balance;
    //   newBalance = prevBalance + saleOrder.quantity;
    //   unit_cost_avg = lastTransaction.unit_cost_avg;
    // }
    // const inventorytransaction = {
    //   balance: newBalance,
    //   unit_cost_avg: unit_cost_avg,
    // };

    // return inventorytransaction;
  }
}
