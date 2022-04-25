import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { Customer } from '../entities/customer.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';
export declare class OrdersService {
    private orderRepo;
    private customerRepo;
    constructor(orderRepo: Repository<Order>, customerRepo: Repository<Customer>);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    create(data: CreateOrderDto): Promise<Order>;
    update(id: number, changes: UpdateOrderDto): Promise<Order>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
