export declare class CreateSupplierDto {
    readonly companyId: number;
    readonly personId: number;
}
declare const UpdateSupplierDto_base: import("@nestjs/common").Type<Partial<CreateSupplierDto>>;
export declare class UpdateSupplierDto extends UpdateSupplierDto_base {
}
export {};
