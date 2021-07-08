-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "storage" INTEGER NOT NULL,
    "image_path" TEXT NOT NULL
);
