"use client";

import { useGetStoryBySlug } from "@/hooks/use-get-story-by-slug";
import StoryDetail from "@/components/nossas-historias/story-detail-client";
import { use } from "react";
import { notFound } from 'next/navigation';

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
