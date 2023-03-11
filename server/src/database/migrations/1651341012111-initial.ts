import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1651341012111 implements MigrationInterface {
    name = 'initial1651341012111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" DROP COLUMN "test"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventory_transaction" ADD "test" double precision NOT NULL`);
    }

}
