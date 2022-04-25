import { Repository } from 'typeorm';
import { PurchaseOrder } from '../entities/purchase-order.entity';
import { PurchaseOrderDetail } from '../entities/purchase-order-detail.entity';
import { Product } from '../entities/product.entity';
import { CreatePurchaseOrderItemDto, UpdatePurchaseOrderItemDto } from '../dtos/purchase-order-detail.dto';
import { InventoryTransaction } from '../entities/inventory-transactions.entity';
export declare class PurchaseOrderDetailsService {
    private inventoryTransactionRepo;
    private purchaseOrderRepo;
    private purchaseOrderDetailRepo;
    private productRepo;
    constructor(inventoryTransactionRepo: Repository<InventoryTransaction>, purchaseOrderRepo: Repository<PurchaseOrder>, purchaseOrderDetailRepo: Repository<PurchaseOrderDetail>, productRepo: Repository<Product>);
    findAll(): Promise<PurchaseOrderDetail[]>;
    findOne(id: number): Promise<PurchaseOrderDetail>;
    create(data: CreatePurchaseOrderItemDto[]): Promise<PurchaseOrder>;
    update(id: number, changes: UpdatePurchaseOrderItemDto[]): Promise<PurchaseOrderDetail>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    calcProductCostAvg(orderPurchase: any): Promise<{
        balance: any;
        unit_cost_avg: number;
    }>;
}
