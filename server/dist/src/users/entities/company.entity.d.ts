import { Supplier } from './supplier.entity';
import { DocumentType } from 'src/common/document-type';
export declare class Company {
    id: number;
    readonly name: string;
    readonly phone: string;
    readonly website: string;
    readonly document_number: string;
    document_type: DocumentType;
    supplier: Supplier[];
    createdAt: Date;
    updateAt: Date;
}
