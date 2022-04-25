import { PurchaseOrderDetailsService } from '../services/purchase-order-details.service';
import { CreatePurchaseOrderItemDto, UpdatePurchaseOrderItemDto } from '../dtos/purchase-order-detail.dto';
export declare class PurchaseOrderDetailsController {
    private purchaseOrderdetailsService;
    constructor(purchaseOrderdetailsService: PurchaseOrderDetailsService);
    getPurchaseOrderDetails(): Promise<import("../entities/purchase-order-detail.entity").PurchaseOrderDetail[]>;
    getOne(purchaseorderId: number): Promise<import("../entities/purchase-order-detail.entity").PurchaseOrderDetail>;
    create(payload: CreatePurchaseOrderItemDto[]): Promise<import("../entities/purchase-order.entity").PurchaseOrder>;
    update(id: number, payload: UpdatePurchaseOrderItemDto[]): Promise<import("../entities/purchase-order-detail.entity").PurchaseOrderDetail>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
