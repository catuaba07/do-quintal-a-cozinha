-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product_name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "image_url" TEXT,
    "audio_url" TEXT,
    "video_url" TEXT,
    "profile_id" TEXT NOT NULL,
    CONSTRAINT "Product_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("audio_url", "category", "description", "id", "image_url", "product_name", "profile_id", "video_url") SELECT "audio_url", "category", "description", "id", "image_url", "product_name", "profile_id", "video_url" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
