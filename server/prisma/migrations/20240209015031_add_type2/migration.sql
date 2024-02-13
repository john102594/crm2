/*
  Warnings:

  - You are about to drop the column `transactionType` on the `inventorytransaction` table. All the data in the column will be lost.
  - Added the required column `transactionTypeId` to the `InventoryTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inventorytransaction` DROP COLUMN `transactionType`,
    ADD COLUMN `transactionTypeId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `InventoryTransactionType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InventoryTransaction` ADD CONSTRAINT `InventoryTransaction_transactionTypeId_fkey` FOREIGN KEY (`transactionTypeId`) REFERENCES `InventoryTransactionType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
