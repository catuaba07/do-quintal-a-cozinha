"use client";

import { useState } from "react";
import { ImageLightbox } from "@/components/image-lightbox";
import { Story } from "@/types/story";
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { notFound } from "next/navigation";
import Image from "next/image";

interface StoryDetailProps {
  story: Story | null | undefined;
  isLoading: boolean;
}

/**
 * Full story view with image, title, description, and HTML content.
 */
export default function StoryDetail({ story, isLoading }: StoryDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-4">
            <Skeleton className="h-6 w-32" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-8 space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-2/3" />
            </div>
            <Skeleton className="h-5 w-32" />
          </div>

          <Skeleton className="h-96 w-full rounded-lg" />

          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!story) return notFound();

  const images = story.media.map((m) => ({
    url: m.media.url,
    alt: story.name,
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/nossas-historias"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para histórias
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
              {story.title ?? story.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {story.description}
            </p>

            {story.region && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{story.region.name}</span>
              </div>
            )}
          </div>

          {images.length > 0 && (
            <button
              onClick={() => setLightboxOpen(true)}
              className="relative h-96 rounded-lg overflow-hidden cursor-zoom-in group w-full"
              aria-label="Ver imagem em tamanho completo"
            >
              <Image
                src={images[0].url}
                alt={images[0].alt}
                fill
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </button>
          )}

          <div
            className="story-detail-content"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
        </div>
      </div>

      {images.length > 0 && (
        <ImageLightbox
          images={images}
          initialIndex={0}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
