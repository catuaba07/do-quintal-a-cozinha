# Frontend

## Paginas App Router

- Home: `src/app/(pages)/page.tsx`
- Secoes:
  - `src/app/(pages)/nossa-producao/page.tsx`
  - `src/app/(pages)/nossas-receitas/page.tsx`
  - `src/app/(pages)/nossas-historias/page.tsx`
  - `src/app/(pages)/nosso-espaco/page.tsx`
  - `src/app/(pages)/onde-estamos/page.tsx`
  - `src/app/(pages)/sobre/page.tsx`
- Detalhes:
  - Produto: `src/app/(pages)/nossa-producao/[id]/page.tsx`
  - Receita: `src/app/(pages)/nossas-receitas/[id]/page.tsx`
  - Historia: `src/app/(pages)/nossas-historias/[slug]/page.tsx`

## Padrao de busca de dados

- Pagina usa hook do React Query (ex: `useGetAllProducts`).
- Hook chama server action (ex: `getAllProducts`).
- Server action faz query no Prisma.

Arquivos:
- Hooks: `src/hooks/*`
- Actions: `src/app/actions/*`

## Componentes de UI

- Listagem de produtos: `src/components/product-grid.tsx`, `src/components/product-card.tsx`
- Listagem e detalhe de receitas: `src/components/recipe-grid.tsx`, `src/components/recipe-detail.tsx`
- Detalhe de historias: `src/components/nossas-historias/story-detail-client.tsx`
- Comuns: `src/components/page-header`, `src/components/ui/*`

## Notas

- Componentes client tem "use client".
- Loading usa Skeleton.
- Lightbox de midia em `src/components/image-lightbox.tsx`.
