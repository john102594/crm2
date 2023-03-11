import { PurchaseOrdersService } from '../services/purchase-orders.service';
import { CreatePurchaseOrderItemDto, UpdatePurchaseOrderItemDto } from '../dtos/purchase-order-detail.dto';
export declare class PurchaseOrdersController {
    private purchaseOrdersService;
    constructor(purchaseOrdersService: PurchaseOrdersService);
    getPurchaseOrders(): Promise<any[]>;
    getOne(purchaseorderId: number): Promise<any>;
    create(payload: CreatePurchaseOrderItemDto[]): Promise<CreatePurchaseOrderItemDto[]>;
    update(id: number, payload: UpdatePurchaseOrderItemDto[]): Promise<any>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
