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
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { SaleOrdersService } from '../services/sale-order.service';
import {
  CreateSaleOrderItemDto,
  UpdateSaleOrderItemDto,
} from '../dtos/sale-order-detail.dto';

@ApiTags('saleOrders')
@Controller('saleOrders')
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

  @Post()
  create(@Body() payload: CreateSaleOrderItemDto[]) {
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
