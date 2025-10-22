"use server";

import { prisma } from "@/lib/prisma";

interface Options {
  id: string;
}

export async function getRecipeById(options: Options) {
  return await prisma.recipe.findUnique({
    select: {
      id: true,
      title: true,
      description: true,
      preparation_time_in_minutes: true,
      number_of_servings: true,
      created_at: true,
      cooking_time_in_minutes: true,
      difficulty: true,
      media: {
        include: {
          media: {
            select: {
              url: true
            },
          },
        },
      },
      ingredients: true,
      steps: {
        select: {
          step_number: true,
          instruction: true
        }
      }
    },
    where: {
      id: options.id,
    },
  });
}