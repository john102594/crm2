import {MigrationInterface, QueryRunner} from "typeorm";

export class nullableunitprice1645396646141 implements MigrationInterface {
    name = 'nullableunitprice1645396646141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ALTER COLUMN "unit_price" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ALTER COLUMN "unit_price" SET NOT NULL`);
    }

}
