# Data Model (Prisma)

File: `prisma/schema.prisma`

## ER diagram

```mermaid
erDiagram
  Profile ||--o{ Product : produces
  Profile ||--o{ Recipe : creates
  Product ||--o{ ProductMedia : has
  Recipe ||--o{ RecipeMedia : has
  Story ||--o{ StoryMedia : has
  Media ||--o{ ProductMedia : links
  Media ||--o{ RecipeMedia : links
  Media ||--o{ StoryMedia : links
  Recipe ||--o{ RecipeStep : steps
  Region ||--o{ Story : region
  StoryCategory ||--o{ Story : category

  Profile {
    String id
    String name
    String phone_number
    String social_name
    String instagram
  }
  Product {
    String id
    String product_name
    String description
    Decimal price
    Category category
    String profile_id
  }
  Recipe {
    String id
    String title
    String description
    Int preparation_time_in_minutes
    Int cooking_time_in_minutes
    Int number_of_servings
    RecipeDifficulty difficulty
    Json ingredients
    DateTime created_at
    DateTime updated_at
    String profile_id
  }
  RecipeStep {
    Int id
    Int step_number
    String instruction
    String recipe_id
  }
  Story {
    String id
    String title
    String name
    String description
    String content
    String slug
    String regionId
    String storyCategoryId
  }
  StoryCategory {
    String id
    String title
  }
  Region {
    String id
    String name
  }
  Media {
    String id
    String url
    MediaType media_type
  }
  ProductMedia {
    String productId
    String mediaId
  }
  RecipeMedia {
    String recipeId
    String mediaId
  }
  StoryMedia {
    String storyId
    String mediaId
  }
```

## Core models

### Profile
- id: String (UUID)
- name: String
- phone_number: String (unique)
- social_name: String?
- instagram: String?
- relations: products, recipes

### Product
- id: String (UUID)
- product_name: String
- description: String?
- price: Decimal?
- category: Category (enum)
- profile_id: String (FK -> Profile)
- relations: media (via ProductMedia)

### Recipe
- id: String (UUID)
- title, description: String
- preparation_time_in_minutes, cooking_time_in_minutes: Int
- number_of_servings: Int
- difficulty: RecipeDifficulty (enum)
- ingredients: Json (array stored as JSON)
- created_at, updated_at: DateTime
- profile_id: String (FK -> Profile)
- relations: steps (RecipeStep), media (via RecipeMedia)

### RecipeStep
- id: Int (autoincrement)
- step_number: Int
- instruction: String
- recipe_id: String (FK -> Recipe)

### Story
- id: String (UUID)
- title, name, description, content: String
- slug: String (unique)
- regionId: String (FK -> Region)
- storyCategoryId: String (FK -> StoryCategory)
- relations: media (via StoryMedia)

### StoryCategory
- id: String (UUID)
- title: String
- relations: stories

### Region
- id: String (UUID)
- name: String
- relations: stories

### Media
- id: String (UUID)
- url: String
- media_type: MediaType (enum)
- relations: ProductMedia, RecipeMedia, StoryMedia

## Join tables

- ProductMedia (productId + mediaId)
- RecipeMedia (recipeId + mediaId)
- StoryMedia (storyId + mediaId)

## Enums

- Category: AGRICOLA | ARTESANATO | PROCESSADO
- MediaType: AUDIO | IMAGE | VIDEO
- RecipeDifficulty: EASY | INTERMEDIARY | HARD

## Notes

- All FKs use cascade delete.
- Decimal values (price) must be serialized to number for client use.
