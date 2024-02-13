export declare class CreateSaleOrderItemDto {
    readonly quantity: number;
    readonly unit_price: number;
    readonly productId: number;
}
declare const UpdateSaleOrderItemDto_base: import("@nestjs/common").Type<Partial<CreateSaleOrderItemDto>>;
export declare class UpdateSaleOrderItemDto extends UpdateSaleOrderItemDto_base {
}
export {};
