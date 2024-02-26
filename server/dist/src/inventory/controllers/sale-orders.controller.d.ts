import { SaleOrdersService } from '../services/sale-order.service';
import { UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
import { CreateSaleOrderDto } from '../dtos/sale-order.dto';
export declare class SaleOrdersController {
    private saleOrdersService;
    constructor(saleOrdersService: SaleOrdersService);
    getOrders(): Promise<({
        saleOrderDetails: (import("@prisma/client/runtime").GetResult<{
            id: number;
            quantity: number;
            unit_price: number;
            createdAt: Date;
            updateAt: Date;
            productId: number;
            saleOrderId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        total: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {})[]>;
    getMonthOrdersResume(): Promise<any>;
    getDayOrdersResume(): Promise<any>;
    getYearOrdersResume(): Promise<any>;
    getOne(orderId: number): Promise<{
        saleOrderDetails: (import("@prisma/client/runtime").GetResult<{
            id: number;
            quantity: number;
            unit_price: number;
            createdAt: Date;
            updateAt: Date;
            productId: number;
            saleOrderId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        total: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {}>;
    create(payload: CreateSaleOrderDto): Promise<any>;
    fromCsvCreate(file: any): any;
    update(id: number, payload: UpdateSaleOrderItemDto[]): Promise<void>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        total: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {}>;
}
