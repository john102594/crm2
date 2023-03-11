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
exports.SaleOrderDetailsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sale_Order_entity_1 = require("../entities/sale-Order.entity");
const sale_Order_detail_entity_1 = require("../entities/sale-Order-detail.entity");
const product_entity_1 = require("../entities/product.entity");
const inventory_transactions_entity_1 = require("../entities/inventory-transactions.entity");
let SaleOrderDetailsService = class SaleOrderDetailsService {
    constructor(inventoryTransactionRepo, saleOrderRepo, saleOrderDetailRepo, productRepo) {
        this.inventoryTransactionRepo = inventoryTransactionRepo;
        this.saleOrderRepo = saleOrderRepo;
        this.saleOrderDetailRepo = saleOrderDetailRepo;
        this.productRepo = productRepo;
    }
    async findAll() {
        return await this.saleOrderDetailRepo.find();
    }
    async findOne(id) {
        const SaleOrderDetail = await this.saleOrderDetailRepo.findOne(id);
        if (!SaleOrderDetail) {
            throw new common_1.NotFoundException(`SaleOrder #${id} not found`);
        }
        return SaleOrderDetail;
    }
    async create(data) {
        const productIds = data.map((element) => element.productId);
        const products = await this.productRepo.findByIds(productIds);
        if (data.length !== products.length) {
            const idsFound = products.map((product) => product.id);
            const idsNotFound = productIds.filter((element) => !idsFound.includes(element));
            throw new common_1.NotFoundException(`Products #${idsNotFound} not found`);
        }
        const SaleOrderItems = await this.saleOrderDetailRepo.create(data);
        const inventoryTransactions = [];
        await SaleOrderItems.forEach(async (SaleOrderDetail, i) => {
            SaleOrderDetail.product = products[i];
            inventoryTransactions[i] = {
                product: products[i],
                quantity: -data[i].quantity,
                unit_price: data[i].unit_price,
            };
            const { balance, unit_cost_avg } = await this.calcProductCostAvg(inventoryTransactions[i]);
            inventoryTransactions[i].balance = balance;
            inventoryTransactions[i].unit_cost_avg = unit_cost_avg;
        });
        const newSaleOrder = this.saleOrderRepo.create();
        newSaleOrder.saleOrderDetail = SaleOrderItems;
        newSaleOrder.inventoryTransactions = inventoryTransactions;
        await this.saleOrderDetailRepo.save(SaleOrderItems);
        await this.inventoryTransactionRepo.save(inventoryTransactions);
        await this.saleOrderRepo.save(newSaleOrder);
        return newSaleOrder;
    }
    async update(id, changes) {
        const SaleOrder = await this.saleOrderDetailRepo.findOne(id);
        if (!SaleOrder) {
            throw new common_1.NotFoundException(`SaleOrder #${id} not found`);
        }
        console.log(changes);
        return await this.saleOrderDetailRepo.save(SaleOrder);
    }
    async remove(id) {
        return await this.saleOrderDetailRepo.delete(id);
    }
    async calcProductCostAvg(saleOrder) {
        const lastTransaction = await this.inventoryTransactionRepo.findOne({
            where: { product: saleOrder.product.id },
            order: { id: 'DESC' },
        });
        let prevBalance = 0;
        let newBalance = saleOrder.quantity;
        let unit_cost_avg = 0;
        if (lastTransaction) {
            prevBalance = lastTransaction.balance;
            newBalance = prevBalance + saleOrder.quantity;
            unit_cost_avg = lastTransaction.unit_cost_avg;
        }
        const inventorytransaction = {
            balance: newBalance,
            unit_cost_avg: unit_cost_avg,
        };
        return inventorytransaction;
    }
};
SaleOrderDetailsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(inventory_transactions_entity_1.InventoryTransaction)),
    __param(1, typeorm_1.InjectRepository(sale_Order_entity_1.SaleOrder)),
    __param(2, typeorm_1.InjectRepository(sale_Order_detail_entity_1.SaleOrderDetail)),
    __param(3, typeorm_1.InjectRepository(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SaleOrderDetailsService);
exports.SaleOrderDetailsService = SaleOrderDetailsService;
//# sourceMappingURL=sale-order-details.service.js.map