import { CreatePurchaseOrderItemDto } from './purchase-order-detail.dto';
export declare class CreatePurchaseOrderDto {
    readonly total: number;
    readonly createdAt?: Date;
    readonly purchaseOrderDetails: CreatePurchaseOrderItemDto[];
}
