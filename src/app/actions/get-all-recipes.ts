/* eslint-disable */
"use server";

import { prisma } from "@/lib/prisma";

/**
 * Fetches all recipes with optional search filtering.
 * Used by recipe listing page through useGetAllRecipes hook.
 *
 * @param options.search - Text search on recipe title
 * @returns Recipe list with media (excludes ingredients/steps for performance)
 */

interface Options {
  search?: string;
  tags?: string[];
  profileId?: string;
}

export async function getAllRecipes(options?: Options) {
  const where: any = {};

  if (options?.search) {
    where.title = {
      contains: options.search,
    };
  }

  // Select only fields needed for list view (no ingredients/steps for better performance)
  return await prisma.recipe.findMany({
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
    },
    where,
  });
}