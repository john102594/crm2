import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateSaleOrderItemDto {
  // @IsNumber()
  // @IsPositive()}
  // @ApiProperty()
  // readonly orderId: number;

  @IsNumber()
  @ApiProperty()
  readonly quantity: number;

  @IsNumber()
  @ApiProperty()
  readonly unit_price: number;

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

export class UpdateSaleOrderItemDto extends PartialType(
  CreateSaleOrderItemDto,
) {}
