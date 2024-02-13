export declare class CreateInventoryTransactionDto {
    readonly productId: number;
    readonly quantity: number;
    readonly unitPrice: number;
    readonly balance: number;
    readonly unitCostAvg: number;
    readonly transactionTypeId: number;
}
declare const UpdateInventoryTransactionDto_base: import("@nestjs/common").Type<Partial<CreateInventoryTransactionDto>>;
export declare class UpdateInventoryTransactionDto extends UpdateInventoryTransactionDto_base {
}
export {};
