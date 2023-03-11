import { InventoryTransaction } from './inventory-transactions.entity';
import { SaleOrderDetail } from './sale-order-detail.entity';
export declare class SaleOrder {
    id: number;
    saleOrderDetail: SaleOrderDetail[];
    inventoryTransactions: InventoryTransaction[];
    createdAt: Date;
    updateAt: Date;
}
