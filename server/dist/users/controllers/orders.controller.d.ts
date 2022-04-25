import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dtos/order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<import("../entities/order.entity").Order[]>;
    get(id: number): Promise<import("../entities/order.entity").Order>;
    create(payload: CreateOrderDto): Promise<import("../entities/order.entity").Order>;
    update(id: number, payload: CreateOrderDto): Promise<import("../entities/order.entity").Order>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
