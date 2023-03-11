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
exports.UpdateOrderItemDto = exports.CreateOrderItemDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateOrderItemDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderId: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, unit_price: { required: true, type: () => Number }, productId: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "quantity", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "unit_price", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "productId", void 0);
exports.CreateOrderItemDto = CreateOrderItemDto;
class UpdateOrderItemDto extends swagger_1.PartialType(CreateOrderItemDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateOrderItemDto = UpdateOrderItemDto;
//# sourceMappingURL=order-detail.dto.js.map