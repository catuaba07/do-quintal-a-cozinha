-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "social_name" TEXT,
    "instagram" TEXT
);
INSERT INTO "new_Profile" ("id", "instagram", "name", "phone_number", "social_name") SELECT "id", "instagram", "name", "phone_number", "social_name" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
