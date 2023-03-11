import { Repository } from 'typeorm';
import { Order } from '../entities/saleOrder.entity';
import { OrderDetail } from '../entities/order-detail.entity';
import { Product } from '../entities/product.entity';
import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-detail.dto';
import { InventoryTransaction } from '../entities/inventory-transactions.entity';
export declare class OrderDetailsService {
    private inventoryTransactionRepo;
    private orderRepo;
    private orderDetailRepo;
    private productRepo;
    constructor(inventoryTransactionRepo: Repository<InventoryTransaction>, orderRepo: Repository<Order>, orderDetailRepo: Repository<OrderDetail>, productRepo: Repository<Product>);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    create(data: CreateOrderItemDto[]): Promise<Order>;
    update(id: number, changes: UpdateOrderItemDto[]): Promise<any>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    calcProductCostAvg(order: any): Promise<{
        balance: any;
        unit_cost_avg: number;
    }>;
}
