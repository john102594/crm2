export declare class CreateOrderItemDto {
    readonly quantity: number;
    readonly unit_price: number;
    readonly productId: number;
}
declare const UpdateOrderItemDto_base: import("@nestjs/common").Type<Partial<CreateOrderItemDto>>;
export declare class UpdateOrderItemDto extends UpdateOrderItemDto_base {
}
export {};
