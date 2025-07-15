/*
  Warnings:

  - The primary key for the `Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `level` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Skill` table. All the data in the column will be lost.
  - The `id` column on the `Skill` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `SocialLink` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `SocialLink` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Technology` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Technology` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `_ProjectTechnologies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `category` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Made the column `icon` on table `Skill` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `profileId` on the `Skill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `profileId` on the `SocialLink` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_ProjectTechnologies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_ProjectTechnologies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SkillStatus" AS ENUM ('complet', 'en_Progression', 'en_Attente');

-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_profileId_fkey";

-- DropForeignKey
ALTER TABLE "SocialLink" DROP CONSTRAINT "SocialLink_profileId_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectTechnologies" DROP CONSTRAINT "_ProjectTechnologies_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectTechnologies" DROP CONSTRAINT "_ProjectTechnologies_B_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_pkey",
DROP COLUMN "level",
DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "energy" INTEGER NOT NULL,
ADD COLUMN     "relatedIds" INTEGER[],
ADD COLUMN     "status" "SkillStatus" NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "icon" SET NOT NULL,
DROP COLUMN "profileId",
ADD COLUMN     "profileId" INTEGER NOT NULL,
ADD CONSTRAINT "Skill_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SocialLink" DROP CONSTRAINT "SocialLink_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "profileId",
ADD COLUMN     "profileId" INTEGER NOT NULL,
ADD CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Technology_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_ProjectTechnologies" DROP CONSTRAINT "_ProjectTechnologies_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL,
ADD CONSTRAINT "_ProjectTechnologies_AB_pkey" PRIMARY KEY ("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectTechnologies_B_index" ON "_ProjectTechnologies"("B");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTechnologies" ADD CONSTRAINT "_ProjectTechnologies_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTechnologies" ADD CONSTRAINT "_ProjectTechnologies_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
