"use server";

import { prisma } from "@/lib/prisma";
import { Category } from "@prisma/client";

interface Options {
  search?: string
  categories?: string[]
  price?: string[]
}

interface CategorySearch {
  in: Category[]
}

interface Where {
  category?: CategorySearch
  product_name?: { contains: string }
}

export async function getAllProducts(options?: Options) {
  const where = {} as Where;
  if (options?.categories) {
    where.category = {
      in: options.categories as Category[]
    }
  }
  if (options?.search) {
    where.product_name = {
      contains: options.search
    }
  }

  const products = await prisma.product.findMany({
    select: {
      id: true,
      product_name: true,
      description: true,
      category: true,
      profile: {
        select: {
          name: true,
          social_name: true,
          instagram: true,
        },
      },
      media: {
        include: {
          media: {
            select: { url: true, media_type: true }
          }
        }
      }
    },
    where
  });

  return products
}
