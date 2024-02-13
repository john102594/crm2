import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  IsNumber,
  IsArray,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `product's name` })
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly sku: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly image?: string;

  @IsNumber()
  @ApiProperty()
  unitCostAvg: number;

  @IsNumber()
  @ApiProperty()
  salePrice: number;

  @IsNumber()
  @ApiProperty()
  quantity: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class CreatedManyProduct {
  state: string;
  product: Partial<CreateProductDto>;
}

export class FilterProductDto {
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  take?: number;

  @IsOptional()
  @Min(0)
  @ApiProperty()
  skip?: number;

  @IsOptional()
  @ApiProperty()
  where?: CreateProductDto;
}
