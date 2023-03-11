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
exports.InventoryTransactionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventory_transactions_entity_1 = require("../entities/inventory-transactions.entity");
const product_entity_1 = require("../entities/product.entity");
const sale_order_entity_1 = require("../entities/sale-order.entity");
const purchase_order_entity_1 = require("../entities/purchase-order.entity");
let InventoryTransactionsService = class InventoryTransactionsService {
    constructor(inventoryTransactionRepo, productRepo, saleOrderRepo, purchaseOrderRepo) {
        this.inventoryTransactionRepo = inventoryTransactionRepo;
        this.productRepo = productRepo;
        this.saleOrderRepo = saleOrderRepo;
        this.purchaseOrderRepo = purchaseOrderRepo;
    }
    async findAll() {
        return await this.inventoryTransactionRepo.find();
    }
    async findOne(id) {
        const inventorytransaction = await this.inventoryTransactionRepo.findOne(id);
        if (!inventorytransaction) {
            throw new common_1.NotFoundException(`InventoryTransaction #${id} not found`);
        }
        return inventorytransaction;
    }
    async findLastProduct(id) {
        const inventorytransaction = await this.inventoryTransactionRepo.findOne({
            where: { product: id },
            order: { id: 'DESC' },
        });
        return inventorytransaction;
    }
    async create(data) {
        const newInventoryTransaction = this.inventoryTransactionRepo.create(data);
        newInventoryTransaction.product = await this.productRepo.findOne(data.productId);
        const lastTransaction = await this.findLastProduct(data.productId);
        let balance = 0;
        let newBalance = data.quantity;
        let unit_cost_avg = 0;
        if (lastTransaction) {
            balance = lastTransaction.balance;
            newBalance = balance + data.quantity;
            unit_cost_avg = lastTransaction.unit_cost_avg;
        }
        newInventoryTransaction.balance = newBalance;
        const newUnitCostAvg = (unit_cost_avg * balance + data.quantity * data.unit_cost) / newBalance;
        if (data.saleOrderId) {
            newInventoryTransaction.saleOrder = await this.saleOrderRepo.findOne(data.saleOrderId);
            newInventoryTransaction.unit_cost_avg = unit_cost_avg;
        }
        else if (data.purchaseOrderId) {
            newInventoryTransaction.purchaseOrder = await this.purchaseOrderRepo.findOne(data.purchaseOrderId);
            newInventoryTransaction.unit_cost_avg = newUnitCostAvg;
        }
        return await this.inventoryTransactionRepo.save(newInventoryTransaction);
    }
    async update(id, changes) {
        const inventorytransaction = await this.inventoryTransactionRepo.findOne(id);
        this.inventoryTransactionRepo.merge(inventorytransaction, changes);
        return await this.inventoryTransactionRepo.save(inventorytransaction);
    }
    async remove(id) {
        return await this.inventoryTransactionRepo.delete(id);
    }
};
InventoryTransactionsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(inventory_transactions_entity_1.InventoryTransaction)),
    __param(1, typeorm_1.InjectRepository(product_entity_1.Product)),
    __param(2, typeorm_1.InjectRepository(sale_order_entity_1.SaleOrder)),
    __param(3, typeorm_1.InjectRepository(purchase_order_entity_1.PurchaseOrder)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], InventoryTransactionsService);
exports.InventoryTransactionsService = InventoryTransactionsService;
//# sourceMappingURL=inventory-transactions.service.js.map