import { CreateInventoryTransactionDto, UpdateInventoryTransactionDto } from '../dtos/inventory-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class InventoryTransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
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
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    findLastProduct(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    create(data: CreateInventoryTransactionDto): Promise<void>;
    update(id: number, changes: UpdateInventoryTransactionDto): Promise<void>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
