"use client";

import { ProductGrid } from "@/components/product-grid";
import { ProductFilters } from "@/components/product-filters";
import { SearchBar } from "@/components/search-bar";
import { useGetAllProducts } from "@/hooks/use-get-all-products";
import { useSearchParams } from "next/navigation";
import { Tag } from "@/components/tag";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@mui/material";
import { CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const categories = searchParams.getAll("categories");
  const price = searchParams.getAll("price");

  const { data, isLoading } = useGetAllProducts({
    search: search ?? undefined,
    categories: categories.length > 0 ? categories : undefined,
    price: price.length > 0 ? price : undefined,
  });

  return (
    <main className="container-wrapper">
      <div className="container flex flex-col gap-6">
        <Carousel>
          <CarouselContent>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselPrevious/>
            <CarouselNext/>
          </CarouselContent>
        </Carousel>
        <div className="space-y-4">
          <Tag text="Destaques" caption="" />
        </div>
        <div></div><div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 place-items-center">
          <Card className="w-full max-w-lg h-36">
            <CardContent className="flex gap-4 items-center">
              <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-gray-500" />
              </div>
              <div className="text-lg font-medium text-gray-800">Nosso Espaço</div>
            </CardContent>
          </Card>
           <Card className="w-full max-w-lg h-36">
            <CardContent className="flex items-center gap-4">
              <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-gray-500" />
              </div>
              <div className="text-lg font-medium text-gray-800">Nossas Histórias</div>
            </CardContent>
          </Card>
           <Card className="w-full max-w-lg h-36">
            <CardContent className="flex items-center gap-4">
              <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-gray-500" />
              </div>
              <div className="text-lg font-medium text-gray-800">Nossa Produção</div>
            </CardContent>
          </Card>
           <Card className="w-full max-w-lg h-36">
            <CardContent className="flex items-center gap-4">
              <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-gray-500" />
              </div>
              <div className="text-lg font-medium text-gray-800">Nossas Receitas</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}


//  <SearchBar />
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="md:w-64 flex-shrink-0">
//             <ProductFilters />
//           </div>
//           <div className="flex-1">
//             <ProductGrid products={data ?? []} isLoading={isLoading} />
//           </div>
//         </div>
