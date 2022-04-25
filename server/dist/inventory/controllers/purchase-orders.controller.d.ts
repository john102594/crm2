import { PurchaseOrdersService } from '../services/purchase-orders.service';
import { CreatePurchaseOrderItemDto, UpdatePurchaseOrderItemDto } from '../dtos/purchase-order-detail.dto';
export declare class PurchaseOrdersController {
    private purchaseOrdersService;
    constructor(purchaseOrdersService: PurchaseOrdersService);
    getPurchaseOrders(): Promise<import("../entities/purchase-order.entity").PurchaseOrder[]>;
    getOne(purchaseorderId: number): Promise<import("../entities/purchase-order.entity").PurchaseOrder>;
    create(payload: CreatePurchaseOrderItemDto[]): Promise<CreatePurchaseOrderItemDto[]>;
    update(id: number, payload: UpdatePurchaseOrderItemDto[]): Promise<import("../entities/purchase-order.entity").PurchaseOrder>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
