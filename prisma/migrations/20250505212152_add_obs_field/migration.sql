/*
  Warnings:

  - You are about to drop the column `observcao` on the `formulario` table. All the data in the column will be lost.
  - Added the required column `observacao` to the `Formulario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `formulario` DROP COLUMN `observcao`,
    ADD COLUMN `observacao` VARCHAR(191) NOT NULL;
