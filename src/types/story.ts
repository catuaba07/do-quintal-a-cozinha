import { Category } from "@prisma/client";

export type Region = ({
  id: string;
  name: string;
})

export type StoryMedia = ({
    media: {
        url: string;
    }; } & {
        storyId: string;
        mediaId: string;
    })

export interface Story {
  id: string;
  name: string;
  description: string;
  content: string;
  category: Category;
  region: Region;
  media: StoryMedia[];
}
