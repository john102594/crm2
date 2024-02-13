import { SaleOrderDetailsService } from '../services/sale-order-details.service';
import { CreateSaleOrderItemDto, UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
export declare class SaleOrderDetailsController {
    private saleOderdetailsService;
    constructor(saleOderdetailsService: SaleOrderDetailsService);
    getOrderDetails(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_price: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        saleOrderId: number;
    }, unknown> & {})[]>;
    getOne(saleOrderId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_price: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        saleOrderId: number;
    }, unknown> & {}>;
    create(payload: CreateSaleOrderItemDto[]): Promise<void>;
    update(id: number, payload: UpdateSaleOrderItemDto[]): Promise<void>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_price: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        saleOrderId: number;
    }, unknown> & {}>;
}
