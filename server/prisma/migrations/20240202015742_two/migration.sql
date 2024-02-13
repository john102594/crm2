/*
  Warnings:

  - You are about to drop the column `purchaseOrderId` on the `inventorytransaction` table. All the data in the column will be lost.
  - You are about to drop the column `saleOrderId` on the `inventorytransaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `inventorytransaction` DROP COLUMN `purchaseOrderId`,
    DROP COLUMN `saleOrderId`;
