# Integrations

## WhatsApp redirect

- Route: `GET /api/whatsapp?product={id}` or `?profile={id}`
- Behavior: finds the profile phone number and redirects to `https://wa.me/{phone}?text=...`
- File: `src/app/api/whatsapp/route.ts`

## Email redirect

- Route: `GET /api/email?subject=...`
- Behavior: redirects to `mailto:{siteConfig.mail}`
- File: `src/app/api/email/route.ts`

## Audio transcription (Groq)

- Route: `POST /api/transcription`
- Body: `{ url: string, language?: string }`
- Uses Groq Whisper model `whisper-large-v3-turbo`
- Requires `GROQ_API_KEY`
- File: `src/app/api/transcription/route.ts`

## Typebot (external)

The project expects data to be ingested via Typebot conversations and sent to the API endpoints (product, recipe, profile). Details live in project docs/wiki or repository wiki (see README references).
