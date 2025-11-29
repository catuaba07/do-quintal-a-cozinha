"use client";

import { Cooking } from '@/components/cooking';
import { useGetStoryBySlug } from "@/hooks/use-get-story-by-slug";
import StoryDetail from "@/components/nossas-historias/story-detail-client";
import { use } from "react";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = 'force-static';

export default function StoryPage({ params }: StoryPageProps) {
  const { slug } = use(params);
  const { data: story } = useGetStoryBySlug({ slug });
  
  if (!story) {
     return <Cooking />;
    }

  return <StoryDetail story={story} />;
}
