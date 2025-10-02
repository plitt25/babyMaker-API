-- CreateTable
CREATE TABLE "public"."Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "catalogId" TEXT NOT NULL,
    "porcentPromo" INTEGER NOT NULL,
    "promo" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
