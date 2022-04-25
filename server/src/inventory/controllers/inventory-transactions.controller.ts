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

import { InventoryTransactionsService } from '../services/inventory-transactions.service';
import {
  CreateInventoryTransactionDto,
  UpdateInventoryTransactionDto,
} from '../dtos/inventory-transaction.dto';

@ApiTags('inventory-transactions')
@Controller('inventory-transactions')
export class InventoryTransactionsController {
  constructor(
    private inventoryTransactionsServices: InventoryTransactionsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List of orders' })
  getOrders() {
    return this.inventoryTransactionsServices.findAll();
  }

  @Get(':orderId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.inventoryTransactionsServices.findOne(orderId);
  }

  @Post()
  create(@Body() payload: CreateInventoryTransactionDto) {
    return this.inventoryTransactionsServices.create(payload);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() payload: UpdateInventoryTransactionDto,
  ) {
    return this.inventoryTransactionsServices.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.inventoryTransactionsServices.remove(+id);
  }
}
