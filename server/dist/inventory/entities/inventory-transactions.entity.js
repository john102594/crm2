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
exports.InventoryTransaction = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const purchase_order_entity_1 = require("./purchase-order.entity");
const order_entity_1 = require("./order.entity");
let InventoryTransaction = class InventoryTransaction {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, product: { required: true, type: () => require("./product.entity").Product }, quantity: { required: true, type: () => Number }, unit_price: { required: true, type: () => Number }, balance: { required: true, type: () => Number }, unit_cost_avg: { required: true, type: () => Number }, purchaseOrder: { required: true, type: () => require("./purchase-order.entity").PurchaseOrder }, order: { required: true, type: () => require("./order.entity").Order }, createdAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => product_entity_1.Product, (product) => product.transations),
    __metadata("design:type", product_entity_1.Product)
], InventoryTransaction.prototype, "product", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "unit_price", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "balance", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "unit_cost_avg", void 0);
__decorate([
    typeorm_1.ManyToOne(() => purchase_order_entity_1.PurchaseOrder),
    __metadata("design:type", purchase_order_entity_1.PurchaseOrder)
], InventoryTransaction.prototype, "purchaseOrder", void 0);
__decorate([
    typeorm_1.ManyToOne(() => order_entity_1.Order),
    __metadata("design:type", order_entity_1.Order)
], InventoryTransaction.prototype, "order", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], InventoryTransaction.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], InventoryTransaction.prototype, "updateAt", void 0);
InventoryTransaction = __decorate([
    typeorm_1.Entity()
], InventoryTransaction);
exports.InventoryTransaction = InventoryTransaction;
//# sourceMappingURL=inventory-transactions.entity.js.map