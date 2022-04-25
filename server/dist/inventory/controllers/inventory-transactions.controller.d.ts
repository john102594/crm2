import { InventoryTransactionsService } from '../services/inventory-transactions.service';
import { CreateInventoryTransactionDto, UpdateInventoryTransactionDto } from '../dtos/inventory-transaction.dto';
export declare class InventoryTransactionsController {
    private inventoryTransactionsServices;
    constructor(inventoryTransactionsServices: InventoryTransactionsService);
    getOrders(): Promise<import("../entities/inventory-transactions.entity").InventoryTransaction[]>;
    getOne(orderId: number): Promise<import("../entities/inventory-transactions.entity").InventoryTransaction>;
    create(payload: CreateInventoryTransactionDto): Promise<import("../entities/inventory-transactions.entity").InventoryTransaction>;
    update(id: number, payload: UpdateInventoryTransactionDto): Promise<import("../entities/inventory-transactions.entity").InventoryTransaction>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
