/*
  Warnings:

  - You are about to drop the `GolfCart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InstalledPart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Part` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GolfCart";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "InstalledPart";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Part";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stockNumber" TEXT NOT NULL,
    "serialNumber" TEXT,
    "year" INTEGER,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "carType" TEXT,
    "fuel" TEXT NOT NULL,
    "color" TEXT,
    "price" REAL NOT NULL,
    "mileage" TEXT,
    "azStreetLegal" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "location" TEXT,
    "commentsPublic" TEXT,
    "commentsInternal" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "InventoryImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inventoryId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "InventoryImage_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inventoryId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "salePrice" REAL NOT NULL,
    "discount" REAL,
    "tradein" REAL,
    "dateSold" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Sale_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Accessory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "partNumber" TEXT,
    "description" TEXT NOT NULL,
    "cost" REAL,
    "retailPrice" REAL NOT NULL,
    "category" TEXT,
    "forNewCarts" BOOLEAN NOT NULL DEFAULT true,
    "forUsedCarts" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "showOnWebsite" BOOLEAN NOT NULL DEFAULT true,
    "imageUrl" TEXT,
    "commentsInternal" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_stockNumber_key" ON "Inventory"("stockNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_serialNumber_key" ON "Inventory"("serialNumber");

-- CreateIndex
CREATE INDEX "Inventory_status_idx" ON "Inventory"("status");

-- CreateIndex
CREATE INDEX "Inventory_brand_idx" ON "Inventory"("brand");

-- CreateIndex
CREATE INDEX "InventoryImage_inventoryId_idx" ON "InventoryImage"("inventoryId");

-- CreateIndex
CREATE INDEX "Customer_lastName_idx" ON "Customer"("lastName");

-- CreateIndex
CREATE UNIQUE INDEX "Sale_inventoryId_key" ON "Sale"("inventoryId");

-- CreateIndex
CREATE INDEX "Sale_dateSold_idx" ON "Sale"("dateSold");

-- CreateIndex
CREATE UNIQUE INDEX "Accessory_partNumber_key" ON "Accessory"("partNumber");

-- CreateIndex
CREATE INDEX "Accessory_category_idx" ON "Accessory"("category");
