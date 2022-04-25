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
const common_2 = require("@nestjs/common");
const product_entity_1 = require("./../entities/product.entity");
const category_entity_1 = require("./../entities/category.entity");
const brand_entity_1 = require("./../entities/brand.entity");
let ProductsService = class ProductsService {
    constructor(productRepo, categoryRepo, brandRepo) {
        this.productRepo = productRepo;
        this.categoryRepo = categoryRepo;
        this.brandRepo = brandRepo;
    }
    async findAll(params) {
        if (params) {
            const { limit, offset } = params;
            return await this.productRepo.find({
                relations: ['brand'],
                take: limit,
                skip: offset,
            });
        }
        common_2.Logger.warn('info');
        return await this.productRepo.find({ relations: ['brand'] });
    }
    async findOne(id) {
        const product = await this.productRepo.findOne(id, {
            relations: ['brand', 'categories'],
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    async create(data) {
        const newProduct = this.productRepo.create(data);
        if (data.brandId) {
            const brand = await this.brandRepo.findOne(data.brandId);
            newProduct.brand = brand;
        }
        if (data.categoriesIds) {
            const categories = await this.categoryRepo.findByIds(data.categoriesIds);
            newProduct.categories = categories;
        }
        return await this.productRepo.save(newProduct);
    }
    async update(id, changes) {
        const product = await this.productRepo.findOne(id);
        if (changes.brandId) {
            const brand = await this.brandRepo.findOne(changes.brandId);
            product.brand = brand;
        }
        if (changes.categoriesIds) {
            const categories = await this.categoryRepo.findByIds(changes.categoriesIds);
            product.categories = categories;
        }
        this.productRepo.merge(product, changes);
        return await this.productRepo.save(product);
    }
    async removeCategoryByProduct(productId, categoryId) {
        const product = await this.productRepo.findOne(productId, {
            relations: ['categories'],
        });
        product.categories = product.categories.filter((category) => category.id !== categoryId);
        return this.productRepo.save(product);
    }
    async addCategoryToProduct(productId, categoryId) {
        const product = await this.productRepo.findOne(productId, {
            relations: ['categories'],
        });
        const category = await this.categoryRepo.findOne(categoryId);
        if (category) {
            product.categories.push(category);
        }
        return this.productRepo.save(product);
    }
    async remove(id) {
        return await this.productRepo.delete(id);
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.Product)),
    __param(1, typeorm_1.InjectRepository(category_entity_1.Category)),
    __param(2, typeorm_1.InjectRepository(brand_entity_1.Brand)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map