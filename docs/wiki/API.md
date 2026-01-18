# API

Base: `/api/*` (Next.js route handlers)

## Auth

All API routes require header `API_KEY` except:
- `GET /api/email`
- `GET /api/whatsapp`

Middleware: `src/middleware.ts`

## Common response shape

- Success: JSON payload, 200/201
- Error: `{ "error": "Message" }` with 4xx/5xx

## Endpoints

### Profile

- `POST /api/profile`
  - Body: `{ "phone_number": string, "name": string, "social_name"?: string, "instagram"?: string }`
  - Creates a profile, rejects duplicate phone_number.

- `GET /api/profile/{phone_number}`
  - Returns profile by phone.

- `PUT /api/profile/{phone_number}`
  - Body: partial `{ name?, social_name?, instagram? }`
  - Updates existing profile.

- `DELETE /api/profile/{phone_number}`
  - Deletes profile by phone.

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
  - Validates required fields, category, and price.

- `GET /api/product?phone_number=...`
  - Lists products for a profile.

- `GET /api/product?product_id=...`
  - Returns a product by id.

- `PUT /api/product/{product_id}`
  - Body: partial product fields.
  - Supports `replace_media` boolean.

- `DELETE /api/product/{product_id}`
  - Deletes a product.

- `DELETE /api/product/{product_id}/{media_id}`
  - Deletes a media item.

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
  - Validates numeric fields, ingredients array, and steps ordering.

- `GET /api/recipe?phone_number=...`
  - Lists recipes for a profile.

- `GET /api/recipe?recipe_id=...`
  - Returns a recipe by id.

- `PUT /api/recipe/{recipe_id}`
  - Body: partial recipe fields.
  - Supports `replace_media` boolean.
  - Steps are merged by `step_number` (update if exists, create if missing).

- `DELETE /api/recipe/{recipe_id}`
  - Deletes a recipe.

- `DELETE /api/recipe/{recipe_id}/{media_id}`
  - Deletes a media item.

### WhatsApp redirect

- `GET /api/whatsapp?product={productId}`
- `GET /api/whatsapp?profile={profileId}`

Builds a `wa.me` URL using the profile phone number and redirects.

### Email redirect

- `GET /api/email?subject=...`

Redirects to a `mailto:` URL using `siteConfig.mail`.

### Audio transcription

- `POST /api/transcription`
  - Body: `{ "url": "https://...", "language"?: "pt" }`
  - Uses Groq Whisper `whisper-large-v3-turbo`.

## Examples

### Profile

Create:
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
Response:
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

Get by phone:
```bash
curl http://localhost:3000/api/profile/%2B557999999999 \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "profile": { "id": "uuid", "name": "Maria das Dores", "phone_number": "+557999999999" } }
```

Update:
```bash
curl -X PUT http://localhost:3000/api/profile/%2B557999999999 \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{ "instagram": "@maria_mmtr" }'
```
Response:
```json
{
  "message": "Profile edited with successfully",
  "data": { "id": "uuid", "instagram": "@maria_mmtr" }
}
```

Delete:
```bash
curl -X DELETE http://localhost:3000/api/profile/%2B557999999999 \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "message": "Profile deleted successfully" }
```

### Product

Create:
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
Response:
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

List by profile phone:
```bash
curl "http://localhost:3000/api/product?phone_number=%2B557999999999" \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "data": [{ "id": "uuid", "product_name": "Geleia de caju" }] }
```

Get by id:
```bash
curl "http://localhost:3000/api/product?product_id=PRODUCT_ID" \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "data": { "id": "PRODUCT_ID", "product_name": "Geleia de caju" } }
```

Update:
```bash
curl -X PUT http://localhost:3000/api/product/PRODUCT_ID \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{ "price": 30, "replace_media": true, "media": [] }'
```
Response:
```json
{ "message": "Product successfully updated", "data": { "id": "PRODUCT_ID" }, "added_media_count": 0 }
```

Delete product:
```bash
curl -X DELETE http://localhost:3000/api/product/PRODUCT_ID \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "message": "Product deleted successfully" }
```

Delete product media:
```bash
curl -X DELETE http://localhost:3000/api/product/PRODUCT_ID/MEDIA_ID \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "message": "Media deleted successfully" }
```

### Recipe

Create:
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
Response:
```json
{
  "message": "Recipe created successfully",
  "data": { "id": "uuid", "title": "Bolo de macaxeira", "media": [{ "id": "uuid" }] }
}
```

List by profile phone:
```bash
curl "http://localhost:3000/api/recipe?phone_number=%2B557999999999" \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "data": [{ "id": "uuid", "title": "Bolo de macaxeira" }] }
```

Get by id:
```bash
curl "http://localhost:3000/api/recipe?recipe_id=RECIPE_ID" \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "data": { "id": "RECIPE_ID", "title": "Bolo de macaxeira" } }
```

Update:
```bash
curl -X PUT http://localhost:3000/api/recipe/RECIPE_ID \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{ "difficulty": "INTERMEDIARY", "steps": [{ "step_number": 1, "instruction": "Atualizado." }] }'
```
Response:
```json
{ "message": "Recipe successfully updated", "data": { "id": "RECIPE_ID" }, "added_media_count": 0 }
```

Delete recipe:
```bash
curl -X DELETE http://localhost:3000/api/recipe/RECIPE_ID \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "message": "Recipe deleted successfully" }
```

Delete recipe media:
```bash
curl -X DELETE http://localhost:3000/api/recipe/RECIPE_ID/MEDIA_ID \
  -H "API_KEY: $API_KEY"
```
Response:
```json
{ "message": "Media deleted successfully" }
```

### WhatsApp redirect

```bash
curl -I "http://localhost:3000/api/whatsapp?product=PRODUCT_ID"
```
Response:
```
HTTP/1.1 307 Temporary Redirect
Location: https://wa.me/557999999999?text=Ol%C3%A1%21%20Estou%20interessado%28a%29...
```

### Email redirect

```bash
curl -I "http://localhost:3000/api/email?subject=Contato"
```
Response:
```
HTTP/1.1 307 Temporary Redirect
Location: mailto:mulheresruraisse@gmail.com?subject=Contato
```

### Audio transcription

```bash
curl -X POST http://localhost:3000/api/transcription \
  -H "Content-Type: application/json" \
  -H "API_KEY: $API_KEY" \
  -d '{ "url": "https://example.com/audio.mp3", "language": "pt" }'
```
Response:
```json
{
  "message": "Audio transcribed successfully",
  "data": { "text": "..." }
}
```

Method not allowed:
```bash
curl http://localhost:3000/api/transcription
```
Response:
```json
{ "error": "Method not allowed. Use POST instead." }
```
