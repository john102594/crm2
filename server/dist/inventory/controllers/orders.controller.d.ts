import { OrdersService } from '../services/orders.service';
import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-detail.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<import("../entities/order.entity").Order[]>;
    getOne(orderId: number): Promise<import("../entities/order.entity").Order>;
    create(payload: CreateOrderItemDto[]): Promise<CreateOrderItemDto[]>;
    update(id: number, payload: UpdateOrderItemDto[]): Promise<import("../entities/order.entity").Order>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
