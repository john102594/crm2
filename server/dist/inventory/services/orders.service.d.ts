import { Repository } from 'typeorm';
import { Order } from '../entities/saleOrder.entity';
import { OrderDetail } from '../entities/order-detail.entity';
import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-detail.dto';
export declare class OrdersService {
    private orderRepo;
    private orderDetailRepo;
    constructor(orderRepo: Repository<Order>, orderDetailRepo: Repository<OrderDetail>);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    create(data: CreateOrderItemDto[]): Promise<CreateOrderItemDto[]>;
    update(id: number, changes: UpdateOrderItemDto[]): Promise<Order>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
