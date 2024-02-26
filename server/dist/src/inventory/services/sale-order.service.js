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
exports.SaleOrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const upload_files_service_1 = require("../../files/upload-files.service");
const parse_files_service_1 = require("../../files/parse-files.service");
const querys_1 = require("../../sql/querys");
let SaleOrdersService = exports.SaleOrdersService = class SaleOrdersService {
    constructor(prisma, uploadFilesService, parseFilesService) {
        this.prisma = prisma;
        this.uploadFilesService = uploadFilesService;
        this.parseFilesService = parseFilesService;
    }
    async findAll() {
        return await this.prisma.saleOrder.findMany({
            include: { saleOrderDetails: true },
        });
    }
    async getResumeMonth() {
        const query = querys_1.querys.getResumeMonthSaleDetails;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async getResumeDay() {
        const query = querys_1.querys.getResumeDaySaleDetails;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async getResumeYear() {
        const query = querys_1.querys.getResumeYearSaleDetails;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        const order = await this.prisma.saleOrder.findUnique({
            where: { id },
            include: { saleOrderDetails: true },
        });
        return order;
    }
    async createFromCsv(file) {
        try {
            const csvData = await this.uploadFilesService.uploadCsv(file, true);
            const csvParse = (await this.parseFilesService.parseCsv(csvData));
            let data = [];
            for (let i = 0; i < csvParse.length; i++) {
                const element = csvParse[i];
                let dateString = element.createdat;
                const time = await new Date(dateString.replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, '$2/$1/$3'));
                const order = {
                    total: element.total,
                    createdAt: time,
                    saleOrderDetails: [
                        {
                            productId: element.productid,
                            unit_price: element.unitprice,
                            quantity: element.quantity,
                            sku: element.sku,
                            createdAt: time,
                        },
                    ],
                };
                data.push(await this.create(order));
            }
            const registernum = data.length;
            data = null;
            return registernum;
        }
        catch (error) {
            return error;
        }
    }
    async create(payload) {
        let saleOrderDetails = payload.saleOrderDetails.slice();
        try {
            return await this.prisma.$transaction(async (tx) => {
                let InventaryTransaction = [];
                for (let i = 0; i < saleOrderDetails.length; i++) {
                    const element = payload.saleOrderDetails[i];
                    const result = (await tx.product.findFirst({
                        select: {
                            quantity: true,
                            unitCostAvg: true,
                            id: true,
                        },
                        where: { OR: [{ id: element.productId }, { sku: element.sku }] },
                    })) || {
                        id: null,
                        quantity: 0,
                        unitCostAvg: 0,
                    };
                    saleOrderDetails[i] = {
                        productId: result.id,
                        quantity: element.quantity,
                        unit_price: element.unit_price,
                        createdAt: element.createdAt,
                    };
                    const newsaldo = Number(result.quantity) - element.quantity;
                    InventaryTransaction.push({
                        productId: result.id,
                        transactionTypeId: 2,
                        quantity: -element.quantity,
                        unitPrice: element.unit_price,
                        balance: newsaldo,
                        unitCostAvg: result.unitCostAvg,
                    });
                    console.log(InventaryTransaction);
                    await tx.product.update({
                        data: {
                            quantity: newsaldo,
                            unitCostAvg: result.unitCostAvg,
                        },
                        where: {
                            id: result.id,
                        },
                    });
                }
                const response = await tx.saleOrder.create({
                    data: {
                        total: payload.total,
                        createdAt: payload.createdAt,
                        saleOrderDetails: {
                            create: saleOrderDetails,
                        },
                    },
                    include: {
                        saleOrderDetails: true,
                    },
                });
                await tx.inventoryTransaction.createMany({
                    data: InventaryTransaction,
                });
                return response;
            });
        }
        catch (error) {
            return error;
        }
    }
    async update(id, changes) {
    }
    async remove(id) {
        return await this.prisma.saleOrder.delete({ where: { id } });
    }
};
exports.SaleOrdersService = SaleOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        upload_files_service_1.UploadFilesService,
        parse_files_service_1.ParseFilesService])
], SaleOrdersService);
//# sourceMappingURL=sale-order.service.js.map