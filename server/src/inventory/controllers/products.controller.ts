import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import {
  CreateProductDto,
  UpdateProductDto,
  FindSkuProductDto,
} from '../dtos/products.dto';
import { ProductsService } from '../services/products.service';
import { Prisma } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getProducts(@Body() params: Prisma.ProductFindManyArgs) {
    return this.productsService.find(params);
  }

  @Get('/sku/:sku')
  getOneSku(@Param('sku') sku: string) {
    return this.productsService.findOneSku(sku);
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Post('/createfromcsv')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
      }),
    }),
  )
  fromCsvCreate(@UploadedFile() file) {
    try {
      return this.productsService.createFromCsv(file);
    } catch (error) {
      return error;
    }
  }

  @Post('/bulk')
  bulkCreate(@Body() payload: CreateProductDto[]) {
    return this.productsService.createMany(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(id);
  }
}
