# Backend

## Server actions

Local: `src/app/actions/*`

Uso: queries para o frontend (listas e detalhes). Sao consumidas por hooks no client.

Principais:
- `get-all-products.ts`
- `get-product-by-id.ts`
- `get-all-recipes.ts`
- `get-recipe-by-id.ts`
- `get-all-stories.ts`
- `get-story-by-slug.ts`

## Rotas API

Local: `src/app/api/*`

Uso: CRUD e integracoes externas (Typebot, WhatsApp, etc.).

- Perfis: `src/app/api/profile/*`
- Produtos: `src/app/api/product/*`
- Receitas: `src/app/api/recipe/*`
- Redirects: `src/app/api/email`, `src/app/api/whatsapp`
- Transcricao: `src/app/api/transcription`

## Middleware

Arquivo: `src/middleware.ts`

- Protege `/api/*` via header `API_KEY`.
- Libera `/api/email` e `/api/whatsapp`.

## Prisma client

Arquivo: `src/lib/prisma.ts`

- Singleton para evitar conexoes duplicadas em dev.
- Usa `DATABASE_URL` para SQLite.

## Validacoes

- Rotas validam campos obrigatorios e enums.
- Itens de midia com URL vazia sao ignorados.
- Steps de receita sao validados e fazem merge por `step_number` no update.
