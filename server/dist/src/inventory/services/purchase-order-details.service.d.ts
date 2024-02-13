import { CreatePurchaseOrderItemDto, UpdatePurchaseOrderItemDto } from '../dtos/purchase-order-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PurchaseOrderDetailsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {})[]>;
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {}>;
    create(data: CreatePurchaseOrderItemDto[]): Promise<void>;
    update(id: number, changes: UpdatePurchaseOrderItemDto[]): Promise<void>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {}>;
    calcProductCostAvg(orderPurchase: any): Promise<void>;
}
