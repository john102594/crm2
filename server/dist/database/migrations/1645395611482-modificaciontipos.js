"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificaciontipos1645395611482 = void 0;
class modificaciontipos1645395611482 {
    constructor() {
        this.name = 'modificaciontipos1645395611482';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" ADD "quantity" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" DROP COLUMN "unit_cost"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" ADD "unit_cost" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD "quantity" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP COLUMN "unit_price"`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD "unit_price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "quantity" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "unit_price"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "unit_price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "balance"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "balance" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "unit_cost_avg"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "unit_cost_avg" double precision NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "unit_cost_avg"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "unit_cost_avg" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "balance"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "balance" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "unit_price"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "unit_price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP COLUMN "unit_price"`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD "unit_price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" DROP COLUMN "unit_cost"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" ADD "unit_cost" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" ADD "quantity" integer NOT NULL`);
    }
}
exports.modificaciontipos1645395611482 = modificaciontipos1645395611482;
//# sourceMappingURL=1645395611482-modificaciontipos.js.map