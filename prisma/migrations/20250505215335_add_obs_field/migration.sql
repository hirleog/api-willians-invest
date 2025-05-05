/*
  Warnings:

  - Added the required column `contatado` to the `Formulario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `formulario` ADD COLUMN `contatado` BOOLEAN NOT NULL;
