"use client";

import { RecipeHeader } from "@/components/recipe-header";
import { RecipeSearch } from "@/components/recipe-search";
import { FeaturedRecipes } from "@/components/featured-recipes";
import { RecipeGrid } from "@/components/recipe-grid";
import { useGetAllRecipes } from "@/hooks/use-get-all-recipes";
import { useState } from "react";

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: recipes, isLoading } = useGetAllRecipes({
    search: searchQuery,
  });

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <RecipeHeader />
      <main className="container mx-auto px-4 py-8">
        <RecipeSearch
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        {!!searchQuery ? (
          <RecipeGrid
            recipes={recipes || []}
            isLoading={isLoading}
            searchQuery={searchQuery}
            onClearSearch={handleClearSearch}
          />
        ) : (
          <>
            <FeaturedRecipes
              featured_recipes={recipes ? recipes.slice(0, 2) : []}
              isLoading={isLoading}
            />
            <RecipeGrid
              recipes={recipes ? recipes.slice(2) : []}
              isLoading={isLoading}
            />
          </>
        )}
      </main>
    </div>
  );
}
