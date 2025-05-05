/*
  Warnings:

  - Added the required column `data_contato` to the `Formulario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `formulario` ADD COLUMN `data_contato` VARCHAR(191) NOT NULL;
