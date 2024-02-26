import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseOrderItemDto {
  // @IsNumber()
  // @IsPositive()
  // @ApiProperty()
  // readonly orderId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly quantity: number;

  @IsNumber()
  @ApiProperty()
  readonly unit_cost: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  readonly productId?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly sku?: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  readonly createdAt?: Date;
}

export class UpdatePurchaseOrderItemDto extends PartialType(
  CreatePurchaseOrderItemDto,
) {}
