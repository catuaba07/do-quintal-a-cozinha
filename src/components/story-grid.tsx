"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Story } from "@/types/story";
import { Skeleton } from "@/components/ui/skeleton";
import { StoryCard } from "@/components/story-card";

interface StoryGridProps {
  stories: Story[];
  isLoading: boolean;
}

export function StoryGrid({ stories, isLoading }: StoryGridProps) {
  return (
    <section aria-label="Lista de histórias">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <div className="relative aspect-[3/4]">
                <Skeleton className="w-full h-full" />
              </div>

              <CardContent className="p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <Skeleton className="h-4 w-1/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : stories.length === 0 ? (
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
            <BookOpen className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Nenhuma história disponível
          </h3>
          <p className="text-muted-foreground">
            Não há histórias para mostrar no momento.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}
    </section>
  );
}
