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
let PurchaseOrdersService = exports.PurchaseOrdersService = class PurchaseOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return await this.prisma.purchaseOrder.findMany({
            include: {
                purchaseOrderDetails: true,
            },
        });
    }
    async findOne(id) {
        const order = await this.prisma.purchaseOrder.findUnique({
            where: { id },
            include: { purchaseOrderDetails: true },
        });
        return order;
    }
    async create(payload) {
        const productsId = payload.purchaseOrderDetails.map((element) => element.productId);
        try {
            return await this.prisma.$transaction(async (tx) => {
                let InventaryTransaction = [];
                for (let i = 0; i < productsId.length; i++) {
                    const element = payload.purchaseOrderDetails[i];
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
                    const totalsaldo = Number(result.unitCostAvg) * Number(result.balance);
                    const newsaldo = Number(result.balance) + element.quantity;
                    const newcosto_prom = (totalsaldo + element.quantity * element.unit_cost) / newsaldo;
                    InventaryTransaction.push({
                        productId: element.productId,
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
                            id: productsId[i],
                        },
                    });
                }
                const response = await tx.purchaseOrder.create({
                    data: {
                        purchaseOrderDetails: {
                            create: payload.purchaseOrderDetails,
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchaseOrdersService);
//# sourceMappingURL=purchase-orders.service.js.map