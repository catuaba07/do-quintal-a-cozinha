/* eslint-disable */
"use server";

import { prisma } from "@/lib/prisma";

interface Options {
  search?: string;
  tags?: string[];
  profileId?: string;
}

export async function getAllStories(options?: Options) {
    const where: any = {}; 
    if (options?.search) {
        where.name = {
            contains: options.search,
        };
    }

    return await prisma.story.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            slug: true,
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
        where,
    });
}   
