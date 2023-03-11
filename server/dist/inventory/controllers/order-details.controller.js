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
exports.OrderDetailsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_details_service_1 = require("../services/order-details.service");
let OrderDetailsController = class OrderDetailsController {
    constructor(orderdetailsService) {
        this.orderdetailsService = orderdetailsService;
    }
    getOrderDetails() {
        return this.orderdetailsService.findAll();
    }
    getOne(orderId) {
        return this.orderdetailsService.findOne(orderId);
    }
    create(payload) {
        return this.orderdetailsService.create(payload);
    }
    update(id, payload) {
        return this.orderdetailsService.update(+id, payload);
    }
    delete(id) {
        return this.orderdetailsService.remove(+id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'List of orderdetails' }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "getOrderDetails", null);
__decorate([
    common_1.Get(':orderId'),
    common_1.HttpCode(common_1.HttpStatus.ACCEPTED),
    openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: Object }),
    __param(0, common_1.Param('orderId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/saleOrder.entity").Order }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "delete", null);
OrderDetailsController = __decorate([
    swagger_1.ApiTags('orderDetails'),
    common_1.Controller('orderdetails'),
    __metadata("design:paramtypes", [order_details_service_1.OrderDetailsService])
], OrderDetailsController);
exports.OrderDetailsController = OrderDetailsController;
//# sourceMappingURL=order-details.controller.js.map