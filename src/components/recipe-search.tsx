"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RecipeSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function RecipeSearch({
  searchQuery,
  onSearchChange,
}: RecipeSearchProps) {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Busque por receitas..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-24 py-6 text-lg rounded-full border-2 border-border focus:border-primary transition-colors"
        />
        <Button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6"
          size="sm"
        >
          Buscar
        </Button>
      </div>
    </div>
  );
}
