/*
  Warnings:

  - You are about to drop the column `userId` on the `Content` table. All the data in the column will be lost.
  - Added the required column `description` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Content" DROP CONSTRAINT "Content_userId_fkey";

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "userId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
