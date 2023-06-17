/*
  Warnings:

  - You are about to drop the `_roletouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_roletouser` DROP FOREIGN KEY `_RoleToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_roletouser` DROP FOREIGN KEY `_RoleToUser_B_fkey`;

-- DropTable
DROP TABLE `_roletouser`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Users` (
    `UserId` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `RegistrationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL,
    `Token` VARCHAR(191) NULL,
    `TokenExpiration` DATETIME(3) NULL,
    `RefreshToken` VARCHAR(191) NULL,
    `RefreshTokenExpiration` DATETIME(3) NULL,

    UNIQUE INDEX `Users_Email_key`(`Email`),
    PRIMARY KEY (`UserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RoleToUsers` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_RoleToUsers_AB_unique`(`A`, `B`),
    INDEX `_RoleToUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_RoleToUsers` ADD CONSTRAINT `_RoleToUsers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Role`(`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToUsers` ADD CONSTRAINT `_RoleToUsers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Users`(`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;
