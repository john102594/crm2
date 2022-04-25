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
const order_details_service_1 = require("./services/order-details.service");
const orders_service_1 = require("./services/orders.service");
const products_service_1 = require("./services/products.service");
const purchase_orders_service_1 = require("./services/purchase-orders.service");
const purchase_order_details_service_1 = require("./services/purchase-order-details.service");
const inventory_transactions_service_1 = require("./services/inventory-transactions.service");
const inventory_transactions_controller_1 = require("./controllers/inventory-transactions.controller");
const orders_controller_1 = require("./controllers/orders.controller");
const products_controller_1 = require("./controllers/products.controller");
const purchase_orders_controller_1 = require("./controllers/purchase-orders.controller");
const purchase_order_details_controller_1 = require("./controllers/purchase-order-details.controller");
const order_details_controller_1 = require("./controllers/order-details.controller");
const product_entity_1 = require("./entities/product.entity");
const inventory_transactions_entity_1 = require("./entities/inventory-transactions.entity");
const order_detail_entity_1 = require("./entities/order-detail.entity");
const order_entity_1 = require("./entities/order.entity");
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
                order_entity_1.Order,
                order_detail_entity_1.OrderDetail,
                purchase_order_entity_1.PurchaseOrder,
                purchase_order_detail_entity_1.PurchaseOrderDetail,
            ]),
        ],
        providers: [
            order_details_service_1.OrderDetailsService,
            orders_service_1.OrdersService,
            products_service_1.ProductsService,
            purchase_orders_service_1.PurchaseOrdersService,
            purchase_order_details_service_1.PurchaseOrderDetailsService,
            inventory_transactions_service_1.InventoryTransactionsService,
        ],
        controllers: [
            inventory_transactions_controller_1.InventoryTransactionsController,
            orders_controller_1.OrdersController,
            products_controller_1.ProductsController,
            purchase_orders_controller_1.PurchaseOrdersController,
            purchase_order_details_controller_1.PurchaseOrderDetailsController,
            order_details_controller_1.OrderDetailsController,
        ],
    })
], InventoryModule);
exports.InventoryModule = InventoryModule;
//# sourceMappingURL=inventory.module.js.map