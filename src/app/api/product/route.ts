import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";
import { type NextRequest } from "next/server";
import { Category } from "../../../../generated/prisma";


export async function POST(request: Request) {
  const body = await request.json();
  const category = body.category;

  if (request.headers.get("API_KEY") !== process.env.API_KEY) {
    return new Response(JSON.stringify({ error: "Invalid API Key" }), {
      status: 401,
    });
  }

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


  const newProduct = await prisma.product.create({
    data: {
      id: uuidv4(),
      category,
      description: body.description || null,
      product_name: body.product_name,
      profile_id: profile.id,
      image_url: body.image_url || null,
      audio_url: body.audio_url || null,
      video_url: body.video_url || null,
    },
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
