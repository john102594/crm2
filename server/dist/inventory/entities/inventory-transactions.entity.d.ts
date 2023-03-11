import { Product } from './product.entity';
import { PurchaseOrder } from './purchase-order.entity';
import { SaleOrder } from './sale-order.entity';
export declare class InventoryTransaction {
    id: number;
    product: Product;
    readonly quantity: number;
    readonly unit_price: number;
    balance: number;
    unit_cost_avg: number;
    purchaseOrder: PurchaseOrder;
    saleOrder: SaleOrder;
    createdAt: Date;
    updateAt: Date;
}
