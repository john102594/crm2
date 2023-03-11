import { SaleOrderDetailsService } from '../services/sale-order-details.service';
import { CreateSaleOrderItemDto, UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
export declare class SaleOrderDetailsController {
    private saleOderdetailsService;
    constructor(saleOderdetailsService: SaleOrderDetailsService);
    getOrderDetails(): Promise<import("../entities/sale-order-detail.entity").SaleOrderDetail[]>;
    getOne(saleOrderId: number): Promise<import("../entities/sale-order-detail.entity").SaleOrderDetail>;
    create(payload: CreateSaleOrderItemDto[]): Promise<import("../entities/sale-Order.entity").SaleOrder>;
    update(id: number, payload: UpdateSaleOrderItemDto[]): Promise<import("../entities/sale-order-detail.entity").SaleOrderDetail>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
