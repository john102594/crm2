import { SaleOrdersService } from '../services/sale-order.service';
import { CreateSaleOrderItemDto, UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
export declare class SaleOrdersController {
    private saleOrdersService;
    constructor(saleOrdersService: SaleOrdersService);
    getOrders(): Promise<import("../entities/sale-Order.entity").SaleOrder[]>;
    getOne(orderId: number): Promise<import("../entities/sale-Order.entity").SaleOrder>;
    create(payload: CreateSaleOrderItemDto[]): Promise<CreateSaleOrderItemDto[]>;
    update(id: number, payload: UpdateSaleOrderItemDto[]): Promise<import("../entities/sale-Order.entity").SaleOrder>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
