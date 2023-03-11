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
exports.UpdateInventoryTransactionDto = exports.CreateInventoryTransactionDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateInventoryTransactionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { productId: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, unit_price: { required: true, type: () => Number }, unit_cost: { required: true, type: () => Number }, purchaseOrderId: { required: true, type: () => Number }, saleOrderId: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInventoryTransactionDto.prototype, "productId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInventoryTransactionDto.prototype, "quantity", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInventoryTransactionDto.prototype, "unit_price", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInventoryTransactionDto.prototype, "unit_cost", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInventoryTransactionDto.prototype, "purchaseOrderId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInventoryTransactionDto.prototype, "saleOrderId", void 0);
exports.CreateInventoryTransactionDto = CreateInventoryTransactionDto;
class UpdateInventoryTransactionDto extends swagger_1.PartialType(CreateInventoryTransactionDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateInventoryTransactionDto = UpdateInventoryTransactionDto;
//# sourceMappingURL=inventory-transaction.dto.js.map