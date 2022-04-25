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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async findAll(params) {
        if (params.limit) {
            const { limit, offset } = params;
            return await this.productRepo.find({
                relations: ['inventoryTransaction'],
                take: limit,
                skip: offset,
            });
        }
        return await this.productRepo.find();
    }
    async findOne(id) {
        const product = await this.productRepo.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    async findSku(productSku) {
        const product = await this.productRepo.findOne({ sku: productSku });
        if (!product) {
            throw new common_1.NotFoundException(`Product SKU #${productSku} is already created`);
        }
        return product;
    }
    async create(data) {
        const product = await this.productRepo.findOne({ sku: data.sku });
        if (product) {
            throw new common_1.BadRequestException(`Product SKU #${data.sku} is already created`);
        }
        const newProduct = this.productRepo.create(data);
        return await this.productRepo.save(newProduct);
    }
    async bulkCreate(data) {
        const skus = data.map((element) => element.sku);
        const products = await this.productRepo.find({
            where: { sku: typeorm_2.In(skus) },
        });
        const skusCreated = products.map((element) => element.sku);
        if (skusCreated[0]) {
            throw new common_1.BadRequestException(`Product SKUS ${skusCreated} is already created`);
        }
        const newProducts = this.productRepo.create(data);
        return await this.productRepo.save(newProducts);
    }
    async update(id, changes) {
        const product = await this.productRepo.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        this.productRepo.merge(product, changes);
        return await this.productRepo.save(product);
    }
    async remove(id) {
        return await this.productRepo.delete(id);
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map