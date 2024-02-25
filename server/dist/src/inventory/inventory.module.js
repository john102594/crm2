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
const prisma_module_1 = require("../prisma/prisma.module");
const files_module_1 = require("../files/files.module");
const sale_order_service_1 = require("./services/sale-order.service");
const products_service_1 = require("./services/products.service");
const purchase_orders_service_1 = require("./services/purchase-orders.service");
const ubication_service_1 = require("./services/ubication.service");
const sale_orders_controller_1 = require("./controllers/sale-orders.controller");
const products_controller_1 = require("./controllers/products.controller");
const purchase_orders_controller_1 = require("./controllers/purchase-orders.controller");
const ubication_controller_1 = require("./controllers/ubication.controller");
let InventoryModule = exports.InventoryModule = class InventoryModule {
};
exports.InventoryModule = InventoryModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, files_module_1.FilesModule],
        providers: [
            sale_order_service_1.SaleOrdersService,
            products_service_1.ProductsService,
            purchase_orders_service_1.PurchaseOrdersService,
            ubication_service_1.UbicationService,
        ],
        controllers: [
            sale_orders_controller_1.SaleOrdersController,
            products_controller_1.ProductsController,
            purchase_orders_controller_1.PurchaseOrdersController,
            ubication_controller_1.UbicationController,
        ],
    })
], InventoryModule);
//# sourceMappingURL=inventory.module.js.map