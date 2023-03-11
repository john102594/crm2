import { PurchaseOrderDetailsService } from '../services/purchase-order-details.service';
import { CreatePurchaseOrderItemDto, UpdatePurchaseOrderItemDto } from '../dtos/purchase-order-detail.dto';
export declare class PurchaseOrderDetailsController {
    private purchaseOrderdetailsService;
    constructor(purchaseOrderdetailsService: PurchaseOrderDetailsService);
    getPurchaseOrderDetails(): Promise<any[]>;
    getOne(purchaseorderId: number): Promise<any>;
    create(payload: CreatePurchaseOrderItemDto[]): Promise<any>;
    update(id: number, payload: UpdatePurchaseOrderItemDto[]): Promise<any>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
