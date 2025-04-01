import path from "path";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import { type NextRequest } from "next/server";
import { Category, type Prisma } from "../../../../generated/prisma";

import { saveFile } from "@/utils/saveFile";

export async function POST(request: Request) {
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

  if (!formData.get("product_name")) {
    return new Response(JSON.stringify({ error: "Product name is required" }), {
      status: 400,
    });
  }

  if (!formData.get("phone_number")) {
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

  const profile = await prisma.profile.findUnique({
    where: {
      phone_number: (
        formData.get("phone_number") as FormDataEntryValue
      ).toString(),
    },
  });

  if (!profile) {
    return new Response(JSON.stringify({ error: "Profile not found" }), {
      status: 404,
    });
  }

  const data: Prisma.ProductCreateManyInput = {
    id: uuidv4(),
    category,
    description: formData.get("description")?.toString() || null,
    product_name: (
      formData.get("product_name") as FormDataEntryValue
    ).toString(),
    profile_id: profile.id,
  };

  if (productImage) {
    try {
      const productImagePath = path.join(
        process.cwd(),
        `/public/images/${productImage.name}`
      );
      console.log("productImagePath: ", productImagePath);

      saveFile(productImage, productImagePath);
      data.img_path = `/images/${productImage.name}`;
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
      data.audio_path = `/audio/${productAudio.name}`;
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
      data.video_path = `/video/${productVideo.name}`;
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error", stack: error }),
        { status: 500 }
      );
    }
  }

  const newProduct = await prisma.product.create({
    data,
  });

  return new Response(
    JSON.stringify({
      message: "Product created successfully",
      data: newProduct,
    }),
    { status: 201 }
  );
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const phone_number = searchParams.get("phone_number");
  const product_id = searchParams.get("product_id");

  if (request.headers.get("API_KEY") !== process.env.API_KEY) {
    return new Response(JSON.stringify({ error: "Invalid API Key" }), {
      status: 401,
    });
  }

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
    where: { id: product_id as string },
  });

  return new Response(JSON.stringify({ data: product }), { status: 200 });
}
