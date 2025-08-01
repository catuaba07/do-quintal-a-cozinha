/*
  Warnings:

  - You are about to drop the column `audio_url` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `video_url` on the `Product` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "media_type" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "Media_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product_name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    CONSTRAINT "Product_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("category", "description", "id", "product_name", "profile_id") SELECT "category", "description", "id", "product_name", "profile_id" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
