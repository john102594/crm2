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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePurchaseOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const purchase_order_detail_dto_1 = require("./purchase-order-detail.dto");
const class_transformer_1 = require("class-transformer");
class CreatePurchaseOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { total_cost: { required: true, type: () => Number }, purchaseOrderDetails: { required: true, type: () => [require("./purchase-order-detail.dto").CreatePurchaseOrderItemDto] } };
    }
}
exports.CreatePurchaseOrderDto = CreatePurchaseOrderDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePurchaseOrderDto.prototype, "total_cost", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => purchase_order_detail_dto_1.CreatePurchaseOrderItemDto),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreatePurchaseOrderDto.prototype, "purchaseOrderDetails", void 0);
//# sourceMappingURL=purchase-order.dto.js.map