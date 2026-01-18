# Dev e Deploy

## Requisitos

- Node.js 18+
- npm

## Instalar

```bash
npm install
```

## Rodar local

```bash
npm run dev
```

## Banco (Prisma + SQLite)

```bash
npx prisma migrate dev
npx prisma generate
npx prisma studio
```

## Variaveis de ambiente

Crie `.env.local`:

```
DATABASE_URL="file:./prisma/dev.db"
API_KEY="your-api-key"
GROQ_API_KEY="your-groq-key"
```

Notas:
- `API_KEY` protege a maioria das rotas `/api/*`.
- `GROQ_API_KEY` e obrigatoria em `/api/transcription`.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run storybook`

## Docker (opcional)

```bash
docker compose -f docker/desenvolvimento/docker-compose.yml up -d
```

Servidor: http://localhost:3001
