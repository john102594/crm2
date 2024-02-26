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

import { PurchaseOrdersService } from '../services/purchase-orders.service';
import { CreatePurchaseOrderDto } from '../dtos/purchase-order.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('purchaseorders')
@Controller('purchaseorders')
export class PurchaseOrdersController {
  constructor(private purchaseOrdersService: PurchaseOrdersService) {}

  @Get()
  @ApiOperation({ summary: 'List of purchaseorders' })
  getPurchaseOrders() {
    return this.purchaseOrdersService.findAll();
  }

  @Get('/getmonthresume')
  @ApiOperation({ summary: 'Resumen' })
  getMonthOrdersResume() {
    return this.purchaseOrdersService.getResumeMonth();
  }

  @Get('/getdayresume')
  @ApiOperation({ summary: 'Resumen' })
  getDayOrdersResume() {
    return this.purchaseOrdersService.getResumeDay();
  }

  @Get('/getyearresume')
  @ApiOperation({ summary: 'Resumen' })
  getYearOrdersResume() {
    return this.purchaseOrdersService.getResumeYear();
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
      return this.purchaseOrdersService.createFromCsv(file);
    } catch (error) {
      return error;
    }
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
