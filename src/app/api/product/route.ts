import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import { type NextRequest } from "next/server";
import { Category, MediaType } from "@prisma/client";

interface MediaItem {
  url: string;
  media_type: MediaType;
}

export async function POST(request: Request) {
  const body = await request.json();
  const category = body.category;
  const media: MediaItem[] = body.media || [];

  // Validate required fields
  if (!body.product_name) {
    return new Response(JSON.stringify({ error: "Product name is required" }), {
      status: 400,
    });
  }

  if (!body.phone_number) {
    return new Response(JSON.stringify({ error: "Phone number is required" }), {
      status: 400,
    });
  }

  if (!category) {
    return new Response(JSON.stringify({ error: "Category is required" }), {
      status: 400,
    });
  }

  if (
    category !== Category.AGRICOLA &&
    category !== Category.ARTESANATO &&
    category !== Category.PROCESSADO
  ) {
    return new Response(
      JSON.stringify({
        error: `Category must be one of "${Category.AGRICOLA}", "${Category.ARTESANATO}", "${Category.PROCESSADO}"`,
      }),
      { status: 400 }
    );
  }

  // Validate media array if provided
  if (media.length > 0) {
    for (let i = 0; i < media.length; i++) {
      const item = media[i];

      if (!item.url || typeof item.url !== 'string' || item.url.trim() === '') {
        return new Response(
          JSON.stringify({ error: `Media item at index ${i}: url is required and must be a non-empty string` }),
          { status: 400 }
        );
      }

      if (!item.media_type) {
        return new Response(
          JSON.stringify({ error: `Media item at index ${i}: media_type is required` }),
          { status: 400 }
        );
      }

      if (
        item.media_type !== MediaType.IMAGE &&
        item.media_type !== MediaType.AUDIO &&
        item.media_type !== MediaType.VIDEO
      ) {
        return new Response(
          JSON.stringify({
            error: `Media item at index ${i}: media_type must be one of "${MediaType.IMAGE}", "${MediaType.AUDIO}", "${MediaType.VIDEO}"`,
          }),
          { status: 400 }
        );
      }
    }
  }

  // Verify profile exists
  const profile = await prisma.profile.findUnique({
    where: {
      phone_number: body.phone_number,
    },
  });

  if (!profile) {
    return new Response(JSON.stringify({ error: "Profile not found" }), {
      status: 404,
    });
  }

  try {
    // Use transaction to ensure atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Create product
      const newProduct = await tx.product.create({
        data: {
          id: uuidv4(),
          category,
          description: body.description || null,
          product_name: body.product_name,
          profile_id: profile.id,
        },
      });

      // Create media entries if provided
      const createdMedia = [];
      for (const mediaItem of media) {
        const newMedia = await tx.media.create({
          data: {
            id: uuidv4(),
            url: mediaItem.url,
            media_type: mediaItem.media_type,
          },
        });

        // Link media to product via junction table
        await tx.productMedia.create({
          data: {
            productId: newProduct.id,
            mediaId: newMedia.id,
          },
        });

        createdMedia.push(newMedia);
      }

      return {
        product: newProduct,
        media: createdMedia,
      };
    });

    return new Response(
      JSON.stringify({
        message: "Product created successfully",
        data: {
          ...result.product,
          media: result.media,
        },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Transaction failed:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create product. Transaction rolled back." }),
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const phone_number = searchParams.get("phone_number");
  const product_id = searchParams.get("product_id");

  if (!phone_number && !product_id) {
    return new Response(
      JSON.stringify({
        error:
          "Enter at least one of the attributes between phone_number and product_id in search params.",
      }),
      { status: 400 }
    );
  }

  if (phone_number) {
    const products = await prisma.product.findMany({
      where: { profile: { phone_number } },
    });

    return new Response(JSON.stringify({ data: products }), { status: 200 });
  }

  const product = await prisma.product.findUnique({
    select: {
      id: true,
      product_name: true,
      description: true,
      category: true,
      profile_id: true,
      media: true
    },
    where: { id: product_id as string },
  });

  return new Response(JSON.stringify({ data: product }), { status: 200 });
}
