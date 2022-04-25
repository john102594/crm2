import {
  Injectable,
  NotFoundException,
  // BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PurchaseOrder } from '../entities/purchase-order.entity';
import { PurchaseOrderDetail } from '../entities/purchase-order-detail.entity';
import {
  CreatePurchaseOrderItemDto,
  UpdatePurchaseOrderItemDto,
} from '../dtos/purchase-order-detail.dto';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private purchaseOrderRepo: Repository<PurchaseOrder>,
    @InjectRepository(PurchaseOrderDetail)
    private purchaseOrderDetailRepo: Repository<PurchaseOrderDetail>,
  ) {}

  async findAll() {
    return await this.purchaseOrderRepo.find({
      relations: ['purchaseOrderDetail'],
    });
  }

  async findOne(id: number) {
    const order = await this.purchaseOrderRepo.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  async create(data: CreatePurchaseOrderItemDto[]) {
    return data;
  }

  async update(id: number, changes: UpdatePurchaseOrderItemDto[]) {
    const order = await this.purchaseOrderRepo.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    console.log(changes);
    // this.purchaseOrderRepo.merge(order, changes); Parsea el order a lo recibido en el changes
    return await this.purchaseOrderRepo.save(order);
  }

  async remove(id: number) {
    return await this.purchaseOrderRepo.delete(id);
  }
}
