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
exports.SaleOrderDetailsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sale_order_details_service_1 = require("../services/sale-order-details.service");
let SaleOrderDetailsController = exports.SaleOrderDetailsController = class SaleOrderDetailsController {
    constructor(saleOderdetailsService) {
        this.saleOderdetailsService = saleOderdetailsService;
    }
    getOrderDetails() {
        return this.saleOderdetailsService.findAll();
    }
    getOne(saleOrderId) {
        return this.saleOderdetailsService.findOne(saleOrderId);
    }
    create(payload) {
        return this.saleOderdetailsService.create(payload);
    }
    update(id, payload) {
        return this.saleOderdetailsService.update(+id, payload);
    }
    delete(id) {
        return this.saleOderdetailsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List of saleOrderDetails' }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleOrderDetailsController.prototype, "getOrderDetails", null);
__decorate([
    (0, common_1.Get)(':saleOrderId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: Object }),
    __param(0, (0, common_1.Param)('saleOrderId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SaleOrderDetailsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], SaleOrderDetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], SaleOrderDetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SaleOrderDetailsController.prototype, "delete", null);
exports.SaleOrderDetailsController = SaleOrderDetailsController = __decorate([
    (0, swagger_1.ApiTags)('saleOrderDetails'),
    (0, common_1.Controller)('saleOrderDetails'),
    __metadata("design:paramtypes", [sale_order_details_service_1.SaleOrderDetailsService])
], SaleOrderDetailsController);
//# sourceMappingURL=sale-order-details.controller.js.map