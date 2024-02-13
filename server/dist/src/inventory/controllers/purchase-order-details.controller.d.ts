import { PurchaseOrderDetailsService } from '../services/purchase-order-details.service';
import { CreatePurchaseOrderItemDto, UpdatePurchaseOrderItemDto } from '../dtos/purchase-order-detail.dto';
export declare class PurchaseOrderDetailsController {
    private purchaseOrderdetailsService;
    constructor(purchaseOrderdetailsService: PurchaseOrderDetailsService);
    getPurchaseOrderDetails(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {})[]>;
    getOne(purchaseorderId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {}>;
    create(payload: CreatePurchaseOrderItemDto[]): Promise<void>;
    update(id: number, payload: UpdatePurchaseOrderItemDto[]): Promise<void>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {}>;
}
