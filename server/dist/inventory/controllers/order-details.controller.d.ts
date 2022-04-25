import { OrderDetailsService } from '../services/order-details.service';
import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-detail.dto';
export declare class OrderDetailsController {
    private orderdetailsService;
    constructor(orderdetailsService: OrderDetailsService);
    getOrderDetails(): Promise<import("../entities/order-detail.entity").OrderDetail[]>;
    getOne(orderId: number): Promise<import("../entities/order-detail.entity").OrderDetail>;
    create(payload: CreateOrderItemDto[]): Promise<import("../entities/order.entity").Order>;
    update(id: number, payload: UpdateOrderItemDto[]): Promise<import("../entities/order-detail.entity").OrderDetail>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
