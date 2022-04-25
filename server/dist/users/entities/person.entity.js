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
exports.Person = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const document_type_1 = require("../../common/document-type");
let Person = class Person {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, document_number: { required: true, type: () => String }, document_type: { required: true, enum: require("../../common/document-type").DocumentType }, createdAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Person.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 15, nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Person.prototype, "document_number", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: document_type_1.DocumentType,
        default: document_type_1.DocumentType.CC,
    }),
    __metadata("design:type", String)
], Person.prototype, "document_type", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Person.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Person.prototype, "updateAt", void 0);
Person = __decorate([
    typeorm_1.Entity()
], Person);
exports.Person = Person;
//# sourceMappingURL=person.entity.js.map