/*
  Warnings:

  - A unique constraint covering the columns `[Token]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[RefreshToken]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Users_Token_key` ON `Users`(`Token`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_RefreshToken_key` ON `Users`(`RefreshToken`);
