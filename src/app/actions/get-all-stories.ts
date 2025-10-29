"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

interface Options {
  search?: string;
  tags?: string[];
  profileId?: string;
}

export async function getAllStories(options?: Options) {
    const where: Prisma.StoryWhereInput = {}; 
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
            category: true,
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