import { PurchaseOrdersService } from '../services/purchase-orders.service';
import { CreatePurchaseOrderDto } from '../dtos/purchase-order.dto';
export declare class PurchaseOrdersController {
    private purchaseOrdersService;
    constructor(purchaseOrdersService: PurchaseOrdersService);
    getPurchaseOrders(): Promise<({
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
        total: number;
    }, unknown> & {})[]>;
    getMonthOrdersResume(): Promise<any>;
    getDayOrdersResume(): Promise<any>;
    getYearOrdersResume(): Promise<any>;
    getOne(purchaseorderId: number): Promise<{
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
        total: number;
    }, unknown> & {}>;
    create(payload: CreatePurchaseOrderDto): Promise<any>;
    fromCsvCreate(file: any): any;
    update(id: number, payload: any[]): Promise<void>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {}>;
}
