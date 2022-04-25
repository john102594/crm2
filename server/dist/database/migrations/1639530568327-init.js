"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1639530568327 = void 0;
class init1639530568327 {
    constructor() {
        this.name = 'init1639530568327';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "price" integer NOT NULL DEFAULT '0', "stock" integer NOT NULL DEFAULT '0', "image" character varying, CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "product"`);
    }
}
exports.init1639530568327 = init1639530568327;
//# sourceMappingURL=1639530568327-init.js.map