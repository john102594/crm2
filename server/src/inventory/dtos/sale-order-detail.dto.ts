import { IsNumber, IsPositive } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateSaleOrderItemDto {
  // @IsNumber()
  // @IsPositive()
  // @ApiProperty()
  readonly orderId: number;

  @IsNumber()
  @ApiProperty()
  readonly quantity: number;

  @IsNumber()
  @ApiProperty()
  readonly unit_price: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  readonly productId: number;
}

export class UpdateSaleOrderItemDto extends PartialType(
  CreateSaleOrderItemDto,
) {}
