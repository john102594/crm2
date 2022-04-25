import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InventoryTransaction } from '../entities/inventory-transactions.entity';
import { Product } from '../entities/product.entity';
import { Order } from '../entities/order.entity';
import { PurchaseOrder } from '../entities/purchase-order.entity';

import {
  CreateInventoryTransactionDto,
  UpdateInventoryTransactionDto,
} from '../dtos/inventory-transaction.dto';

@Injectable()
export class InventoryTransactionsService {
  constructor(
    @InjectRepository(InventoryTransaction)
    private inventoryTransactionRepo: Repository<InventoryTransaction>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
    @InjectRepository(PurchaseOrder)
    private purchaseOrderRepo: Repository<PurchaseOrder>,
  ) {}

  //Find all
  async findAll() {
    return await this.inventoryTransactionRepo.find();
  }

  //Find One
  async findOne(id: number) {
    const inventorytransaction = await this.inventoryTransactionRepo.findOne(
      id,
    );
    if (!inventorytransaction) {
      throw new NotFoundException(`InventoryTransaction #${id} not found`);
    }
    return inventorytransaction;
  }

  //Find last
  async findLastProduct(id: number) {
    const inventorytransaction = await this.inventoryTransactionRepo.findOne({
      where: { product: id },
      order: { id: 'DESC' },
    });
    return inventorytransaction;
  }

  //Create
  async create(data: CreateInventoryTransactionDto) {
    const newInventoryTransaction = this.inventoryTransactionRepo.create(data); //Parsea la data al Repo
    newInventoryTransaction.product = await this.productRepo.findOne(
      data.productId,
    );
    //Encontrar el ultimo movimiento del producto
    const lastTransaction = await this.findLastProduct(data.productId);

    let balance = 0;
    let newBalance = data.quantity;
    let unit_cost_avg = 0;

    if (lastTransaction) {
      balance = lastTransaction.balance;
      newBalance = balance + data.quantity;
      unit_cost_avg = lastTransaction.unit_cost_avg;
    }

    //Calcular el nuevo balance y costopromedio
    newInventoryTransaction.balance = newBalance;
    const newUnitCostAvg =
      (unit_cost_avg * balance + data.quantity * data.unit_cost) / newBalance;

    //Validando si el movimiento es de compra o venta
    if (data.OrderId) {
      newInventoryTransaction.order = await this.orderRepo.findOne(
        data.OrderId,
      );
      newInventoryTransaction.unit_cost_avg = unit_cost_avg;
    } else if (data.purchaseOrderId) {
      newInventoryTransaction.purchaseOrder = await this.purchaseOrderRepo.findOne(
        data.purchaseOrderId,
      );
      newInventoryTransaction.unit_cost_avg = newUnitCostAvg;
    }

    // this.inventoryTransactionRepo.save(newInventoryTransaction)
    return await this.inventoryTransactionRepo.save(newInventoryTransaction);
  }

  //Update
  async update(id: number, changes: UpdateInventoryTransactionDto) {
    const inventorytransaction = await this.inventoryTransactionRepo.findOne(
      id,
    );
    this.inventoryTransactionRepo.merge(inventorytransaction, changes); //Parsea el inventorytransaction a lo recibido en el changes
    return await this.inventoryTransactionRepo.save(inventorytransaction);
  }

  //Remove
  async remove(id: number) {
    return await this.inventoryTransactionRepo.delete(id);
  }
}
