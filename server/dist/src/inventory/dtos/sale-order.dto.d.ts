import { CreateSaleOrderItemDto } from './sale-order-detail.dto';
export declare class CreateSaleOrderDto {
    readonly total_cost: number;
    readonly saleOrderDetails: CreateSaleOrderItemDto[];
}
