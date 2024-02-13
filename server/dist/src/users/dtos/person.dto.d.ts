export declare class CreatePersonDto {
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly document_number: string;
    readonly document_type: string;
}
declare const UpdatePersonDto_base: import("@nestjs/common").Type<Partial<CreatePersonDto>>;
export declare class UpdatePersonDto extends UpdatePersonDto_base {
}
export {};
