-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product_name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "img_path" TEXT,
    "audio_path" TEXT,
    "video_path" TEXT,
    "profile_id" TEXT NOT NULL,
    CONSTRAINT "Product_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("audio_path", "category", "description", "id", "img_path", "product_name", "profile_id", "video_path") SELECT "audio_path", "category", "description", "id", "img_path", "product_name", "profile_id", "video_path" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
