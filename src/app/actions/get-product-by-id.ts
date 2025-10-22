"use server";

import { prisma } from "@/lib/prisma";

interface Options {
  id: string
}

export async function getProductById(options: Options) {
  const products = await prisma.product.findUnique({
    select: {
      id: true,
      product_name: true,
      description: true,
      category: true,
      profile: {
        select: {
          name: true,
          phone_number: true,
          social_name: true,
          instagram: true,
        },
      },
      media: { include: { media: { select: { url: true, media_type: true } } } }
    },
    where: {
      id: options.id
    }
  });

  return products
}
