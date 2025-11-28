"use client";

import { useState } from "react";
import Image from "next/image";
import { Story } from "@/types/story";

interface StoryDetails {
  story: Story;
}

export default function StoryDetail({ story }: StoryDetails) {
  const [imgSrc, setImgSrc] = useState(story.media?.[0]?.media?.url || "/placeholder.png");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="w-full mb-10">
        <Image
          src={imgSrc}
          alt={story.name}
          fill
          style={{ objectFit: "cover" }}
          onError={() => setImgSrc("/placeholder.png")}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6">{story.title ?? story.name}</h1>
      <div className="story-detail-content"
      dangerouslySetInnerHTML={{ __html: story.content }}
      />
    </main>
  );
}
