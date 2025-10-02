import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.upsert({
    where: { id: '20' },
    update: {},
    create: {
      id: '20',
      name: 'Chaqueta de invierno',
      price: 60000,
      image: 'assets/products/chaqueta.jpeg',
      catalogId: 'ropa',
      porcentPromo: 10,
      promo: true,
    },
  });

  console.log('Seed finished');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
