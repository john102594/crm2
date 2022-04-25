import { OrderItemService } from '../services/order-item.service';
import { CreateOrderItemDto } from '../dtos/order-item.dto';
export declare class OrderItemController {
    private orderItemService;
    constructor(orderItemService: OrderItemService);
    create(payload: CreateOrderItemDto): Promise<import("../entities/order-item.entity").OrderItem>;
}
