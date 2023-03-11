import { InventoryTransaction } from './inventory-transactions.entity';
export declare class Product {
    id: number;
    name: string;
    sku: string;
    purchase_price: number;
    sale_price: number;
    readonly quantity: number;
    image: string;
    createdAt: Date;
    updateAt: Date;
    inventoryTransactions: InventoryTransaction[];
}
