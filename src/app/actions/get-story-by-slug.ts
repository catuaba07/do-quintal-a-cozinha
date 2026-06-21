"use server";

import { prisma } from "@/lib/prisma";

/**
 * Fetches story by slug for SEO-friendly URLs and better social sharing.
 */

interface Options {
  slug: string;
}

export async function getStoryBySlug(options: Options) {
    return await prisma.story.findUnique({
        select: {
            id: true,
            name: true,
            title: true,
            description: true,
            slug: true,
	    content: true,
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
            slug: options.slug,
        },
    });
}   
