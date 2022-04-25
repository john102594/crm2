export declare class CreateOrderItemDto {
    readonly orderId: number;
    readonly productId: number;
    readonly quantity: number;
}
declare const UpdateOrderItemDto_base: import("@nestjs/common").Type<Partial<CreateOrderItemDto>>;
export declare class UpdateOrderItemDto extends UpdateOrderItemDto_base {
}
export {};
