import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from '../entities/order.entity';
import { OrderDetail } from '../entities/order-detail.entity';
import { Product } from '../entities/product.entity';
import {
  CreateOrderItemDto,
  UpdateOrderItemDto,
} from '../dtos/order-detail.dto';
import { InventoryTransaction } from '../entities/inventory-transactions.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(InventoryTransaction)
    private inventoryTransactionRepo: Repository<InventoryTransaction>,
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(OrderDetail)
    private orderDetailRepo: Repository<OrderDetail>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async findAll() {
    return await this.orderDetailRepo.find();
  }

  async findOne(id: number) {
    const orderDetail = await this.orderDetailRepo.findOne(id);
    if (!orderDetail) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return orderDetail;
  }

  async create(data: CreateOrderItemDto[]) {
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

    const orderItems = await this.orderDetailRepo.create(data);
    const inventoryTransactions = [];
    //Asignando productos al detalle de la orden
    await orderItems.forEach(async (orderDetail, i) => {
      orderDetail.product = products[i];
      inventoryTransactions[i] = {
        product: products[i],
        quantity: -data[i].quantity,
        unit_price: data[i].unit_price,
      };
      const { balance, unit_cost_avg } = await this.calcProductCostAvg(
        inventoryTransactions[i],
      );
      inventoryTransactions[i].balance = balance;
      inventoryTransactions[i].unit_cost_avg = unit_cost_avg;
    });
    const newOrder = this.orderRepo.create(); //Parsea la data al Repo
    newOrder.orderDetail = orderItems;
    newOrder.inventoryTransactions = inventoryTransactions;
    await this.orderDetailRepo.save(orderItems);
    await this.inventoryTransactionRepo.save(inventoryTransactions);
    await this.orderRepo.save(newOrder);
    return newOrder;
  }

  async update(id: number, changes: UpdateOrderItemDto[]) {
    const order = await this.orderDetailRepo.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    console.log(changes);
    // this.orderDetailRepo.merge(order, changes); Parsea el order a lo recibido en el changes
    return await this.orderDetailRepo.save(order);
  }

  async remove(id: number) {
    return await this.orderDetailRepo.delete(id);
  }

  async calcProductCostAvg(order) {
    const lastTransaction = await this.inventoryTransactionRepo.findOne({
      where: { product: order.product.id },
      order: { id: 'DESC' },
    });

    let prevBalance = 0;
    let newBalance = order.quantity;
    let unit_cost_avg = 0;

    if (lastTransaction) {
      prevBalance = lastTransaction.balance;
      newBalance = prevBalance + order.quantity;
      unit_cost_avg = lastTransaction.unit_cost_avg;
    }
    const inventorytransaction = {
      balance: newBalance,
      unit_cost_avg: unit_cost_avg,
    };

    return inventorytransaction;
  }
}
