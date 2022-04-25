import { Repository } from 'typeorm';
import { PurchaseOrder } from '../entities/purchase-order.entity';
import { PurchaseOrderDetail } from '../entities/purchase-order-detail.entity';
import { CreatePurchaseOrderItemDto, UpdatePurchaseOrderItemDto } from '../dtos/purchase-order-detail.dto';
export declare class PurchaseOrdersService {
    private purchaseOrderRepo;
    private purchaseOrderDetailRepo;
    constructor(purchaseOrderRepo: Repository<PurchaseOrder>, purchaseOrderDetailRepo: Repository<PurchaseOrderDetail>);
    findAll(): Promise<PurchaseOrder[]>;
    findOne(id: number): Promise<PurchaseOrder>;
    create(data: CreatePurchaseOrderItemDto[]): Promise<CreatePurchaseOrderItemDto[]>;
    update(id: number, changes: UpdatePurchaseOrderItemDto[]): Promise<PurchaseOrder>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
