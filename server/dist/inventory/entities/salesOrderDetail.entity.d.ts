import { Product } from './product.entity';
import { Order } from './saleOrder.entity';
export declare class OrderDetail {
    id: number;
    readonly quantity: number;
    readonly unit_price: number;
    product: Product;
    order: Order;
    createdAt: Date;
    updateAt: Date;
}