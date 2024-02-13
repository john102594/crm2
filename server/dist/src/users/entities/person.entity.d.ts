import { DocumentType } from 'src/common/document-type';
export declare class Person {
    id: number;
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly document_number: string;
    document_type: DocumentType;
    createdAt: Date;
    updateAt: Date;
}
