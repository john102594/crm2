import { PurchaseOrderDetail } from './purchase-order-detail.entity';
import { InventoryTransaction } from './inventory-transactions.entity';
export declare class PurchaseOrder {
    id: number;
    purchaseOrderDetail: PurchaseOrderDetail[];
    inventoryTransactions: InventoryTransaction[];
    createdAt: Date;
    updateAt: Date;
}
