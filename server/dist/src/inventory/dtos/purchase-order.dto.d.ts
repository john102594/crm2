import { CreatePurchaseOrderItemDto } from './purchase-order-detail.dto';
export declare class CreatePurchaseOrderDto {
    readonly total_cost: number;
    readonly purchaseOrderDetails: CreatePurchaseOrderItemDto[];
}
