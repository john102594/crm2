import {
  IsDateString,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreatePurchaseOrderItemDto } from './purchase-order-detail.dto';
import { Type } from 'class-transformer';

export class CreatePurchaseOrderDto {
  @IsNumber()
  @ApiProperty()
  readonly total: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  readonly createdAt?: Date;

  @ValidateNested()
  @Type(() => CreatePurchaseOrderItemDto)
  @ApiProperty()
  readonly purchaseOrderDetails: CreatePurchaseOrderItemDto[];
}

// export class UpdatePurchaseOrderItemDto extends PartialType(
//   CreatePurchaseOrderDto,
// ) {}
