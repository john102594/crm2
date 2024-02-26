export declare class CreatePurchaseOrderItemDto {
    readonly quantity: number;
    readonly unit_cost: number;
    readonly productId?: number;
    readonly sku?: string;
    readonly createdAt?: Date;
}
declare const UpdatePurchaseOrderItemDto_base: import("@nestjs/common").Type<Partial<CreatePurchaseOrderItemDto>>;
export declare class UpdatePurchaseOrderItemDto extends UpdatePurchaseOrderItemDto_base {
}
export {};
