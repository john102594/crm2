import {
  Controller,
  Get,
  // Query,
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

import { SaleOrdersService } from '../services/sale-order.service';
import {
  CreateSaleOrderItemDto,
  UpdateSaleOrderItemDto,
} from '../dtos/sale-order-detail.dto';
import { CreateSaleOrderDto } from '../dtos/sale-order.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('saleorders')
@Controller('saleorders')
export class SaleOrdersController {
  constructor(private saleOrdersService: SaleOrdersService) {}

  @Get()
  @ApiOperation({ summary: 'List of saleOrder' })
  getOrders() {
    return this.saleOrdersService.findAll();
  }

  @Get(':saleOrderId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('saleOrderId', ParseIntPipe) orderId: number) {
    return this.saleOrdersService.findOne(orderId);
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
      return this.saleOrdersService.createFromCsv(file);
    } catch (error) {
      return error;
    }
  }

  @Post()
  create(@Body() payload: CreateSaleOrderDto) {
    return this.saleOrdersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateSaleOrderItemDto[]) {
    return this.saleOrdersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.saleOrdersService.remove(+id);
  }
}
