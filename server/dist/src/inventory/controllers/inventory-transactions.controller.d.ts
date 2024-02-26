import { InventoryTransactionsService } from '../services/inventory-transactions.service';
import { CreateInventoryTransactionDto, UpdateInventoryTransactionDto } from '../dtos/inventory-transaction.dto';
export declare class InventoryTransactionsController {
    private inventoryTransactionsServices;
    constructor(inventoryTransactionsServices: InventoryTransactionsService);
    getOrders(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unitPrice: number;
        balance: number;
        unitCostAvg: number;
        transactionTypeId: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
    }, unknown> & {})[]>;
    getMonthOrdersResume(): Promise<any>;
    getDayOrdersResume(): Promise<any>;
    getYearOrdersResume(): Promise<any>;
    getOne(orderId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unitPrice: number;
        balance: number;
        unitCostAvg: number;
        transactionTypeId: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
    }, unknown> & {}>;
    create(payload: CreateInventoryTransactionDto): Promise<void>;
    update(id: number, payload: UpdateInventoryTransactionDto): Promise<void>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unitPrice: number;
        balance: number;
        unitCostAvg: number;
        transactionTypeId: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
    }, unknown> & {}>;
}
