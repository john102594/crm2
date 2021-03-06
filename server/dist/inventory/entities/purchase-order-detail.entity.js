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
exports.PurchaseOrderDetail = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const purchase_order_entity_1 = require("./purchase-order.entity");
let PurchaseOrderDetail = class PurchaseOrderDetail {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, unit_cost: { required: true, type: () => Number }, product: { required: true, type: () => require("./product.entity").Product }, purchaseOrder: { required: true, type: () => require("./purchase-order.entity").PurchaseOrder }, createdAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PurchaseOrderDetail.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], PurchaseOrderDetail.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], PurchaseOrderDetail.prototype, "unit_cost", void 0);
__decorate([
    typeorm_1.ManyToOne(() => product_entity_1.Product),
    __metadata("design:type", product_entity_1.Product)
], PurchaseOrderDetail.prototype, "product", void 0);
__decorate([
    typeorm_1.ManyToOne(() => purchase_order_entity_1.PurchaseOrder, (purchaseOrder) => purchaseOrder.purchaseOrderDetail),
    __metadata("design:type", purchase_order_entity_1.PurchaseOrder)
], PurchaseOrderDetail.prototype, "purchaseOrder", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PurchaseOrderDetail.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PurchaseOrderDetail.prototype, "updateAt", void 0);
PurchaseOrderDetail = __decorate([
    typeorm_1.Entity()
], PurchaseOrderDetail);
exports.PurchaseOrderDetail = PurchaseOrderDetail;
//# sourceMappingURL=purchase-order-detail.entity.js.map