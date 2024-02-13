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
let SaleOrdersService = exports.SaleOrdersService = class SaleOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return await this.prisma.saleOrder.findMany({
            include: { saleOrderDetails: true },
        });
    }
    async findOne(id) {
        const order = await this.prisma.saleOrder.findUnique({
            where: { id },
            include: { saleOrderDetails: true },
        });
        return order;
    }
    async create(payload) {
        const productsId = payload.saleOrderDetails.map((element) => element.productId);
        try {
            return await this.prisma.$transaction(async (tx) => {
                let InventaryTransaction = [];
                for (let i = 0; i < productsId.length; i++) {
                    const element = payload.saleOrderDetails[i];
                    const result = (await tx.inventoryTransaction.findFirst({
                        select: {
                            balance: true,
                            unitCostAvg: true,
                        },
                        where: { productId: productsId[i] },
                        orderBy: { id: 'desc' },
                    })) || {
                        balance: 0,
                        unitCostAvg: 0,
                    };
                    const newsaldo = Number(result.balance) - element.quantity;
                    InventaryTransaction.push({
                        productId: element.productId,
                        transactionTypeId: 2,
                        quantity: -element.quantity,
                        unitPrice: element.unit_price,
                        balance: newsaldo,
                        unitCostAvg: result.unitCostAvg,
                    });
                    await tx.product.update({
                        data: {
                            quantity: newsaldo,
                            unitCostAvg: result.unitCostAvg,
                        },
                        where: {
                            id: productsId[i],
                        },
                    });
                }
                const response = await tx.saleOrder.create({
                    data: {
                        saleOrderDetails: {
                            create: payload.saleOrderDetails,
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SaleOrdersService);
//# sourceMappingURL=sale-order.service.js.map