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

import { SaleOrderDetailsService } from '../services/sale-order-details.service';
import {
  CreateSaleOrderItemDto,
  UpdateSaleOrderItemDto,
} from '../dtos/sale-order-detail.dto';

@ApiTags('saleOrderDetails')
@Controller('saleOrderDetails')
export class SaleOrderDetailsController {
  constructor(private saleOderdetailsService: SaleOrderDetailsService) {}

  @Get()
  @ApiOperation({ summary: 'List of saleOrderDetails' })
  getOrderDetails() {
    return this.saleOderdetailsService.findAll();
  }

  @Get(':saleOrderId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('saleOrderId', ParseIntPipe) saleOrderId: number) {
    return this.saleOderdetailsService.findOne(saleOrderId);
  }

  @Post()
  create(@Body() payload: CreateSaleOrderItemDto[]) {
    return this.saleOderdetailsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateSaleOrderItemDto[]) {
    return this.saleOderdetailsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.saleOderdetailsService.remove(+id);
  }
}
