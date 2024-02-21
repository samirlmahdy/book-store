/*
  Warnings:

  - A unique constraint covering the columns `[book_serial]` on the table `Serial` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Serial_book_serial_key` ON `Serial`(`book_serial`);
