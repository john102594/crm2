import { Product } from './product.entity';
import { PurchaseOrder } from './purchase-order.entity';
import { Order } from './order.entity';
export declare class InventoryTransaction {
    id: number;
    product: Product;
    readonly quantity: number;
    readonly unit_price: number;
    balance: number;
    unit_cost_avg: number;
    purchaseOrder: PurchaseOrder;
    order: Order;
    createdAt: Date;
    updateAt: Date;
}
