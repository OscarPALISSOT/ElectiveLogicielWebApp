-- CreateTable
CREATE TABLE `User` (
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

    UNIQUE INDEX `User_Email_key`(`Email`),
    PRIMARY KEY (`UserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `RoleId` INTEGER NOT NULL AUTO_INCREMENT,
    `Role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`RoleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RoleToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_RoleToUser_AB_unique`(`A`, `B`),
    INDEX `_RoleToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_RoleToUser` ADD CONSTRAINT `_RoleToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Role`(`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToUser` ADD CONSTRAINT `_RoleToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;
