export declare class CreateProductDto {
    readonly orderId: number;
    readonly quantity: number;
    readonly unit_cost: string;
    readonly productIds: number[];
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export {};
