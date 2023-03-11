"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sale_order_details_service_1 = require("./services/sale-order-details.service");
const sale_order_service_1 = require("./services/sale-order.service");
const products_service_1 = require("./services/products.service");
const purchase_orders_service_1 = require("./services/purchase-orders.service");
const purchase_order_details_service_1 = require("./services/purchase-order-details.service");
const inventory_transactions_service_1 = require("./services/inventory-transactions.service");
const inventory_transactions_controller_1 = require("./controllers/inventory-transactions.controller");
const sale_orders_controller_1 = require("./controllers/sale-orders.controller");
const products_controller_1 = require("./controllers/products.controller");
const purchase_orders_controller_1 = require("./controllers/purchase-orders.controller");
const purchase_order_details_controller_1 = require("./controllers/purchase-order-details.controller");
const sale_order_details_controller_1 = require("./controllers/sale-order-details.controller");
const product_entity_1 = require("./entities/product.entity");
const inventory_transactions_entity_1 = require("./entities/inventory-transactions.entity");
const sale_order_detail_entity_1 = require("./entities/sale-order-detail.entity");
const sale_order_entity_1 = require("./entities/sale-order.entity");
const purchase_order_detail_entity_1 = require("./entities/purchase-order-detail.entity");
const purchase_order_entity_1 = require("./entities/purchase-order.entity");
let InventoryModule = class InventoryModule {
};
InventoryModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                product_entity_1.Product,
                inventory_transactions_entity_1.InventoryTransaction,
                sale_order_entity_1.SaleOrder,
                sale_order_detail_entity_1.SaleOrderDetail,
                purchase_order_entity_1.PurchaseOrder,
                purchase_order_detail_entity_1.PurchaseOrderDetail,
            ]),
        ],
        providers: [
            sale_order_details_service_1.SaleOrderDetailsService,
            sale_order_service_1.SaleOrdersService,
            products_service_1.ProductsService,
            purchase_orders_service_1.PurchaseOrdersService,
            purchase_order_details_service_1.PurchaseOrderDetailsService,
            inventory_transactions_service_1.InventoryTransactionsService,
        ],
        controllers: [
            inventory_transactions_controller_1.InventoryTransactionsController,
            sale_orders_controller_1.SaleOrdersController,
            products_controller_1.ProductsController,
            purchase_orders_controller_1.PurchaseOrdersController,
            purchase_order_details_controller_1.PurchaseOrderDetailsController,
            sale_order_details_controller_1.SaleOrderDetailsController,
        ],
    })
], InventoryModule);
exports.InventoryModule = InventoryModule;
//# sourceMappingURL=inventory.module.js.map