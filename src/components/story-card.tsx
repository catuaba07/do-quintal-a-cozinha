import { GridCard } from "@/components/grid-card";
import { MapPin } from "lucide-react";
import { Story } from "@/types/story";

const PLACEHOLDER_IMAGE = "/images/stories/placeholder.png";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <GridCard
      href={`/nossas-historias/${story.slug}`}
      imageUrl={story.media[0]?.media.url || PLACEHOLDER_IMAGE}
      imageAlt={`Foto de ${story.name}`}
      imageHeight="portrait"
    >
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {story.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
        {story.description}
      </p>

      {story.region && (
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{story.region.name}</span>
        </div>
      )}
    </GridCard>
  );
}
