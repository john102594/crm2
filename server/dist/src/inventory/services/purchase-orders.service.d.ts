import { CreatePurchaseOrderDto } from '../dtos/purchase-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PurchaseOrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        purchaseOrderDetails: (import("@prisma/client/runtime").GetResult<{
            id: number;
            quantity: number;
            unit_cost: number;
            createdAt: Date;
            updateAt: Date;
            productId: number;
            purchaseOrderId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {})[]>;
    findOne(id: number): Promise<{
        purchaseOrderDetails: (import("@prisma/client/runtime").GetResult<{
            id: number;
            quantity: number;
            unit_cost: number;
            createdAt: Date;
            updateAt: Date;
            productId: number;
            purchaseOrderId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {}>;
    create(payload: CreatePurchaseOrderDto): Promise<any>;
    update(id: number, changes: any[]): Promise<void>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {}>;
}
