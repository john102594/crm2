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
exports.FilterProductDto = exports.UpdateProductDto = exports.CreateProductDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, sku: { required: true, type: () => String }, image: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ description: `product's name` }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "sku", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "image", void 0);
exports.CreateProductDto = CreateProductDto;
class UpdateProductDto extends swagger_1.PartialType(CreateProductDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateProductDto = UpdateProductDto;
class FilterProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Number }, offset: { required: true, type: () => Number, minimum: 0 } };
    }
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsPositive(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], FilterProductDto.prototype, "limit", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Min(0),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], FilterProductDto.prototype, "offset", void 0);
exports.FilterProductDto = FilterProductDto;
//# sourceMappingURL=products.dto.js.map