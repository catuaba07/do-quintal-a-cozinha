import { prisma } from "@/lib/prisma";
import { Category } from "@prisma/client";

type params = { params: Promise<{ product_id: string }> };
export async function PUT(request: Request, { params }: params) {
  const { product_id } = await params;
  const body = await request.json();
  const category = body.category;

  if (request.headers.get("API_KEY") !== process.env.API_KEY) {
    return new Response(JSON.stringify({ error: "Invalid API Key" }), {
      status: 401,
    });
  }

  const product = await prisma.product.findUnique({
    where: { id: product_id },
  });

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  if (category) {
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

    product.category = category;
  }

  if (body.product_name) {
    product.product_name = body.product_name
  }

  if (body.description) {
    product.description = body.description
  }

  if (body.image_url) {
    product.image_url = body.image_url
  }

  if (body.audio_url) {
    product.audio_url = body.audio_url
  }

  if (body.video_url) {
    product.video_url = body.video_url
  }

  const editedProduct = await prisma.product.update({
    data: product,
    where: { id: product_id },
  });

  return new Response(
    JSON.stringify({
      message: "Product successfully edited",
      data: editedProduct,
    }),
    { status: 201 }
  );
}
