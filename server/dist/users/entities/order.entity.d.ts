import { Customer } from './customer.entity';
import { OrderItem } from './order-item.entity';
export declare class Order {
    id: number;
    createdAt: Date;
    updateAt: Date;
    customer: Customer;
    products: OrderItem[];
}
