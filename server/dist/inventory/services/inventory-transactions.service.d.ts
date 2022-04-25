import { Repository } from 'typeorm';
import { InventoryTransaction } from '../entities/inventory-transactions.entity';
import { Product } from '../entities/product.entity';
import { Order } from '../entities/order.entity';
import { PurchaseOrder } from '../entities/purchase-order.entity';
import { CreateInventoryTransactionDto, UpdateInventoryTransactionDto } from '../dtos/inventory-transaction.dto';
export declare class InventoryTransactionsService {
    private inventoryTransactionRepo;
    private productRepo;
    private orderRepo;
    private purchaseOrderRepo;
    constructor(inventoryTransactionRepo: Repository<InventoryTransaction>, productRepo: Repository<Product>, orderRepo: Repository<Order>, purchaseOrderRepo: Repository<PurchaseOrder>);
    findAll(): Promise<InventoryTransaction[]>;
    findOne(id: number): Promise<InventoryTransaction>;
    findLastProduct(id: number): Promise<InventoryTransaction>;
    create(data: CreateInventoryTransactionDto): Promise<InventoryTransaction>;
    update(id: number, changes: UpdateInventoryTransactionDto): Promise<InventoryTransaction>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
