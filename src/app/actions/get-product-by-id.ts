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
      image_url: true,
      category: true,
      audio_url: true,
      video_url: true,
      profile: {
        select: {
          name: true,
          phone_number: true,
          social_name: true,
          instagram: true,
        },
      }
    },
    where: {
      id: options.id
    }
  });

  return products
}
