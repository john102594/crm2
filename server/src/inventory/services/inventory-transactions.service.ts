import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CreateInventoryTransactionDto,
  UpdateInventoryTransactionDto,
} from '../dtos/inventory-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventoryTransactionsService {
  constructor(private prisma: PrismaService) {}

  //Find all
  async findAll() {
    return await this.prisma.inventoryTransaction.findMany();
  }

  //Find One
  async findOne(id: number) {
    const inventorytransaction =
      await this.prisma.inventoryTransaction.findUnique({
        where: { id: +id },
      });
    if (!inventorytransaction) {
      throw new NotFoundException(`InventoryTransaction #${id} not found`);
    }
    return inventorytransaction;
  }

  //Find last
  async findLastProduct(id: number) {
    const inventorytransaction =
      await this.prisma.inventoryTransaction.findFirst({
        where: { id },
        orderBy: { id: 'desc' },
      });
    return inventorytransaction;
  }

  //Create
  async create(data: CreateInventoryTransactionDto) {
    // const newInventoryTransaction = this.prisma.inventoryTransaction.create({data}); //Parsea la data al Repo
    // newInventoryTransaction.product = await this.productRepo.findOne({
    //   where: { id: data.productId },
    // });
    // //Encontrar el ultimo movimiento del producto
    // const lastTransaction = await this.findLastProduct(data.productId);
    // let balance = 0;
    // let newBalance = data.quantity;
    // let unit_cost_avg = 0;
    // if (lastTransaction) {
    //   balance = lastTransaction.balance;
    //   newBalance = balance + data.quantity;
    //   unit_cost_avg = lastTransaction.unit_cost_avg;
    // }
    // //Calcular el nuevo balance y costopromedio
    // newInventoryTransaction.balance = newBalance;
    // const newUnitCostAvg =
    //   (unit_cost_avg * balance + data.quantity * data.unit_cost) / newBalance;
    // //Validando si el movimiento es de compra o venta
    // if (data.saleOrderId) {
    //   newInventoryTransaction.saleOrder = await this.saleOrderRepo.findOne({
    //     where: { id: data.saleOrderId },
    //   });
    //   newInventoryTransaction.unit_cost_avg = unit_cost_avg;
    // } else if (data.purchaseOrderId) {
    //   newInventoryTransaction.purchaseOrder =
    //     await this.purchaseOrderRepo.findOne({
    //       where: { id: data.purchaseOrderId },
    //     });
    //   newInventoryTransaction.unit_cost_avg = newUnitCostAvg;
    // }
    // // this.prisma.inventoryTransaction.save(newInventoryTransaction)
    // return await this.prisma.inventoryTransaction.save(newInventoryTransaction);
  }

  //Update
  async update(id: number, changes: UpdateInventoryTransactionDto) {
    // const inventorytransaction = await this.prisma.inventoryTransaction.findOne({
    //   where: { id },
    // });
    // this.prisma.inventoryTransaction.merge(inventorytransaction, changes); //Parsea el inventorytransaction a lo recibido en el changes
    // return await this.prisma.inventoryTransaction.save(inventorytransaction);
  }

  //Remove
  async remove(id: number) {
    return await this.prisma.inventoryTransaction.delete({ where: { id } });
  }
}
