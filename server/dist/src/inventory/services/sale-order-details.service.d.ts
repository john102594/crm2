import { CreateSaleOrderItemDto, UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SaleOrderDetailsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_price: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        saleOrderId: number;
    }, unknown> & {})[]>;
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_price: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        saleOrderId: number;
    }, unknown> & {}>;
    create(data: CreateSaleOrderItemDto[]): Promise<void>;
    update(id: number, changes: UpdateSaleOrderItemDto[]): Promise<void>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_price: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        saleOrderId: number;
    }, unknown> & {}>;
    calcProductCostAvg(saleOrder: any): Promise<void>;
}
