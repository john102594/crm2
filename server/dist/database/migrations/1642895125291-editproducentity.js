"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editproducentity1642895125291 = void 0;
class editproducentity1642895125291 {
    constructor() {
        this.name = 'editproducentity1642895125291';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name")`);
    }
}
exports.editproducentity1642895125291 = editproducentity1642895125291;
//# sourceMappingURL=1642895125291-editproducentity.js.map