import { StoryCategory } from "@prisma/client";

export type Region = ({
  id: string;
  name: string;
})
export type storyCategory = StoryCategory;

export type StoryMedia = ({
    media: {
        url: string;
    }; } & {
        storyId: string;
        mediaId: string;
    })

export interface Story {
  id: string;
  title: string;
  name: string;
  description: string;
  slug: string;
  content: string;
  category: StoryCategory;
  region: Region;
  media: StoryMedia[];
}
 