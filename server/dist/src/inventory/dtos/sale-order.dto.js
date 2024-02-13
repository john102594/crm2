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
exports.CreateSaleOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const sale_order_detail_dto_1 = require("./sale-order-detail.dto");
const class_transformer_1 = require("class-transformer");
class CreateSaleOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { total_cost: { required: true, type: () => Number }, saleOrderDetails: { required: true, type: () => [require("./sale-order-detail.dto").CreateSaleOrderItemDto] } };
    }
}
exports.CreateSaleOrderDto = CreateSaleOrderDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateSaleOrderDto.prototype, "total_cost", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => sale_order_detail_dto_1.CreateSaleOrderItemDto),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateSaleOrderDto.prototype, "saleOrderDetails", void 0);
//# sourceMappingURL=sale-order.dto.js.map