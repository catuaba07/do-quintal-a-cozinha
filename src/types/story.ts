export type StoryMedia = ({
    media: {
        url: string;
    }; } & {
        storyId: string;
        mediaId: string;
    })

export interface Story {
  id: string
  name: string
  description: string
  content: string
  category: string
  region: string
  media: StoryMedia[]
}

export interface StoryWithDetail {
    id: string;
    name: string;
    description: string;
    content: string;
    category: string;
    region: string;
    media: StoryMedia[];
}
