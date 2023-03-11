import { Product } from './product.entity';
import { Order } from './order.entity';
export declare class OrderDetail {
    id: number;
    readonly quantity: number;
    readonly unit_cost: number;
    product: Product;
    Order: Order;
    createdAt: Date;
    updateAt: Date;
}
