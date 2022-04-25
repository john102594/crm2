"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullableunitprice1645396646141 = void 0;
class nullableunitprice1645396646141 {
    constructor() {
        this.name = 'nullableunitprice1645396646141';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ALTER COLUMN "unit_price" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ALTER COLUMN "unit_price" SET NOT NULL`);
    }
}
exports.nullableunitprice1645396646141 = nullableunitprice1645396646141;
//# sourceMappingURL=1645396646141-nullableunitprice.js.map