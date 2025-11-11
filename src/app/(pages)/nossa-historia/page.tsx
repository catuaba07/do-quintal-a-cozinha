"use client";
import { StoryCard } from "@/components/story-card";
import { useGetAllStories } from "@/hooks/use-get-all-stories";
import { PageHeader } from "@/components/page-header";
import { useState } from "react"; 
export default function OurStoryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: stories, isLoading } = useGetAllStories({
    search: searchQuery,
  }); 
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  } 
  const handleClearSearch = () => {
    setSearchQuery("");
  }
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Nossas Histórias"
        subtitle="Descubra as histórias inspiradoras das mulheres do MMTR-SE"
        backgroundImage="/mmtr-sobre-1.webp"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">  
          <input
            type="text"
            placeholder="Busque por nossas histórias..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full max-w-2xl mx-auto pl-4 pr-4 py-3 text-lg rounded-full border-2 border-border focus:border-primary transition-colors"
          />
        </div>
        <StoryCard
          stories={stories || []}
          isLoading={isLoading}
          searchQuery={searchQuery}
          onClearSearch={handleClearSearch}
        />
      </main>
    </div>
  );
}