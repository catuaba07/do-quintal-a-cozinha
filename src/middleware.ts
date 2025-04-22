import { NextRequest } from "next/server"

export const config = {
  matcher: '/api/:path*',
}

export function middleware(request: NextRequest) {
  if (request.headers.get("API_KEY") !== process.env.API_KEY) {
    return new Response(JSON.stringify({ error: "Invalid API Key" }), {
      status: 401,
    });
  }
}