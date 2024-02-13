export declare class CreateCompanyDto {
    readonly name: string;
    readonly website: string;
    readonly phone: string;
    readonly document_number: string;
    readonly document_type: string;
}
declare const UpdateCompanyDto_base: import("@nestjs/common").Type<Partial<CreateCompanyDto>>;
export declare class UpdateCompanyDto extends UpdateCompanyDto_base {
}
export {};
