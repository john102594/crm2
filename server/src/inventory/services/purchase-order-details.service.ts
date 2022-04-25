import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PurchaseOrder } from '../entities/purchase-order.entity';
import { PurchaseOrderDetail } from '../entities/purchase-order-detail.entity';
import { Product } from '../entities/product.entity';
import {
  CreatePurchaseOrderItemDto,
  UpdatePurchaseOrderItemDto,
} from '../dtos/purchase-order-detail.dto';
import { InventoryTransaction } from '../entities/inventory-transactions.entity';

@Injectable()
export class PurchaseOrderDetailsService {
  constructor(
    @InjectRepository(InventoryTransaction)
    private inventoryTransactionRepo: Repository<InventoryTransaction>,
    @InjectRepository(PurchaseOrder)
    private purchaseOrderRepo: Repository<PurchaseOrder>,
    @InjectRepository(PurchaseOrderDetail)
    private purchaseOrderDetailRepo: Repository<PurchaseOrderDetail>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async findAll() {
    return await this.purchaseOrderDetailRepo.find();
  }

  async findOne(id: number) {
    const purchaseorderDetail = await this.purchaseOrderDetailRepo.findOne(id);
    if (!purchaseorderDetail) {
      throw new NotFoundException(`PurchaseOrder #${id} not found`);
    }
    return purchaseorderDetail;
  }

  async create(data: CreatePurchaseOrderItemDto[]) {
    //Validando que todos los productos existen
    const productIds = data.map((element) => element.productId);
    const products = await this.productRepo.findByIds(productIds);
    if (data.length !== products.length) {
      const idsFound = products.map((product) => product.id);
      const idsNotFound = productIds.filter(
        (element) => !idsFound.includes(element),
      );
      throw new NotFoundException(`Products #${idsNotFound} not found`);
    }

    const purchaseOrderItems = this.purchaseOrderDetailRepo.create(data);

    const inventoryTransactions = [];
    //Asignando productos al detalle de la orden y movimientos de inventario
    for (let i = 0; i < purchaseOrderItems.length; i++) {
      purchaseOrderItems[i].product = products[i];
      inventoryTransactions[i] = {
        product: products[i],
        quantity: data[i].quantity,
        unit_cost: data[i].unit_cost,
      };
      const { balance, unit_cost_avg } = await this.calcProductCostAvg(
        inventoryTransactions[i],
      );
      inventoryTransactions[i].balance = balance;
      inventoryTransactions[i].unit_cost_avg = unit_cost_avg;
    }

    const newPurchaseOrder = this.purchaseOrderRepo.create(); //Parsea la data al Repo
    newPurchaseOrder.purchaseOrderDetail = purchaseOrderItems;
    newPurchaseOrder.inventoryTransactions = inventoryTransactions;
    await this.purchaseOrderDetailRepo.save(purchaseOrderItems);
    await this.inventoryTransactionRepo.save(inventoryTransactions);
    await this.purchaseOrderRepo.save(newPurchaseOrder);
    return newPurchaseOrder;
  }

  async update(id: number, changes: UpdatePurchaseOrderItemDto[]) {
    const purchaseorder = await this.purchaseOrderDetailRepo.findOne(id);
    if (!purchaseorder) {
      throw new NotFoundException(`PurchaseOrder #${id} not found`);
    }
    console.log(changes);
    // this.purchaseorderDetailRepo.merge(purchaseorder, changes); Parsea el purchaseorder a lo recibido en el changes
    return await this.purchaseOrderDetailRepo.save(purchaseorder);
  }

  async remove(id: number) {
    return await this.purchaseOrderDetailRepo.delete(id);
  }

  async calcProductCostAvg(orderPurchase) {
    const lastTransaction = await this.inventoryTransactionRepo.findOne({
      where: { product: orderPurchase.product.id },
      order: { id: 'DESC' },
    });

    let prevBalance = 0;
    let newBalance = orderPurchase.quantity;
    let unit_cost_avg = 0;

    if (lastTransaction) {
      prevBalance = lastTransaction.balance;
      newBalance = prevBalance + orderPurchase.quantity;
      unit_cost_avg = lastTransaction.unit_cost_avg;
    }

    const newUnitCostAvg =
      (unit_cost_avg * prevBalance +
        orderPurchase.quantity * orderPurchase.unit_cost) /
      newBalance;

    const inventorytransaction = {
      balance: newBalance,
      unit_cost_avg: newUnitCostAvg,
    };

    return inventorytransaction;
  }
}
