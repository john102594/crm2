import { InventoryTransaction } from './inventory-transactions.entity';
import { OrderDetail } from './order-detail.entity';
export declare class Order {
    id: number;
    orderDetail: OrderDetail[];
    inventoryTransactions: InventoryTransaction[];
    createdAt: Date;
    updateAt: Date;
}
