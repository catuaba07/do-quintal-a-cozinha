# Dev and Deploy

## Requirements

- Node.js 18+
- npm

## Install

```bash
npm install
```

## Local dev

```bash
npm run dev
```

## Database (Prisma + SQLite)

```bash
npx prisma migrate dev
npx prisma generate
npx prisma studio
```

## Environment variables

Create `.env.local`:

```
DATABASE_URL="file:./prisma/dev.db"
API_KEY="your-api-key"
GROQ_API_KEY="your-groq-key"
```

Notes:
- `API_KEY` protects most `/api/*` routes (see middleware).
- `GROQ_API_KEY` is required for `/api/transcription`.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run storybook`

## Docker (optional)

```bash
docker compose -f docker/desenvolvimento/docker-compose.yml up -d
```

Dev server: http://localhost:3001
