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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const upload_files_service_1 = require("../../files/upload-files.service");
const parse_files_service_1 = require("../../files/parse-files.service");
let ProductsService = exports.ProductsService = class ProductsService {
    constructor(prisma, uploadFilesService, parseFilesService) {
        this.prisma = prisma;
        this.uploadFilesService = uploadFilesService;
        this.parseFilesService = parseFilesService;
    }
    async find(params) {
        return await this.prisma.product.findMany({
            skip: params.skip,
            take: params.take,
            where: params.where,
        });
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: { id: +id },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    async findOneSku(sku) {
        try {
            const product = await this.prisma.product.findUnique({
                where: { sku: sku },
            });
            return product;
        }
        catch (error) {
            return error;
        }
    }
    async createMany(data) {
        const products = await Promise.all(data.map(async (product) => {
            const findProduct = await this.prisma.product.findUnique({
                where: { sku: product.sku },
            });
            if (findProduct !== null) {
                return { state: 'Sku eas exist in database', product: product };
            }
            const newProduct = await this.prisma.product.create({
                data: product,
            });
            return { state: 'Created Ok', product: newProduct };
        }));
        return products;
    }
    async createFromCsv(file) {
        try {
            const csvData = await this.uploadFilesService.uploadCsv(file, true);
            const csvParse = (await this.parseFilesService.parseCsv(csvData));
            const data = csvParse.map(({ sku, quantity, unitcostavg, saleprice }) => ({
                sku,
                quantity: quantity | 0,
                unitCostAvg: unitcostavg | 0,
                salePrice: saleprice | 0,
            }));
            return await this.prisma.product.createMany({ data });
        }
        catch (error) {
            return error;
        }
    }
    async create(data) {
        const product = await this.prisma.product.create({
            data,
        });
        return product;
    }
    async update(id, changes) {
        const product = await this.prisma.product.update({
            where: { id: +id },
            data: changes,
        });
        return product;
    }
    async remove(id) {
        const product = await this.prisma.product.delete({
            where: { id: +id },
        });
        return product;
    }
};
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        upload_files_service_1.UploadFilesService,
        parse_files_service_1.ParseFilesService])
], ProductsService);
//# sourceMappingURL=products.service.js.map