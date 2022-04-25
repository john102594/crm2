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
exports.PurchaseOrder = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const purchase_order_detail_entity_1 = require("./purchase-order-detail.entity");
const inventory_transactions_entity_1 = require("./inventory-transactions.entity");
let PurchaseOrder = class PurchaseOrder {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, purchaseOrderDetail: { required: true, type: () => [require("./purchase-order-detail.entity").PurchaseOrderDetail] }, inventoryTransactions: { required: true, type: () => [require("./inventory-transactions.entity").InventoryTransaction] }, createdAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PurchaseOrder.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(() => purchase_order_detail_entity_1.PurchaseOrderDetail, (purchaseOrderDetail) => purchaseOrderDetail.purchaseOrder),
    __metadata("design:type", Array)
], PurchaseOrder.prototype, "purchaseOrderDetail", void 0);
__decorate([
    typeorm_1.OneToMany(() => inventory_transactions_entity_1.InventoryTransaction, (inventoryTransactions) => inventoryTransactions.purchaseOrder),
    __metadata("design:type", Array)
], PurchaseOrder.prototype, "inventoryTransactions", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PurchaseOrder.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PurchaseOrder.prototype, "updateAt", void 0);
PurchaseOrder = __decorate([
    typeorm_1.Entity()
], PurchaseOrder);
exports.PurchaseOrder = PurchaseOrder;
//# sourceMappingURL=purchase-order.entity.js.map