import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Search, ChefHat } from "lucide-react";
import Link from "next/link";
import { Recipe } from "@/types/recipe";
import { formatMinutes, formatRecipeDifficulty } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface RecipeGridProps {
  recipes: Recipe[];
  isLoading: boolean;
  searchQuery?: string;
  onClearSearch?: () => void;
}

export function RecipeGrid({
  recipes,
  isLoading,
  searchQuery,
  onClearSearch,
}: RecipeGridProps) {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          {!!searchQuery
            ? `Resultados para "${searchQuery}"`
            : "Todas as Receitas"}
        </h2>
        <p className="text-muted-foreground text-lg">
          {searchQuery
            ? `${recipes.length} receita${
                recipes.length !== 1 ? "s" : ""
              } encontrada${recipes.length !== 1 ? "s" : ""}`
            : "Explore nossa coleção completa de receitas brasileiras"}
        </p>
      </div>

      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <div className="relative h-48">
                <Skeleton className="w-full h-full" />
                <div className="absolute top-3 left-3">
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                <div className="absolute top-3 right-3">
                  <Skeleton className="h-7 w-12 rounded-full" />
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : recipes.length === 0 ? (
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
            {searchQuery ? (
              <Search className="h-10 w-10 text-muted-foreground" />
            ) : (
              <ChefHat className="h-10 w-10 text-muted-foreground" />
            )}
          </div>

          {searchQuery ? (
            <>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nenhuma receita encontrada
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Não encontramos receitas para {`"${searchQuery}"`}. Tente buscar
                por outros ingredientes ou categorias.
              </p>
              {onClearSearch && (
                <Button onClick={onClearSearch} variant="outline">
                  Limpar busca
                </Button>
              )}
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nenhuma receita disponível
              </h3>
              <p className="text-muted-foreground">
                Não há receitas para mostrar no momento.
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`/nossas-receitas/${recipe.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border hover:border-primary/30 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={recipe.media[0].media.url || "/placeholder.svg"}
                    alt={recipe.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {recipe.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                    {recipe.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>
                          {formatMinutes(recipe.cooking_time_in_minutes)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{recipe.number_of_servings}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {formatRecipeDifficulty(recipe.difficulty)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
