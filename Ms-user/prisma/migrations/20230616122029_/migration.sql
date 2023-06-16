/*
  Warnings:

  - A unique constraint covering the columns `[Role]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Role_Role_key` ON `Role`(`Role`);
