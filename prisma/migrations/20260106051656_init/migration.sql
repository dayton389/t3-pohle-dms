-- CreateTable
CREATE TABLE "GolfCart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "basePrice" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Part" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "InstalledPart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "installedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "chargedPrice" REAL NOT NULL,
    "cartId" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    CONSTRAINT "InstalledPart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "GolfCart" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "InstalledPart_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Part_sku_key" ON "Part"("sku");
