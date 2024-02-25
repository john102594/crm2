import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilesModule } from 'src/files/files.module';

import { SaleOrderDetailsService } from './services/sale-order-details.service';
import { SaleOrdersService } from './services/sale-order.service';
import { ProductsService } from './services/products.service';
import { PurchaseOrdersService } from './services/purchase-orders.service';
import { PurchaseOrderDetailsService } from './services/purchase-order-details.service';
import { InventoryTransactionsService } from './services/inventory-transactions.service';
import { UbicationService } from './services/ubication.service';

import { InventoryTransactionsController } from './controllers/inventory-transactions.controller';
import { SaleOrdersController } from './controllers/sale-orders.controller';
import { ProductsController } from './controllers/products.controller';
import { PurchaseOrdersController } from './controllers/purchase-orders.controller';
import { PurchaseOrderDetailsController } from './controllers/purchase-order-details.controller';
import { SaleOrderDetailsController } from './controllers/sale-order-details.controller';
import { UbicationController } from './controllers/ubication.controller';

@Module({
  imports: [PrismaModule, FilesModule],
  providers: [
    // SaleOrderDetailsService,
    SaleOrdersService,
    ProductsService,
    PurchaseOrdersService,
    UbicationService,
    // PurchaseOrderDetailsService,
    // InventoryTransactionsService,
  ],
  controllers: [
    // InventoryTransactionsController,
    SaleOrdersController,
    ProductsController,
    PurchaseOrdersController,
    UbicationController,
    // PurchaseOrderDetailsController,
    // SaleOrderDetailsController,
  ],
})
export class InventoryModule {}
