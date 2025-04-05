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

export async function PUT(request: Request, { params }: params) {
  const body = await request.json();
  const { phone_number } = await params;

  const profile = await prisma.profile.findUnique({ where: { phone_number } });

  if (!profile) {
    return new Response(JSON.stringify({ error: "Profile not found" }), {
      status: 404,
    });
  }

  if (body.name) {
    profile.name = body.name;
  }

  if (body.social_name) {
    profile.social_name = body.social_name;
  }

  if (body.instagram) {
    profile.instagram = body.instagram;
  }

  const editedProfile = await prisma.profile.update({
    data: profile,
    where: { phone_number },
  });

  return new Response(
    JSON.stringify({
      message: "Profile edited with successfully",
      data: editedProfile,
    }),
    { status: 201 }
  );
}
