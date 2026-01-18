# API

Base: `/api/*` (route handlers do Next.js)

## Auth

Todas as rotas exigem header `API_KEY`, exceto:
- `GET /api/email`
- `GET /api/whatsapp`

Middleware: `src/middleware.ts`

## Formato de resposta

- Sucesso: JSON, 200/201
- Erro: `{ "error": "Mensagem" }` com 4xx/5xx

## Endpoints

### Profile

- `POST /api/profile`
  - Body: `{ "phone_number": string, "name": string, "social_name"?: string, "instagram"?: string }`
  - Cria perfil, rejeita `phone_number` duplicado.

- `GET /api/profile/{phone_number}`
  - Retorna perfil pelo telefone.

- `PUT /api/profile/{phone_number}`
  - Body parcial: `{ name?, social_name?, instagram? }`
  - Atualiza perfil.

- `DELETE /api/profile/{phone_number}`
  - Remove perfil.

### Product

- `POST /api/product`
  - Body:
    ```json
    {
      "product_name": "string",
      "phone_number": "string",
      "category": "AGRICOLA | ARTESANATO | PROCESSADO",
      "description": "string?",
      "price": 123.45,
      "media": [{ "url": "string", "media_type": "IMAGE | AUDIO | VIDEO" }]
    }
    ```
  - Valida obrigatorios, categoria e preco.

- `GET /api/product?phone_number=...`
  - Lista produtos do perfil.

- `GET /api/product?product_id=...`
  - Retorna produto por id.

- `PUT /api/product/{product_id}`
  - Body parcial.
  - Suporta `replace_media`.

- `DELETE /api/product/{product_id}`
  - Remove produto.

- `DELETE /api/product/{product_id}/{media_id}`
  - Remove midia.

### Recipe

- `POST /api/recipe`
  - Body:
    ```json
    {
      "title": "string",
      "description": "string",
      "phone_number": "string",
      "difficulty": "EASY | INTERMEDIARY | HARD",
      "preparation_time_in_minutes": 10,
      "cooking_time_in_minutes": 20,
      "number_of_servings": 4,
      "ingredients": ["string"],
      "steps": [{ "step_number": 1, "instruction": "string" }],
      "media": [{ "url": "string", "media_type": "IMAGE | AUDIO | VIDEO" }]
    }
    ```
  - Valida campos numericos, ingredientes e passos.

- `GET /api/recipe?phone_number=...`
  - Lista receitas do perfil.

- `GET /api/recipe?recipe_id=...`
  - Retorna receita por id.

- `PUT /api/recipe/{recipe_id}`
  - Body parcial.
  - Suporta `replace_media`.
  - Passos fazem merge por `step_number`.

- `DELETE /api/recipe/{recipe_id}`
  - Remove receita.

- `DELETE /api/recipe/{recipe_id}/{media_id}`
  - Remove midia.

### WhatsApp redirect

- `GET /api/whatsapp?product={productId}`
- `GET /api/whatsapp?profile={profileId}`

Monta URL `wa.me` com o telefone do perfil e redireciona.

### Email redirect

- `GET /api/email?subject=...`

Redireciona para `mailto:` usando `siteConfig.mail`.

### Transcricao de audio

- `POST /api/transcription`
  - Body: `{ "url": "https://...", "language"?: "pt" }`
  - Usa Groq Whisper `whisper-large-v3-turbo`.

## Exemplos

### Profile

Criar:
```bash
curl -X POST http://localhost:3000/api/profile \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{
    "phone_number": "+557999999999",
    "name": "Maria das Dores",
    "social_name": "Dona Maria",
    "instagram": "@mariadasdores"
  }'
```
Resposta:
```json
{
  "message": "Profile created successfully",
  "data": {
    "id": "uuid",
    "name": "Maria das Dores",
    "phone_number": "+557999999999",
    "social_name": "Dona Maria",
    "instagram": "@mariadasdores"
  }
}
```

Buscar por telefone:
```bash
curl http://localhost:3000/api/profile/%2B557999999999 \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "profile": { "id": "uuid", "name": "Maria das Dores", "phone_number": "+557999999999" } }
```

Atualizar:
```bash
curl -X PUT http://localhost:3000/api/profile/%2B557999999999 \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{ "instagram": "@maria_mmtr" }'
```
Resposta:
```json
{
  "message": "Profile edited with successfully",
  "data": { "id": "uuid", "instagram": "@maria_mmtr" }
}
```

Deletar:
```bash
curl -X DELETE http://localhost:3000/api/profile/%2B557999999999 \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "message": "Profile deleted successfully" }
```

### Product

Criar:
```bash
curl -X POST http://localhost:3000/api/product \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{
    "product_name": "Geleia de caju",
    "phone_number": "+557999999999",
    "category": "PROCESSADO",
    "description": "Artesanal",
    "price": 25,
    "media": [{ "url": "https://example.com/geleia.jpg", "media_type": "IMAGE" }]
  }'
```
Resposta:
```json
{
  "message": "Product created successfully",
  "data": {
    "id": "uuid",
    "product_name": "Geleia de caju",
    "category": "PROCESSADO",
    "profile_id": "uuid",
    "media": [{ "id": "uuid", "url": "https://example.com/geleia.jpg", "media_type": "IMAGE" }]
  }
}
```

Listar por telefone:
```bash
curl "http://localhost:3000/api/product?phone_number=%2B557999999999" \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "data": [{ "id": "uuid", "product_name": "Geleia de caju" }] }
```

Buscar por id:
```bash
curl "http://localhost:3000/api/product?product_id=PRODUCT_ID" \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "data": { "id": "PRODUCT_ID", "product_name": "Geleia de caju" } }
```

Atualizar:
```bash
curl -X PUT http://localhost:3000/api/product/PRODUCT_ID \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{ "price": 30, "replace_media": true, "media": [] }'
```
Resposta:
```json
{ "message": "Product successfully updated", "data": { "id": "PRODUCT_ID" }, "added_media_count": 0 }
```

Deletar produto:
```bash
curl -X DELETE http://localhost:3000/api/product/PRODUCT_ID \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "message": "Product deleted successfully" }
```

Deletar midia:
```bash
curl -X DELETE http://localhost:3000/api/product/PRODUCT_ID/MEDIA_ID \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "message": "Media deleted successfully" }
```

### Recipe

Criar:
```bash
curl -X POST http://localhost:3000/api/recipe \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{
    "title": "Bolo de macaxeira",
    "description": "Receita tradicional",
    "phone_number": "+557999999999",
    "difficulty": "EASY",
    "preparation_time_in_minutes": 20,
    "cooking_time_in_minutes": 40,
    "number_of_servings": 8,
    "ingredients": ["macaxeira", "acucar"],
    "steps": [{ "step_number": 1, "instruction": "Misture tudo." }],
    "media": [{ "url": "https://example.com/bolo.jpg", "media_type": "IMAGE" }]
  }'
```
Resposta:
```json
{
  "message": "Recipe created successfully",
  "data": { "id": "uuid", "title": "Bolo de macaxeira", "media": [{ "id": "uuid" }] }
}
```

Listar por telefone:
```bash
curl "http://localhost:3000/api/recipe?phone_number=%2B557999999999" \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "data": [{ "id": "uuid", "title": "Bolo de macaxeira" }] }
```

Buscar por id:
```bash
curl "http://localhost:3000/api/recipe?recipe_id=RECIPE_ID" \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "data": { "id": "RECIPE_ID", "title": "Bolo de macaxeira" } }
```

Atualizar:
```bash
curl -X PUT http://localhost:3000/api/recipe/RECIPE_ID \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{ "difficulty": "INTERMEDIARY", "steps": [{ "step_number": 1, "instruction": "Atualizado." }] }'
```
Resposta:
```json
{ "message": "Recipe successfully updated", "data": { "id": "RECIPE_ID" }, "added_media_count": 0 }
```

Deletar receita:
```bash
curl -X DELETE http://localhost:3000/api/recipe/RECIPE_ID \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "message": "Recipe deleted successfully" }
```

Deletar midia:
```bash
curl -X DELETE http://localhost:3000/api/recipe/RECIPE_ID/MEDIA_ID \
  -H "API_KEY: $API_KEY"
```
Resposta:
```json
{ "message": "Media deleted successfully" }
```

### WhatsApp redirect

```bash
curl -I "http://localhost:3000/api/whatsapp?product=PRODUCT_ID"
```
Resposta:
```
HTTP/1.1 307 Temporary Redirect
Location: https://wa.me/557999999999?text=Ol%C3%A1%21%20Estou%20interessado%28a%29...
```

### Email redirect

```bash
curl -I "http://localhost:3000/api/email?subject=Contato"
```
Resposta:
```
HTTP/1.1 307 Temporary Redirect
Location: mailto:mulheresruraisse@gmail.com?subject=Contato
```

### Transcricao de audio

```bash
curl -X POST http://localhost:3000/api/transcription \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{ "url": "https://example.com/audio.mp3", "language": "pt" }'
```
Resposta:
```json
{
  "message": "Audio transcribed successfully",
  "data": { "text": "..." }
}
```

Metodo nao permitido:
```bash
curl http://localhost:3000/api/transcription
```
Resposta:
```json
{ "error": "Method not allowed. Use POST instead." }
```
