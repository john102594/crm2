import { Repository } from 'typeorm';
import { SaleOrder } from '../entities/sale-Order.entity';
import { SaleOrderDetail } from '../entities/sale-Order-detail.entity';
import { Product } from '../entities/product.entity';
import { CreateSaleOrderItemDto, UpdateSaleOrderItemDto } from '../dtos/sale-Order-detail.dto';
import { InventoryTransaction } from '../entities/inventory-transactions.entity';
export declare class SaleOrderDetailsService {
    private inventoryTransactionRepo;
    private saleOrderRepo;
    private saleOrderDetailRepo;
    private productRepo;
    constructor(inventoryTransactionRepo: Repository<InventoryTransaction>, saleOrderRepo: Repository<SaleOrder>, saleOrderDetailRepo: Repository<SaleOrderDetail>, productRepo: Repository<Product>);
    findAll(): Promise<SaleOrderDetail[]>;
    findOne(id: number): Promise<SaleOrderDetail>;
    create(data: CreateSaleOrderItemDto[]): Promise<SaleOrder>;
    update(id: number, changes: UpdateSaleOrderItemDto[]): Promise<SaleOrderDetail>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    calcProductCostAvg(saleOrder: any): Promise<{
        balance: any;
        unit_cost_avg: number;
    }>;
}
