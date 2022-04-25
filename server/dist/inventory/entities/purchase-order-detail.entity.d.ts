import { Product } from './product.entity';
import { PurchaseOrder } from './purchase-order.entity';
export declare class PurchaseOrderDetail {
    id: number;
    readonly quantity: number;
    readonly unit_cost: number;
    product: Product;
    purchaseOrder: PurchaseOrder;
    createdAt: Date;
    updateAt: Date;
}
