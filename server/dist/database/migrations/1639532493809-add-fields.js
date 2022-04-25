"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFields1639532493809 = void 0;
class addFields1639532493809 {
    constructor() {
        this.name = 'addFields1639532493809';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
    }
}
exports.addFields1639532493809 = addFields1639532493809;
//# sourceMappingURL=1639532493809-add-fields.js.map