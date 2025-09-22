import { prisma } from "@/lib/prisma";

type params = { params: Promise<{ product_id: string; media_id: string }> };
export async function DELETE(request: Request, { params }: params) {
  const { product_id, media_id } = await params;

  const product = await prisma.product.findUnique({
    where: { id: product_id },
  });

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  const media = await prisma.media.findUnique({ where: { id: media_id } })

  if (!media) {
    return new Response(JSON.stringify({ error: "Media not found" }), {
      status: 404,
    });
  }

  await prisma.media.delete({ where: { id: media_id } });

  return new Response(
    JSON.stringify({ message: "Media deleted successfully" }),
    { status: 200 }
  );
}