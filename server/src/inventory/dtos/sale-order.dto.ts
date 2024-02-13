import { IsNumber, ValidateNested } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateSaleOrderItemDto } from './sale-order-detail.dto';
import { Type } from 'class-transformer';

export class CreateSaleOrderDto {
  @IsNumber()
  @ApiProperty()
  readonly total_cost: number;

  @ValidateNested()
  @Type(() => CreateSaleOrderItemDto)
  @ApiProperty()
  readonly saleOrderDetails: CreateSaleOrderItemDto[];
}

// export class UpdatePurchaseOrderItemDto extends PartialType(
//   CreatePurchaseOrderDto,
// ) {}
