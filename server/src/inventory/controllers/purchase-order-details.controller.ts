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

import { PurchaseOrderDetailsService } from '../services/purchase-order-details.service';
import {
  CreatePurchaseOrderItemDto,
  UpdatePurchaseOrderItemDto,
} from '../dtos/purchase-order-detail.dto';

@ApiTags('purchaseorderDetails')
@Controller('purchaseorderdetails')
export class PurchaseOrderDetailsController {
  constructor(
    private purchaseOrderdetailsService: PurchaseOrderDetailsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List of purchaseorderdetails' })
  getPurchaseOrderDetails() {
    return this.purchaseOrderdetailsService.findAll();
  }

  @Get(':purchaseorderId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('purchaseorderId', ParseIntPipe) purchaseorderId: number) {
    return this.purchaseOrderdetailsService.findOne(purchaseorderId);
  }

  @Post()
  create(@Body() payload: CreatePurchaseOrderItemDto[]) {
    return this.purchaseOrderdetailsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() payload: UpdatePurchaseOrderItemDto[],
  ) {
    return this.purchaseOrderdetailsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.purchaseOrderdetailsService.remove(+id);
  }
}
