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
exports.ProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const parse_int_pipe_1 = require("../../common/parse-int.pipe");
const products_dtos_1 = require("../dtos/products.dtos");
const products_service_1 = require("./../services/products.service");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    getProducts(params) {
        return this.productsService.findAll(params);
    }
    getOne(productId) {
        return this.productsService.findOne(productId);
    }
    create(payload) {
        return this.productsService.create(payload);
    }
    update(id, payload) {
        return this.productsService.update(+id, payload);
    }
    addCategoryToProduct(id, categoryId) {
        return this.productsService.addCategoryToProduct(id, categoryId);
    }
    delete(id) {
        return this.productsService.remove(+id);
    }
    deleteCategory(id, categoryId) {
        return this.productsService.removeCategoryByProduct(id, categoryId);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'List of products' }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/product.entity").Product] }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [products_dtos_1.FilterProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts", null);
__decorate([
    common_1.Get(':productId'),
    common_1.HttpCode(common_1.HttpStatus.ACCEPTED),
    openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: require("../entities/product.entity").Product }),
    __param(0, common_1.Param('productId', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/product.entity").Product }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [products_dtos_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/product.entity").Product }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, products_dtos_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    common_1.Put(':id/category/:categoryId'),
    openapi.ApiResponse({ status: 200, type: require("../entities/product.entity").Product }),
    __param(0, common_1.Param('id', parse_int_pipe_1.ParseIntPipe)),
    __param(1, common_1.Param('categoryId', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "addCategoryToProduct", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "delete", null);
__decorate([
    common_1.Delete(':id/category/:categoryId'),
    openapi.ApiResponse({ status: 200, type: require("../entities/product.entity").Product }),
    __param(0, common_1.Param('id', parse_int_pipe_1.ParseIntPipe)),
    __param(1, common_1.Param('categoryId', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "deleteCategory", null);
ProductsController = __decorate([
    swagger_1.ApiTags('products'),
    common_1.Controller('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map