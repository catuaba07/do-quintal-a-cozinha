"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";

import { PageHeader } from "@/components/page-header";
import { SearchBar } from "@/components/search-bar";
import { FeaturedRecipes } from "@/components/featured-recipes";
import { RecipeGrid } from "@/components/recipe-grid";
import { useGetAllRecipes } from "@/hooks/use-get-all-recipes";

/**
 * Recipe listing page with search bar, featured section, and full recipe grid.
 */
export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: recipes, isLoading } = useGetAllRecipes();

  const fuse = useMemo(
    () =>
      new Fuse(recipes ?? [], {
        keys: [
          { name: "title", weight: 2 },
          "description",
        ],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [recipes]
  );

  const filtered = useMemo(() => {
    if (!recipes) return [];
    if (!searchQuery.trim()) return recipes;
    return fuse.search(searchQuery.trim()).map((r) => r.item);
  }, [recipes, searchQuery, fuse]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Nossas Receitas"
        subtitle="Descubra receitas autênticas e deliciosas da culinária brasileira"
      />
      <main className="container mx-auto px-4 py-8">
        <SearchBar
          value={searchQuery}
          onSubmit={setSearchQuery}
          placeholder="Buscar receitas..."
        />
        {!!searchQuery ? (
          <RecipeGrid
            recipes={filtered}
            isLoading={isLoading}
            searchQuery={searchQuery}
            onClearSearch={handleClearSearch}
          />
        ) : (
          <>
            <FeaturedRecipes
              featured_recipes={filtered.slice(0, 2)}
              isLoading={isLoading}
            />
            <RecipeGrid recipes={filtered.slice(2)} isLoading={isLoading} />
          </>
        )}
      </main>
    </div>
  );
}
