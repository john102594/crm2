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
exports.InventoryTransactionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const querys_1 = require("../../sql/querys");
let InventoryTransactionsService = exports.InventoryTransactionsService = class InventoryTransactionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return await this.prisma.inventoryTransaction.findMany();
    }
    async getResumeMonth() {
        const query = querys_1.querys.getResumeMonthInventoryTransitions;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async getResumeDay() {
        const query = querys_1.querys.getResumeDayInventoryTransitions;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async getResumeYear() {
        const query = querys_1.querys.getResumeYearInventoryTransitions;
        try {
            const resultado = await this.prisma.$queryRawUnsafe(query);
            return resultado;
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        const inventorytransaction = await this.prisma.inventoryTransaction.findUnique({
            where: { id: +id },
        });
        if (!inventorytransaction) {
            throw new common_1.NotFoundException(`InventoryTransaction #${id} not found`);
        }
        return inventorytransaction;
    }
    async findLastProduct(id) {
        const inventorytransaction = await this.prisma.inventoryTransaction.findFirst({
            where: { id },
            orderBy: { id: 'desc' },
        });
        return inventorytransaction;
    }
    async create(data) {
    }
    async update(id, changes) {
    }
    async remove(id) {
        return await this.prisma.inventoryTransaction.delete({ where: { id } });
    }
};
exports.InventoryTransactionsService = InventoryTransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryTransactionsService);
//# sourceMappingURL=inventory-transactions.service.js.map