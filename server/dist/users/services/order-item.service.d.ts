import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { CreateOrderItemDto } from '../dtos/order-item.dto';
export declare class OrderItemService {
    private orderRepo;
    private itemRepo;
    constructor(orderRepo: Repository<Order>, itemRepo: Repository<OrderItem>);
    create(data: CreateOrderItemDto): Promise<OrderItem>;
}
