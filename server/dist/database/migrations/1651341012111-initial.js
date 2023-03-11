"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial1651341012111 = void 0;
class initial1651341012111 {
    constructor() {
        this.name = 'initial1651341012111';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "test"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "test" double precision NOT NULL`);
    }
}
exports.initial1651341012111 = initial1651341012111;
//# sourceMappingURL=1651341012111-initial.js.map