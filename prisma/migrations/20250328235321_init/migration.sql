-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "social_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "instagram" TEXT,
    "product_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "img_path" TEXT NOT NULL,
    "audio_path" TEXT,
    "video_path" TEXT
);
