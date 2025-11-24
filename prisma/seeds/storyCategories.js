import { v4 as uuidv4 } from 'uuid';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const categoriesData = [
  { id: 'INSPIRADORA', title: 'Inspiradora' },
  { id: 'AUTOBIOGRAFIA', title: 'Autobiografia' },
];

export async function seedStoryCategories(prisma) {
  if (!prisma) throw new Error('Prisma client is required');

  for (const cat of categoriesData) {
    await prisma.storyCategory.upsert({
      where: { id: cat.id },
      update: { title: cat.title },
      create: {
        id: cat.id,
        title: cat.title,
      },
    });
  }

  return prisma.storyCategory.findMany();
}