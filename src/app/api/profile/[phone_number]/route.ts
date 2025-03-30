import { prisma } from "@/lib/prisma";

type params = { params: Promise<{ phone_number: string }> };
export async function GET(request: Request, { params }: params) {
  const { phone_number } = await params;

  const profile = await prisma.profile.findUnique({ where: { phone_number } });

  if (!profile) {
    return new Response(JSON.stringify({ error: "Profile not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify({ profile }), { status: 200 });
}
