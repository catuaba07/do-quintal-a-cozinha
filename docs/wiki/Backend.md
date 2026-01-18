# Backend

## Server actions

Location: `src/app/actions/*`

Purpose: read-only queries for the frontend (lists + detail views). These are called by React Query hooks on the client.

Key actions:
- `get-all-products.ts`
- `get-product-by-id.ts`
- `get-all-recipes.ts`
- `get-recipe-by-id.ts`
- `get-all-stories.ts`
- `get-story-by-slug.ts`

## API routes

Location: `src/app/api/*`

Purpose: CRUD endpoints used by integrations (Typebot, WhatsApp, etc.) and admin tools.

- Profiles: `src/app/api/profile/*`
- Products: `src/app/api/product/*`
- Recipes: `src/app/api/recipe/*`
- Email/WhatsApp redirects: `src/app/api/email`, `src/app/api/whatsapp`
- Transcription: `src/app/api/transcription`

## Middleware

File: `src/middleware.ts`

- Protects `/api/*` routes via `API_KEY` header.
- Exempts `/api/email` and `/api/whatsapp`.

## Prisma client

File: `src/lib/prisma.ts`

- Singleton pattern to avoid multiple connections in dev.
- Uses `DATABASE_URL` for SQLite.

## Validation pattern

- API routes validate required fields and enums.
- Media arrays ignore entries with empty URLs.
- Recipe steps are validated and merged by `step_number` on update.
