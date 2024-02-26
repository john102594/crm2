import { CreateSaleOrderItemDto } from './sale-order-detail.dto';
export declare class CreateSaleOrderDto {
    readonly total: number;
    readonly createdAt?: Date;
    readonly saleOrderDetails: CreateSaleOrderItemDto[];
}
