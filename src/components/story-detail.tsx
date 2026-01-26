"use client";

import Image from "next/image";
import { notFound } from "next/navigation"
import { Story } from "@/types/story";

interface StoryDetailProps {
  story: Story | null | undefined;
    isLoading: boolean;
}

/**
 * Full story view with image, title, description, and HTML content.
 */
export function StoryDetail({ story, isLoading }: StoryDetailProps) {
  if (isLoading) return (<p>Carregando</p>);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-6">{story.title ?? story.name}</h2>
      <div className="h-[44rem] max-w-lg cover relative flex-shrink-0">
      	<Image
      	  src={story.media[0]?.media.url || "/placeholder.svg"}
      	  alt={story.name}
      	  fill
      	  style={{ objectFit: "cover" }}
      	  className="rounded-lg"
      	  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
      	/>
      </div>
      <div className="story-detail-content"
      dangerouslySetInnerHTML={{ __html: story.content }}
      />
    </main>
  );
}
