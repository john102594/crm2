"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificaciontipos1645395821303 = void 0;
class modificaciontipos1645395821303 {
    constructor() {
        this.name = 'modificaciontipos1645395821303';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "purchase_order_detail" ("id" SERIAL NOT NULL, "quantity" double precision NOT NULL, "unit_cost" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "productId" integer, "purchaseOrderId" integer, CONSTRAINT "PK_51029a6e129ce3c436c352f1a76" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_order" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ad3e1c7b862f4043b103a6c8c60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_detail" ("id" SERIAL NOT NULL, "quantity" double precision NOT NULL, "unit_price" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "productId" integer, "orderId" integer, CONSTRAINT "PK_0afbab1fa98e2fb0be8e74f6b38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inventory_transaction" ("id" SERIAL NOT NULL, "quantity" double precision NOT NULL, "unit_price" double precision NOT NULL, "balance" double precision NOT NULL, "unit_cost_avg" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "productId" integer, "purchaseOrderId" integer, "orderId" integer, CONSTRAINT "PK_f58bbe29fa78f5b0d59d840d3ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" ADD CONSTRAINT "FK_d3dc106ebea0664e37d78d730d3" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" ADD CONSTRAINT "FK_8da67d8be88e9d95b40f0f0931b" FOREIGN KEY ("purchaseOrderId") REFERENCES "purchase_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_a3647bd11aed3cf968c9ce9b835" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_88850b85b38a8a2ded17a1f5369" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD CONSTRAINT "FK_448b12087240191aa13de760831" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD CONSTRAINT "FK_be48eaeb396a5c3262dbba444d7" FOREIGN KEY ("purchaseOrderId") REFERENCES "purchase_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD CONSTRAINT "FK_8847983a1de540916780425cf1d" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP CONSTRAINT "FK_8847983a1de540916780425cf1d"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP CONSTRAINT "FK_be48eaeb396a5c3262dbba444d7"`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP CONSTRAINT "FK_448b12087240191aa13de760831"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_88850b85b38a8a2ded17a1f5369"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_a3647bd11aed3cf968c9ce9b835"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" DROP CONSTRAINT "FK_8da67d8be88e9d95b40f0f0931b"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" DROP CONSTRAINT "FK_d3dc106ebea0664e37d78d730d3"`);
        await queryRunner.query(`DROP TABLE "inventory_transaction"`);
        await queryRunner.query(`DROP TABLE "order_detail"`);
        await queryRunner.query(`DROP TABLE "purchase_order"`);
        await queryRunner.query(`DROP TABLE "purchase_order_detail"`);
    }
}
exports.modificaciontipos1645395821303 = modificaciontipos1645395821303;
//# sourceMappingURL=1645395821303-modificaciontipos.js.map