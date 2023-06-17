/*
  Warnings:

  - You are about to drop the `_roletousers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_roletousers` DROP FOREIGN KEY `_RoleToUsers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_roletousers` DROP FOREIGN KEY `_RoleToUsers_B_fkey`;

-- DropTable
DROP TABLE `_roletousers`;

-- DropTable
DROP TABLE `role`;

-- CreateTable
CREATE TABLE `Roles` (
    `RoleId` INTEGER NOT NULL AUTO_INCREMENT,
    `Role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Roles_Role_key`(`Role`),
    PRIMARY KEY (`RoleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RolesToUsers` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_RolesToUsers_AB_unique`(`A`, `B`),
    INDEX `_RolesToUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_RolesToUsers` ADD CONSTRAINT `_RolesToUsers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Roles`(`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RolesToUsers` ADD CONSTRAINT `_RolesToUsers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Users`(`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;
