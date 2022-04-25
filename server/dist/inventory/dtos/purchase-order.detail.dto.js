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
exports.UpdateProductDto = exports.CreateProductDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderId: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, unit_cost: { required: true, type: () => String }, productIds: { required: true, type: () => [Number] } };
    }
}
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "orderId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "quantity", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "unit_cost", void 0);
__decorate([
    class_validator_1.IsArray(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "productIds", void 0);
exports.CreateProductDto = CreateProductDto;
class UpdateProductDto extends swagger_1.PartialType(CreateProductDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=purchase-order.detail.dto.js.map