/*
  Warnings:

  - Added the required column `bookURL` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `book_drive_name` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` ADD COLUMN `bookURL` VARCHAR(191) NOT NULL,
    ADD COLUMN `book_drive_name` VARCHAR(191) NOT NULL;
