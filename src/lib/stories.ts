import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllStories() {
  return prisma.story.findMany({
    orderBy: { id: 'asc' },
    include: { media: { include: { media: true } }, region: true, storyCategory: true },
  });
}

export async function getStoryBySlug(slug: string) {
  return prisma.story.findUnique({
    where: { id: slug },
    include: { media: { include: { media: true } }, region: true, storyCategory: true },
  });
}