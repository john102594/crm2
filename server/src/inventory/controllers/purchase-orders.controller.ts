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

import { PurchaseOrdersService } from '../services/purchase-orders.service';
import { CreatePurchaseOrderDto } from '../dtos/purchase-order.dto';
import { Prisma } from '@prisma/client';
import { ok } from 'assert';

@ApiTags('purchaseorders')
@Controller('purchaseorders')
export class PurchaseOrdersController {
  constructor(private purchaseOrdersService: PurchaseOrdersService) {}

  @Get()
  @ApiOperation({ summary: 'List of purchaseorders' })
  getPurchaseOrders() {
    return this.purchaseOrdersService.findAll();
  }

  @Get(':purchaseorderId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('purchaseorderId', ParseIntPipe) purchaseorderId: number) {
    return this.purchaseOrdersService.findOne(purchaseorderId);
  }

  @Post()
  create(@Body() payload: CreatePurchaseOrderDto) {
    return this.purchaseOrdersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any[]) {
    return this.purchaseOrdersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.purchaseOrdersService.remove(+id);
  }
}
