"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetAllStories } from "@/hooks/use-get-all-stories";

const PLACEHOLDER_IMAGE = "/images/stories/placeholder.png";

export default function StoriesPage() {
  const { data: stories, isLoading } = useGetAllStories();

  return (
    <main
      className="max-w-6xl mx-auto px-6 py-16"
      aria-labelledby="site-title"
    >
      <header className="mb-14 text-center">
        <h1
          id="site-title"
          className="text-4xl font-bold text-gray-900 mb-4 leading-tight"
        >
          Nossas Histórias
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Conheça a história das mulheres que constroem os seus territórios e o nosso movimento!
        </p>
      </header>

      {isLoading ? (
        <section
          aria-label="Carregando histórias"
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden animate-pulse"
            >
              <div className="w-full aspect-[4/3] bg-gray-200" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-2/3" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-4/5" />
                <div className="h-10 bg-gray-200 rounded w-full mt-4" />
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section
          aria-label="Lista de histórias"
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stories?.map((story) => {
            const imageUrl = story.media[0]?.media.url ?? PLACEHOLDER_IMAGE;

            return (
              <article
                key={story.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col focus-within:ring-4 focus-within:ring-blue-300"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={imageUrl}
                    alt={`Foto de ${story.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                    {story.name}
                  </h2>

                  <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                    {story.description}
                  </p>

                  <Link
                    href={`/nossas-historias/${story.slug}`}
                    className="inline-block w-full bg-purple-700 text-white text-center py-2.5 rounded-lg font-medium hover:bg-purple-700 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                    aria-label={`Saiba mais sobre ${story.name}`}
                  >
                    Saiba mais
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}
