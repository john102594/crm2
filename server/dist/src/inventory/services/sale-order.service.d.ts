import { UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleOrderDto } from '../dtos/sale-order.dto';
export declare class SaleOrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
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
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {})[]>;
    findOne(id: number): Promise<{
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
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {}>;
    create(payload: CreateSaleOrderDto): Promise<any>;
    update(id: number, changes: UpdateSaleOrderItemDto[]): Promise<void>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {}>;
}
