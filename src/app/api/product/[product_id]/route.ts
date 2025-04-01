import { prisma } from "@/lib/prisma";
import { saveFile } from "@/utils/saveFile";
import { Category } from "../../../../../generated/prisma";
import path from "path";

type params = { params: Promise<{ product_id: string }> };
export async function PUT(request: Request, { params }: params) {
  const { product_id } = await params;
  const formData = await request.formData();
  const productImage = formData.get("product_image") as File;
  const productAudio = formData.get("product_audio") as File;
  const productVideo = formData.get("product_video") as File;

  const category = formData.get("category");

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

  if (formData.get("product_name")) {
    product.product_name = (
      formData.get("product_name") as FormDataEntryValue
    ).toString();
  }

  if (formData.get("description")) {
    product.description = (
      formData.get("description") as FormDataEntryValue
    ).toString();
  }

  if (productImage) {
    try {
      const productImagePath = path.join(
        process.cwd(),
        `/public/images/${productImage.name}`
      );

      saveFile(productImage, productImagePath);
      product.img_path = `/images/${productImage.name}`;
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error", stack: error }),
        { status: 500 }
      );
    }
  }

  if (productAudio) {
    try {
      const productAudioPath = path.join(
        process.cwd(),
        `/public/audio/${productAudio.name}`
      );

      saveFile(productAudio, productAudioPath);
      product.audio_path = `/audio/${productAudio.name}`;
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error", stack: error }),
        { status: 500 }
      );
    }
  }

  if (productVideo) {
    try {
      const productVideoPath = path.join(
        process.cwd(),
        `/public/video/${productVideo.name}`
      );

      saveFile(productVideo, productVideoPath);
      product.video_path = `/video/${productVideo.name}`;
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error", stack: error }),
        { status: 500 }
      );
    }
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
