import { Cooking } from '@/components/cooking';
import { getAllStories, getStoryBySlug } from '@/lib/stories';
import StoryDetail from "@/components/nossas-historias/story-detail-client";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const stories = await getAllStories();
  return stories.map(s => ({ slug: s.id })); 
}

export default async function StoryPage({ params }: { params: { slug: string } }) {
  const story = await getStoryBySlug(params.slug);
  
  if (!story) {
     return <Cooking />;
    }

  return <StoryDetail story={story} />;
}