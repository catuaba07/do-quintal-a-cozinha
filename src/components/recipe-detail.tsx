import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMinutes, formatRecipeDifficulty } from "@/lib/utils";
import { RecipeWithDetail } from "@/types/recipe";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface RecipeDetailProps {
  recipe: RecipeWithDetail;
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  const ingredients: String[] = Array.from(JSON.parse(recipe.ingredients));

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/nossas-receitas"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para receitas
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
                {recipe.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {recipe.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Preparo:</span>{" "}
                    {formatMinutes(recipe.preparation_time_in_minutes)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Cozimento:</span>{" "}
                    {formatMinutes(recipe.cooking_time_in_minutes)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Serve:</span>{" "}
                    {recipe.number_of_servings} pessoas
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  {formatRecipeDifficulty(recipe.difficulty)}
                </Badge>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={recipe.media[0].media.url || "/placeholder.svg"}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Modo de Preparo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {recipe.steps
                  .sort((a, b) => a.step_number - b.step_number)
                  .map((step, index) => (
                    <div key={step.step_number} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step_number}
                      </div>
                      <p className="text-foreground leading-relaxed pt-1">
                        {step.instruction}
                      </p>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-16">
              <CardHeader>
                <CardTitle className="text-xl">Ingredientes</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Para {recipe.number_of_servings} porções
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
