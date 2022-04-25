import { Order } from './order.entity';
export declare class OrderItem {
    id: number;
    createdAt: Date;
    updateAt: Date;
    quatity: number;
    order: Order;
}
