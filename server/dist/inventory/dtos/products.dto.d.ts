export declare class CreateProductDto {
    readonly name: string;
    readonly sku: string;
    readonly image: string;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export declare class FilterProductDto {
    limit: number;
    offset: number;
}
export {};
