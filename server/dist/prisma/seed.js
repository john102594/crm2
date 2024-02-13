"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
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
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map