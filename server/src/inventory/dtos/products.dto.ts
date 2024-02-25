import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  IsNumber,
  IsArray,
} from 'class-validator';
import { PartialType, ApiProperty, PickType } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsOptional()
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

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  ubicationId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FindSkuProductDto extends PickType(CreateProductDto, ['sku']) {}

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
