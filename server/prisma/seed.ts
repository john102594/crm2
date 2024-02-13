// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const product1 = await prisma.product.upsert({
    where: { sku: 'A0010' },
    create: {
      name: 'Telefono',
      sku: 'A0010',
    },
    update: {},
  });
  const product2 = await prisma.product.upsert({
    where: { sku: 'A0011' },
    create: {
      name: 'Telefono2',
      sku: 'A0011',
    },
    update: {},
  });

  console.log({ product1, product2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
