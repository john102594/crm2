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
exports.PurchaseOrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const upload_files_service_1 = require("../../files/upload-files.service");
const parse_files_service_1 = require("../../files/parse-files.service");
const querys_1 = require("../../sql/querys");
let PurchaseOrdersService = exports.PurchaseOrdersService = class PurchaseOrdersService {
    constructor(prisma, uploadFilesService, parseFilesService) {
        this.prisma = prisma;
        this.uploadFilesService = uploadFilesService;
        this.parseFilesService = parseFilesService;
    }
    async findAll() {
        return await this.prisma.purchaseOrder.findMany({
            include: {
                purchaseOrderDetails: true,
            },
        });
    }
    async getResumeMonth() {
        const query = querys_1.querys.getResumeMonthPurchaseDetails;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async getResumeDay() {
        const query = querys_1.querys.getResumeDayPurchaseDetails;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async getResumeYear() {
        const query = querys_1.querys.getResumeYearPurchaseDetails;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        const order = await this.prisma.purchaseOrder.findUnique({
            where: { id },
            include: { purchaseOrderDetails: true },
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
                    purchaseOrderDetails: [
                        {
                            productId: element.productid,
                            unit_cost: element.unitcost,
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
        let purchaseOrderDetails = payload.purchaseOrderDetails.slice();
        try {
            return await this.prisma.$transaction(async (tx) => {
                let InventaryTransaction = [];
                for (let i = 0; i < purchaseOrderDetails.length; i++) {
                    const element = payload.purchaseOrderDetails[i];
                    const result = (await tx.product.findFirst({
                        select: {
                            quantity: true,
                            unitCostAvg: true,
                            id: true,
                        },
                        where: { OR: [{ id: element.productId }, { sku: element.sku }] },
                    })) || {
                        quantity: 0,
                        unitCostAvg: 0,
                        id: null,
                    };
                    const totalsaldo = Number(result.unitCostAvg) * Number(result.quantity);
                    const newsaldo = Number(result.quantity) + element.quantity;
                    const newcosto_prom = (totalsaldo + element.quantity * element.unit_cost) / newsaldo;
                    purchaseOrderDetails[i] = {
                        productId: result.id,
                        quantity: element.quantity,
                        unit_cost: element.unit_cost,
                        createdAt: element.createdAt,
                    };
                    InventaryTransaction.push({
                        productId: result.id,
                        transactionTypeId: 1,
                        quantity: element.quantity,
                        unitPrice: element.unit_cost,
                        balance: newsaldo,
                        unitCostAvg: newcosto_prom,
                    });
                    await tx.product.update({
                        data: {
                            quantity: newsaldo,
                            unitCostAvg: newcosto_prom,
                        },
                        where: {
                            id: result.id,
                        },
                    });
                }
                const response = await tx.purchaseOrder.create({
                    data: {
                        total: payload.total,
                        createdAt: payload.createdAt,
                        purchaseOrderDetails: {
                            create: purchaseOrderDetails,
                        },
                    },
                    include: {
                        purchaseOrderDetails: true,
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
        return await this.prisma.purchaseOrderDetail.delete({ where: { id } });
    }
};
exports.PurchaseOrdersService = PurchaseOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        upload_files_service_1.UploadFilesService,
        parse_files_service_1.ParseFilesService])
], PurchaseOrdersService);
//# sourceMappingURL=purchase-orders.service.js.map