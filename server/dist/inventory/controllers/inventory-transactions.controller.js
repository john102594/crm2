"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryTransactionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const inventory_transactions_service_1 = require("../services/inventory-transactions.service");
const inventory_transaction_dto_1 = require("../dtos/inventory-transaction.dto");
let InventoryTransactionsController = class InventoryTransactionsController {
    constructor(inventoryTransactionsServices) {
        this.inventoryTransactionsServices = inventoryTransactionsServices;
    }
    getOrders() {
        return this.inventoryTransactionsServices.findAll();
    }
    getOne(orderId) {
        return this.inventoryTransactionsServices.findOne(orderId);
    }
    create(payload) {
        return this.inventoryTransactionsServices.create(payload);
    }
    update(id, payload) {
        return this.inventoryTransactionsServices.update(+id, payload);
    }
    delete(id) {
        return this.inventoryTransactionsServices.remove(+id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'List of orders' }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/inventory-transactions.entity").InventoryTransaction] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "getOrders", null);
__decorate([
    common_1.Get(':orderId'),
    common_1.HttpCode(common_1.HttpStatus.ACCEPTED),
    openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: require("../entities/inventory-transactions.entity").InventoryTransaction }),
    __param(0, common_1.Param('orderId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/inventory-transactions.entity").InventoryTransaction }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_transaction_dto_1.CreateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/inventory-transactions.entity").InventoryTransaction }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, inventory_transaction_dto_1.UpdateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "delete", null);
InventoryTransactionsController = __decorate([
    swagger_1.ApiTags('inventory-transactions'),
    common_1.Controller('inventory-transactions'),
    __metadata("design:paramtypes", [inventory_transactions_service_1.InventoryTransactionsService])
], InventoryTransactionsController);
exports.InventoryTransactionsController = InventoryTransactionsController;
//# sourceMappingURL=inventory-transactions.controller.js.map