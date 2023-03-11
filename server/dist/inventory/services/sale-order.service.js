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
exports.SaleOrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sale_order_entity_1 = require("../entities/sale-order.entity");
const sale_order_detail_entity_1 = require("../entities/sale-order-detail.entity");
let SaleOrdersService = class SaleOrdersService {
    constructor(orderRepo, orderDetailRepo) {
        this.orderRepo = orderRepo;
        this.orderDetailRepo = orderDetailRepo;
    }
    async findAll() {
        return await this.orderRepo.find({ relations: ['orderDetail'] });
    }
    async findOne(id) {
        const order = await this.orderRepo.findOne(id);
        if (!order) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        return order;
    }
    async create(data) {
        return data;
    }
    async update(id, changes) {
        const order = await this.orderRepo.findOne(id);
        if (!order) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        console.log(changes);
        return await this.orderRepo.save(order);
    }
    async remove(id) {
        return await this.orderRepo.delete(id);
    }
};
SaleOrdersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(sale_order_entity_1.SaleOrder)),
    __param(1, typeorm_1.InjectRepository(sale_order_detail_entity_1.SaleOrderDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SaleOrdersService);
exports.SaleOrdersService = SaleOrdersService;
//# sourceMappingURL=sale-order.service.js.map