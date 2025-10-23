"use client";

import { StoryDetail } from "@/components/story-detail";
import { useGetStoryById } from "@/hooks/use-get-story-by-id";
import { use } from "react";

interface StoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function StoryPage({ params }: StoryPageProps) {
  const { id } = use(params);

  const { data: story, isLoading } = useGetStoryById({ id });

  return <StoryDetail story={story} isLoading={isLoading} />;
}