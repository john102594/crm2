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
exports.OrdersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const orders_service_1 = require("../services/orders.service");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    getOrders() {
        return this.ordersService.findAll();
    }
    getOne(orderId) {
        return this.ordersService.findOne(orderId);
    }
    create(payload) {
        return this.ordersService.create(payload);
    }
    update(id, payload) {
        return this.ordersService.update(+id, payload);
    }
    delete(id) {
        return this.ordersService.remove(+id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'List of orders' }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/saleOrder.entity").Order] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrders", null);
__decorate([
    common_1.Get(':orderId'),
    common_1.HttpCode(common_1.HttpStatus.ACCEPTED),
    openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: require("../entities/saleOrder.entity").Order }),
    __param(0, common_1.Param('orderId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: [require("../dtos/order-detail.dto").CreateOrderItemDto] }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/saleOrder.entity").Order }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "delete", null);
OrdersController = __decorate([
    swagger_1.ApiTags('orders'),
    common_1.Controller('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map