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
exports.PurchaseOrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const purchase_order_entity_1 = require("../entities/purchase-order.entity");
const purchase_order_detail_entity_1 = require("../entities/purchase-order-detail.entity");
let PurchaseOrdersService = class PurchaseOrdersService {
    constructor(purchaseOrderRepo, purchaseOrderDetailRepo) {
        this.purchaseOrderRepo = purchaseOrderRepo;
        this.purchaseOrderDetailRepo = purchaseOrderDetailRepo;
    }
    async findAll() {
        return await this.purchaseOrderRepo.find({
            relations: ['purchaseOrderDetail'],
        });
    }
    async findOne(id) {
        const order = await this.purchaseOrderRepo.findOne(id);
        if (!order) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        return order;
    }
    async create(data) {
        return data;
    }
    async update(id, changes) {
        const order = await this.purchaseOrderRepo.findOne(id);
        if (!order) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        console.log(changes);
        return await this.purchaseOrderRepo.save(order);
    }
    async remove(id) {
        return await this.purchaseOrderRepo.delete(id);
    }
};
PurchaseOrdersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(purchase_order_entity_1.PurchaseOrder)),
    __param(1, typeorm_1.InjectRepository(purchase_order_detail_entity_1.PurchaseOrderDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PurchaseOrdersService);
exports.PurchaseOrdersService = PurchaseOrdersService;
//# sourceMappingURL=purchase-orders.service.js.map