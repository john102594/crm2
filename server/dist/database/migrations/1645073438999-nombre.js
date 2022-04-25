"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nombre1645073438999 = void 0;
class nombre1645073438999 {
    constructor() {
        this.name = 'nombre1645073438999';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "sku" text NOT NULL, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_34f6ca1cd897cc926bdcca1ca39" UNIQUE ("sku"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_order_detail" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "unit_cost" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "productId" integer, "purchaseOrderId" integer, CONSTRAINT "PK_51029a6e129ce3c436c352f1a76" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" ADD CONSTRAINT "FK_d3dc106ebea0664e37d78d730d3" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" ADD CONSTRAINT "FK_8da67d8be88e9d95b40f0f0931b" FOREIGN KEY ("purchaseOrderId") REFERENCES "purchase_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_a3647bd11aed3cf968c9ce9b835" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD CONSTRAINT "FK_448b12087240191aa13de760831" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP CONSTRAINT "FK_448b12087240191aa13de760831"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_a3647bd11aed3cf968c9ce9b835"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" DROP CONSTRAINT "FK_8da67d8be88e9d95b40f0f0931b"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_detail" DROP CONSTRAINT "FK_d3dc106ebea0664e37d78d730d3"`);
        await queryRunner.query(`DROP TABLE "purchase_order_detail"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }
}
exports.nombre1645073438999 = nombre1645073438999;
//# sourceMappingURL=1645073438999-nombre.js.map