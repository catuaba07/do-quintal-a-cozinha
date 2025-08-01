import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import { MediaType } from "@prisma/client";

export async function POST(request: Request) {
  const body = await request.json();
  const mediaType = body.media_type;

  if (!body.url) {
    return new Response(JSON.stringify({ error: "Url is required" }), {
      status: 400,
    });
  }

  if (!mediaType) {
    return new Response(JSON.stringify({ error: "MediaType is required" }), {
      status: 400,
    });
  }

  if (
    mediaType !== MediaType.AUDIO &&
    mediaType !== MediaType.IMAGE &&
    mediaType !== MediaType.VIDEO
  ) {
    return new Response(
      JSON.stringify({
        error: `MediaType must be one of "${MediaType.AUDIO}", "${MediaType.IMAGE}", "${MediaType.VIDEO}"`,
      }),
      { status: 400 }
    );
  }

  const product = await prisma.product.findUnique({
    where: {
      id: body.product_id,
    },
  });

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }


  const newMedia = await prisma.media.create({
    data: {
      id: uuidv4(),
      media_type: mediaType,
      url: body.url,
      productId: product.id
    },
  });

  return new Response(
    JSON.stringify({
      message: "Media added successfully",
      data: newMedia,
    }),
    { status: 201 }
  );
}