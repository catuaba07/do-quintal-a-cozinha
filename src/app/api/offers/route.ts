import { prisma } from "@/lib/prisma"
import { v4 as uuidv4 } from 'uuid';

const categories = ["AGRICOLA", "ARTESANATO", "PROCESSADO"]

export async function POST(request: Request) {
  const body = await request.json()
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type, API_KEY',
  }

  if (request.headers.get('API_KEY') !== process.env.API_KEY) {
    return new Response(JSON.stringify({ error: 'Invalid API Key' }), {
      status: 401,
      headers,
    })
  }

  if (!body.name) {
    return new Response(JSON.stringify({ error: 'Name is required' }), {
      status: 400,
      headers,
    })
  }

  if (!body.phone_number) {
    return new Response(JSON.stringify({ error: 'Phone number is required' }), {
      status: 400,
      headers,
    })
  }

  if (!body.product_name) {
    return new Response(JSON.stringify({ error: 'Product Name is required' }), {
      status: 400,
      headers,
    })
  }

  if (!body.description) {
    return new Response(JSON.stringify({ error: 'Description is required' }), {
      status: 400,
      headers,
    })
  }

  if (!body.category) {
    return new Response(JSON.stringify({ error: 'Category is required' }), {
      status: 400,
      headers,
    })
  }

  if (!categories.includes(body.category)) {
    return new Response(JSON.stringify({ error: 'Category must be one of "AGRICOLA", "ARTESANATO", "PROCESSADO"' }), {
      status: 400,
      headers,
    })
  }

  await prisma.offer.create({
    data: {
      id: uuidv4(),
      name: body.name,
      social_name: body.social_name || null,
      phone_number: body.phone_number,
      instagram: body.instagram || null,
      product_name: body.product_name,
      description: body.description,
      category: body.category,
    },
  })

  return new Response(JSON.stringify({ message: 'Offer created successfully' }), {
    status: 201,
    headers,
  })
}