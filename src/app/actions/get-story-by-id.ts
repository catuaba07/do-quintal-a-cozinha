"use server";

import { prisma } from "@/lib/prisma";

interface Options {
  id: string;
}

export async function getStoryById(options: Options) {
    return await prisma.story.findUnique({
        select: {
            id: true,
            name: true,
            description: true,
            content: true,
            storyCategory: true,
            region: true,
            media: {
                include: {
                    media: {
                        select: {
                            url: true
                        }
                    }
                }
            }
        },
        where: {
            id: options.id,
        },
    });
}   