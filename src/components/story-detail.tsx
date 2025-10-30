"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Story } from "@/types/story";
import { Cooking } from "@/components/cooking";


interface StoryDetailProps {
  story: Story | null | undefined;
    isLoading: boolean;
}

export function StoryDetail({ story, isLoading }: StoryDetailProps) { 
    if (isLoading) {   
    return <Cooking />;
    }
    if (!story) {
    return <div>História não encontrada.</div>;
    }

    return (
    <main className="container-wrapper">
      <div className="container flex flex-col gap-6">
        <Card className="overflow-hidden">
          <div className="relative h-64 md:h-96 w-full">
            {story.media.length > 0 && (
              <Image
                src={story.media[0].media.url}
                alt={story.name}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-4">{story.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{story.description}</p>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}  
