import { PrismaClient } from "@prisma/client";
import { seedStories } from "./stories.js";
import { seedProducts } from "./products.js";

const prisma = new PrismaClient();

async function main() {

  await seedStories(prisma);
  const allStories = await prisma.story.findMany();
  console.log(`Seeded stories: ${allStories.length}`);
  
  await seedProducts();
  const allProducts = await prisma.product.findMany();
  console.log(`Seeded products: ${allProducts.length}`);
} 
main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});