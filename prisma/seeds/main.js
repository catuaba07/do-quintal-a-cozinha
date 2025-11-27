import { PrismaClient } from "@prisma/client";
import { seedStoryCategories } from "./storyCategories.js";
import { seedStories } from "./stories.js";
import { seedProducts } from "./products.js";
import { seedRegions } from "./regions.js";

const prisma = new PrismaClient();

async function main() {

  await seedRegions(prisma);
  await seedStoryCategories(prisma);
  await seedStories(prisma);
  const allStories = await prisma.story.findMany();
  console.log(`Seeds stories done: ${allStories.length}`);

  await seedProducts(prisma);
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