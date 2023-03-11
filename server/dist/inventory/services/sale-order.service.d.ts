import { Repository } from 'typeorm';
import { SaleOrder } from '../entities/sale-order.entity';
import { SaleOrderDetail } from '../entities/sale-order-detail.entity';
import { CreateSaleOrderItemDto, UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
export declare class SaleOrdersService {
    private orderRepo;
    private orderDetailRepo;
    constructor(orderRepo: Repository<SaleOrder>, orderDetailRepo: Repository<SaleOrderDetail>);
    findAll(): Promise<SaleOrder[]>;
    findOne(id: number): Promise<SaleOrder>;
    create(data: CreateSaleOrderItemDto[]): Promise<CreateSaleOrderItemDto[]>;
    update(id: number, changes: UpdateSaleOrderItemDto[]): Promise<SaleOrder>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
