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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const brand_entity_1 = require("./../entities/brand.entity");
let BrandsService = class BrandsService {
    constructor(brandRepo) {
        this.brandRepo = brandRepo;
    }
    async findAll() {
        return await this.brandRepo.find();
    }
    async findOne(id) {
        const brand = await this.brandRepo.findOne(id, {
            relations: ['products'],
        });
        if (!brand) {
            throw new common_1.NotFoundException(`Brand #${id} not found`);
        }
        return brand;
    }
    async create(data) {
        const newBrand = this.brandRepo.create(data);
        return await this.brandRepo.save(newBrand);
    }
    async update(id, changes) {
        const brand = await this.brandRepo.findOne(id);
        this.brandRepo.merge(brand, changes);
        return await this.brandRepo.save(brand);
    }
    async remove(id) {
        return await this.brandRepo.delete(id);
    }
};
BrandsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(brand_entity_1.Brand)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map