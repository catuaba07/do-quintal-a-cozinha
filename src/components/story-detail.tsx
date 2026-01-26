"use client";

import { useState } from "react";
import Image from "next/image";
import { Story } from "@/types/story";

interface StoryDetail {
  story: Story;
  isLoading: boolean;
}

export default function StoryDetail({ story, isLoading }: StoryDetail) {
  if (isLoading) return (<p>Carregando</p>);
  if (!story) return notFound();

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
