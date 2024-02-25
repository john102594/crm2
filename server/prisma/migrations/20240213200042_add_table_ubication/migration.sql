-- AlterTable
ALTER TABLE `product` ADD COLUMN `ubicationId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Ubication` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_ubicationId_fkey` FOREIGN KEY (`ubicationId`) REFERENCES `Ubication`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
