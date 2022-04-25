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
exports.PurchaseOrderDetailsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const purchase_order_entity_1 = require("../entities/purchase-order.entity");
const purchase_order_detail_entity_1 = require("../entities/purchase-order-detail.entity");
const product_entity_1 = require("../entities/product.entity");
const inventory_transactions_entity_1 = require("../entities/inventory-transactions.entity");
let PurchaseOrderDetailsService = class PurchaseOrderDetailsService {
    constructor(inventoryTransactionRepo, purchaseOrderRepo, purchaseOrderDetailRepo, productRepo) {
        this.inventoryTransactionRepo = inventoryTransactionRepo;
        this.purchaseOrderRepo = purchaseOrderRepo;
        this.purchaseOrderDetailRepo = purchaseOrderDetailRepo;
        this.productRepo = productRepo;
    }
    async findAll() {
        return await this.purchaseOrderDetailRepo.find();
    }
    async findOne(id) {
        const purchaseorderDetail = await this.purchaseOrderDetailRepo.findOne(id);
        if (!purchaseorderDetail) {
            throw new common_1.NotFoundException(`PurchaseOrder #${id} not found`);
        }
        return purchaseorderDetail;
    }
    async create(data) {
        const productIds = data.map((element) => element.productId);
        const products = await this.productRepo.findByIds(productIds);
        if (data.length !== products.length) {
            const idsFound = products.map((product) => product.id);
            const idsNotFound = productIds.filter((element) => !idsFound.includes(element));
            throw new common_1.NotFoundException(`Products #${idsNotFound} not found`);
        }
        const purchaseOrderItems = this.purchaseOrderDetailRepo.create(data);
        const inventoryTransactions = [];
        for (let i = 0; i < purchaseOrderItems.length; i++) {
            purchaseOrderItems[i].product = products[i];
            inventoryTransactions[i] = {
                product: products[i],
                quantity: data[i].quantity,
                unit_cost: data[i].unit_cost,
            };
            const { balance, unit_cost_avg } = await this.calcProductCostAvg(inventoryTransactions[i]);
            inventoryTransactions[i].balance = balance;
            inventoryTransactions[i].unit_cost_avg = unit_cost_avg;
        }
        const newPurchaseOrder = this.purchaseOrderRepo.create();
        newPurchaseOrder.purchaseOrderDetail = purchaseOrderItems;
        newPurchaseOrder.inventoryTransactions = inventoryTransactions;
        await this.purchaseOrderDetailRepo.save(purchaseOrderItems);
        await this.inventoryTransactionRepo.save(inventoryTransactions);
        await this.purchaseOrderRepo.save(newPurchaseOrder);
        return newPurchaseOrder;
    }
    async update(id, changes) {
        const purchaseorder = await this.purchaseOrderDetailRepo.findOne(id);
        if (!purchaseorder) {
            throw new common_1.NotFoundException(`PurchaseOrder #${id} not found`);
        }
        console.log(changes);
        return await this.purchaseOrderDetailRepo.save(purchaseorder);
    }
    async remove(id) {
        return await this.purchaseOrderDetailRepo.delete(id);
    }
    async calcProductCostAvg(orderPurchase) {
        const lastTransaction = await this.inventoryTransactionRepo.findOne({
            where: { product: orderPurchase.product.id },
            order: { id: 'DESC' },
        });
        let prevBalance = 0;
        let newBalance = orderPurchase.quantity;
        let unit_cost_avg = 0;
        if (lastTransaction) {
            prevBalance = lastTransaction.balance;
            newBalance = prevBalance + orderPurchase.quantity;
            unit_cost_avg = lastTransaction.unit_cost_avg;
        }
        const newUnitCostAvg = (unit_cost_avg * prevBalance +
            orderPurchase.quantity * orderPurchase.unit_cost) /
            newBalance;
        const inventorytransaction = {
            balance: newBalance,
            unit_cost_avg: newUnitCostAvg,
        };
        return inventorytransaction;
    }
};
PurchaseOrderDetailsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(inventory_transactions_entity_1.InventoryTransaction)),
    __param(1, typeorm_1.InjectRepository(purchase_order_entity_1.PurchaseOrder)),
    __param(2, typeorm_1.InjectRepository(purchase_order_detail_entity_1.PurchaseOrderDetail)),
    __param(3, typeorm_1.InjectRepository(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PurchaseOrderDetailsService);
exports.PurchaseOrderDetailsService = PurchaseOrderDetailsService;
//# sourceMappingURL=purchase-order-details.service.js.map