import { Product } from './product.entity';
import { SaleOrder } from './sale-order.entity';
export declare class SaleOrderDetail {
    id: number;
    readonly quantity: number;
    readonly unit_price: number;
    product: Product;
    saleOrder: SaleOrder;
    createdAt: Date;
    updateAt: Date;
}
