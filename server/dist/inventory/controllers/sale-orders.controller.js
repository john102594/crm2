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
exports.SaleOrdersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sale_order_service_1 = require("../services/sale-order.service");
let SaleOrdersController = class SaleOrdersController {
    constructor(saleOrdersService) {
        this.saleOrdersService = saleOrdersService;
    }
    getOrders() {
        return this.saleOrdersService.findAll();
    }
    getOne(orderId) {
        return this.saleOrdersService.findOne(orderId);
    }
    create(payload) {
        return this.saleOrdersService.create(payload);
    }
    update(id, payload) {
        return this.saleOrdersService.update(+id, payload);
    }
    delete(id) {
        return this.saleOrdersService.remove(+id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'List of saleOrder' }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/sale-Order.entity").SaleOrder] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleOrdersController.prototype, "getOrders", null);
__decorate([
    common_1.Get(':saleOrderId'),
    common_1.HttpCode(common_1.HttpStatus.ACCEPTED),
    openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: require("../entities/sale-Order.entity").SaleOrder }),
    __param(0, common_1.Param('saleOrderId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SaleOrdersController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: [require("../dtos/sale-Order-detail.dto").CreateSaleOrderItemDto] }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], SaleOrdersController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/sale-Order.entity").SaleOrder }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], SaleOrdersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SaleOrdersController.prototype, "delete", null);
SaleOrdersController = __decorate([
    swagger_1.ApiTags('saleOrders'),
    common_1.Controller('saleOrders'),
    __metadata("design:paramtypes", [sale_order_service_1.SaleOrdersService])
], SaleOrdersController);
exports.SaleOrdersController = SaleOrdersController;
//# sourceMappingURL=sale-orders.controller.js.map