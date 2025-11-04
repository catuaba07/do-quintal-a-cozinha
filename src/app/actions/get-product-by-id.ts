"use server";

import { prisma } from "@/lib/prisma";

interface Options {
  id: string
}

export async function getProductById(options: Options) {
  const product = await prisma.product.findUnique({
    select: {
      id: true,
      product_name: true,
      description: true,
      price: true,
      category: true,
      profile: {
        select: {
          name: true,
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

  if (!product) {
    return null;
  }

  // Convert Decimal to number for client component serialization
  return {
    ...product,
    price: product.price ? Number(product.price) : null
  };
}
