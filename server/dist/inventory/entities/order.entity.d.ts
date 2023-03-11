import { OrderDetail } from './orderDetail.entity';
import { InventoryTransaction } from './inventory-transactions.entity';
export declare class Order {
    id: number;
    OrderDetail: OrderDetail[];
    inventoryTransactions: InventoryTransaction[];
    createdAt: Date;
    updateAt: Date;
}
