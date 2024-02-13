import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateInventoryTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly productId: number;

  @IsNumber()
  @ApiProperty()
  readonly quantity: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly unitPrice: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly balance: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly unitCostAvg: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly transactionTypeId: number;

  // @IsNumber()
  // @ApiProperty()
  // readonly balance: number;

  // @IsNumber()
  // @ApiProperty()
  // readonly unit_cost_avg: number;
}

export class UpdateInventoryTransactionDto extends PartialType(
  CreateInventoryTransactionDto,
) {}
