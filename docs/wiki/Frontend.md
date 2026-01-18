# Frontend

## App Router pages

- Home: `src/app/(pages)/page.tsx`
- Sections:
  - `src/app/(pages)/nossa-producao/page.tsx`
  - `src/app/(pages)/nossas-receitas/page.tsx`
  - `src/app/(pages)/nossas-historias/page.tsx`
  - `src/app/(pages)/nosso-espaco/page.tsx`
  - `src/app/(pages)/onde-estamos/page.tsx`
  - `src/app/(pages)/sobre/page.tsx`
- Detail pages:
  - Product: `src/app/(pages)/nossa-producao/[id]/page.tsx`
  - Recipe: `src/app/(pages)/nossas-receitas/[id]/page.tsx`
  - Story: `src/app/(pages)/nossas-historias/[slug]/page.tsx`

## Data fetching pattern

- Page uses a React Query hook (e.g. `useGetAllProducts`).
- Hook calls a server action (e.g. `getAllProducts`).
- Server action executes Prisma queries.

Files:
- Hooks: `src/hooks/*`
- Actions: `src/app/actions/*`

## UI components

- Product listing: `src/components/product-grid.tsx`, `src/components/product-card.tsx`
- Recipe listing/detail: `src/components/recipe-grid.tsx`, `src/components/recipe-detail.tsx`
- Story detail: `src/components/nossas-historias/story-detail-client.tsx`
- Common: `src/components/page-header`, `src/components/ui/*`

## Notes

- Client components are marked with "use client".
- Loading states use Skeleton components.
- Media lightbox for products/recipes uses `src/components/image-lightbox.tsx`.
