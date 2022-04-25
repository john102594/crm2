import { InventoryTransaction } from './inventory-transactions.entity';
export declare class Product {
    id: number;
    name: string;
    sku: string;
    image: string;
    createdAt: Date;
    updateAt: Date;
    transations: InventoryTransaction[];
}
