"use client";

import { useGetStoryBySlug } from "@/hooks/use-get-story-by-slug";
import StoryDetail from "@/components/story-detail";
import { use } from "react";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function StoryPage({ params }: StoryPageProps) {
  const { slug } = use(params);
  const { data: story, isLoading } = useGetStoryBySlug({ slug });
 
  return <StoryDetail story={story} isLoading={isLoading} />;
}
