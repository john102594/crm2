import { OrderDetailsService } from '../services/order-details.service';
import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-detail.dto';
export declare class OrderDetailsController {
    private orderdetailsService;
    constructor(orderdetailsService: OrderDetailsService);
    getOrderDetails(): Promise<any[]>;
    getOne(orderId: number): Promise<any>;
    create(payload: CreateOrderItemDto[]): Promise<import("../entities/saleOrder.entity").Order>;
    update(id: number, payload: UpdateOrderItemDto[]): Promise<any>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
