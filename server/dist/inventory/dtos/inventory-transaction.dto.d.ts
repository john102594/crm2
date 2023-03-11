export declare class CreateInventoryTransactionDto {
    readonly productId: number;
    readonly quantity: number;
    readonly unit_price: number;
    readonly unit_cost: number;
    readonly purchaseOrderId: number;
    readonly saleOrderId: number;
}
declare const UpdateInventoryTransactionDto_base: import("@nestjs/common").Type<Partial<CreateInventoryTransactionDto>>;
export declare class UpdateInventoryTransactionDto extends UpdateInventoryTransactionDto_base {
}
export {};
