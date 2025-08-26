"use client";

import { ProductGrid } from "@/components/product-grid";
import { ProductFilters } from "@/components/product-filters";
import { SearchBar } from "@/components/search-bar";
import { useGetAllProducts } from "@/hooks/use-get-all-products";
import { useSearchParams } from "next/navigation";
import { Tag } from "@/components/tag";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ImageIcon } from "lucide-react";
import { HomeIcon } from "@/components/home-icon";
import Link from "next/link";


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
        <div></div>
        <div className="grid grid-cols-2 gap-30 place-items-center justify-center w-fit mx-auto ">
           <Link href="/nosso-espaco"><HomeIcon text="Nosso Espaço"></HomeIcon></Link>       
          <Link href="/nossa-historia"><HomeIcon text="Nossas Histórias"></HomeIcon></Link> 
          <Link href="/nossa-producao"><HomeIcon text="Nossa Produção"></HomeIcon></Link> 
         <Link href="/nossas-receitas"><HomeIcon text="Nossas Receitas"></HomeIcon></Link> 
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
