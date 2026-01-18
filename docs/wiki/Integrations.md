# Integracoes

## WhatsApp redirect

- Rota: `GET /api/whatsapp?product={id}` ou `?profile={id}`
- Busca o telefone do perfil e redireciona para `https://wa.me/{phone}?text=...`
- Arquivo: `src/app/api/whatsapp/route.ts`

## Email redirect

- Rota: `GET /api/email?subject=...`
- Redireciona para `mailto:{siteConfig.mail}`
- Arquivo: `src/app/api/email/route.ts`

## Transcricao de audio (Groq)

- Rota: `POST /api/transcription`
- Body: `{ url: string, language?: string }`
- Modelo: `whisper-large-v3-turbo`
- Requer `GROQ_API_KEY`
- Arquivo: `src/app/api/transcription/route.ts`

## Typebot (externo)

O projeto espera ingestao via conversas do Typebot e envio para as rotas de API (product, recipe, profile). Detalhes adicionais ficam na wiki/README do projeto.
