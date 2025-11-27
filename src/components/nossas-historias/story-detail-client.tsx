"use client";

import { useState } from "react";
import Image from "next/image";

export default function StoryDetail({ story }: { story: any }) {
  const [imgSrc, setImgSrc] = useState(story.media?.[0]?.media?.url || "/placeholder.png");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="w-full mb-10">
        <Image
          src={imgSrc}
          alt={story.name}
          fill
          style={{ objectFit: "cover" }}
          onError={() => setImgSrc("/placeholder.png")} // agora funciona
          className="rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6">{story.title ?? story.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: story.content }} />
    </main>
  );
}