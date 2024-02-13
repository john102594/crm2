import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreatePurchaseOrderItemDto } from './purchase-order-detail.dto';
import { Type } from 'class-transformer';

export class CreatePurchaseOrderDto {
  @IsNumber()
  @ApiProperty()
  readonly total_cost: number;

  @ValidateNested()
  @Type(() => CreatePurchaseOrderItemDto)
  @ApiProperty()
  readonly purchaseOrderDetails: CreatePurchaseOrderItemDto[];
}

// export class UpdatePurchaseOrderItemDto extends PartialType(
//   CreatePurchaseOrderDto,
// ) {}
