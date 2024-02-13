/*
  Warnings:

  - You are about to drop the column `purchasePrice` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `purchasePrice`,
    ADD COLUMN `unitCostAvg` DOUBLE NULL;
