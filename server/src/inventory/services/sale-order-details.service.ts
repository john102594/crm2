import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SaleOrder } from '../entities/sale-Order.entity';
import { SaleOrderDetail } from '../entities/sale-Order-detail.entity';
import { Product } from '../entities/product.entity';
import {
  CreateSaleOrderItemDto,
  UpdateSaleOrderItemDto,
} from '../dtos/sale-Order-detail.dto';
import { InventoryTransaction } from '../entities/inventory-transactions.entity';

@Injectable()
export class SaleOrderDetailsService {
  constructor(
    @InjectRepository(InventoryTransaction)
    private inventoryTransactionRepo: Repository<InventoryTransaction>,
    @InjectRepository(SaleOrder) private saleOrderRepo: Repository<SaleOrder>,
    @InjectRepository(SaleOrderDetail)
    private saleOrderDetailRepo: Repository<SaleOrderDetail>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async findAll() {
    return await this.saleOrderDetailRepo.find();
  }

  async findOne(id: number) {
    const SaleOrderDetail = await this.saleOrderDetailRepo.findOne(id);
    if (!SaleOrderDetail) {
      throw new NotFoundException(`SaleOrder #${id} not found`);
    }
    return SaleOrderDetail;
  }

  async create(data: CreateSaleOrderItemDto[]) {
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

    const SaleOrderItems = await this.saleOrderDetailRepo.create(data);
    const inventoryTransactions = [];
    //Asignando productos al detalle de la orden
    await SaleOrderItems.forEach(async (SaleOrderDetail, i) => {
      SaleOrderDetail.product = products[i];
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
    const newSaleOrder = this.saleOrderRepo.create(); //Parsea la data al Repo
    newSaleOrder.saleOrderDetail = SaleOrderItems;
    newSaleOrder.inventoryTransactions = inventoryTransactions;
    await this.saleOrderDetailRepo.save(SaleOrderItems);
    await this.inventoryTransactionRepo.save(inventoryTransactions);
    await this.saleOrderRepo.save(newSaleOrder);
    return newSaleOrder;
  }

  async update(id: number, changes: UpdateSaleOrderItemDto[]) {
    const SaleOrder = await this.saleOrderDetailRepo.findOne(id);
    if (!SaleOrder) {
      throw new NotFoundException(`SaleOrder #${id} not found`);
    }
    console.log(changes);
    // this.SaleOrderDetailRepo.merge(SaleOrder, changes); Parsea el SaleOrder a lo recibido en el changes
    return await this.saleOrderDetailRepo.save(SaleOrder);
  }

  async remove(id: number) {
    return await this.saleOrderDetailRepo.delete(id);
  }

  async calcProductCostAvg(saleOrder) {
    const lastTransaction = await this.inventoryTransactionRepo.findOne({
      where: { product: saleOrder.product.id },
      order: { id: 'DESC' },
    });

    let prevBalance = 0;
    let newBalance = saleOrder.quantity;
    let unit_cost_avg = 0;

    if (lastTransaction) {
      prevBalance = lastTransaction.balance;
      newBalance = prevBalance + saleOrder.quantity;
      unit_cost_avg = lastTransaction.unit_cost_avg;
    }
    const inventorytransaction = {
      balance: newBalance,
      unit_cost_avg: unit_cost_avg,
    };

    return inventorytransaction;
  }
}
