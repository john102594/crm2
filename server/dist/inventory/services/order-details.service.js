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
exports.OrderDetailsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("../entities/order.entity");
const order_detail_entity_1 = require("../entities/order-detail.entity");
const product_entity_1 = require("../entities/product.entity");
const inventory_transactions_entity_1 = require("../entities/inventory-transactions.entity");
let OrderDetailsService = class OrderDetailsService {
    constructor(inventoryTransactionRepo, orderRepo, orderDetailRepo, productRepo) {
        this.inventoryTransactionRepo = inventoryTransactionRepo;
        this.orderRepo = orderRepo;
        this.orderDetailRepo = orderDetailRepo;
        this.productRepo = productRepo;
    }
    async findAll() {
        return await this.orderDetailRepo.find();
    }
    async findOne(id) {
        const orderDetail = await this.orderDetailRepo.findOne(id);
        if (!orderDetail) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        return orderDetail;
    }
    async create(data) {
        const productIds = data.map((element) => element.productId);
        const products = await this.productRepo.findByIds(productIds);
        if (data.length !== products.length) {
            const idsFound = products.map((product) => product.id);
            const idsNotFound = productIds.filter((element) => !idsFound.includes(element));
            throw new common_1.NotFoundException(`Products #${idsNotFound} not found`);
        }
        const orderItems = await this.orderDetailRepo.create(data);
        const inventoryTransactions = [];
        await orderItems.forEach(async (orderDetail, i) => {
            orderDetail.product = products[i];
            inventoryTransactions[i] = {
                product: products[i],
                quantity: -data[i].quantity,
                unit_price: data[i].unit_price,
            };
            const { balance, unit_cost_avg } = await this.calcProductCostAvg(inventoryTransactions[i]);
            inventoryTransactions[i].balance = balance;
            inventoryTransactions[i].unit_cost_avg = unit_cost_avg;
        });
        const newOrder = this.orderRepo.create();
        newOrder.orderDetail = orderItems;
        newOrder.inventoryTransactions = inventoryTransactions;
        await this.orderDetailRepo.save(orderItems);
        await this.inventoryTransactionRepo.save(inventoryTransactions);
        await this.orderRepo.save(newOrder);
        return newOrder;
    }
    async update(id, changes) {
        const order = await this.orderDetailRepo.findOne(id);
        if (!order) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        console.log(changes);
        return await this.orderDetailRepo.save(order);
    }
    async remove(id) {
        return await this.orderDetailRepo.delete(id);
    }
    async calcProductCostAvg(order) {
        const lastTransaction = await this.inventoryTransactionRepo.findOne({
            where: { product: order.product.id },
            order: { id: 'DESC' },
        });
        let prevBalance = 0;
        let newBalance = order.quantity;
        let unit_cost_avg = 0;
        if (lastTransaction) {
            prevBalance = lastTransaction.balance;
            newBalance = prevBalance + order.quantity;
            unit_cost_avg = lastTransaction.unit_cost_avg;
        }
        const inventorytransaction = {
            balance: newBalance,
            unit_cost_avg: unit_cost_avg,
        };
        return inventorytransaction;
    }
};
OrderDetailsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(inventory_transactions_entity_1.InventoryTransaction)),
    __param(1, typeorm_1.InjectRepository(order_entity_1.Order)),
    __param(2, typeorm_1.InjectRepository(order_detail_entity_1.OrderDetail)),
    __param(3, typeorm_1.InjectRepository(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderDetailsService);
exports.OrderDetailsService = OrderDetailsService;
//# sourceMappingURL=order-details.service.js.map