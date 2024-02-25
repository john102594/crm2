export declare class CreateProductDto {
    readonly name: string;
    readonly sku: string;
    readonly image?: string;
    unitCostAvg: number;
    salePrice: number;
    quantity: number;
    ubicationId: number;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
declare const FindSkuProductDto_base: import("@nestjs/common").Type<Pick<CreateProductDto, "sku">>;
export declare class FindSkuProductDto extends FindSkuProductDto_base {
}
export declare class CreatedManyProduct {
    state: string;
    product: Partial<CreateProductDto>;
}
export declare class FilterProductDto {
    take?: number;
    skip?: number;
    where?: CreateProductDto;
}
export {};
