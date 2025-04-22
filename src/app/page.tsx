"use client";

import { ProductGrid } from "@/components/product-grid";
import { ProductFilters } from "@/components/product-filters";
import { SearchBar } from "@/components/search-bar";
import { useGetAllProducts } from "@/hooks/use-get-all-products";
import { useSearchParams } from "next/navigation";
import {Navbar} from "@/components/navbar";
import { Footer } from "@/components/footer";

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
    <main className="">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="space-y-4">
          <div className="bg-purple-400 pl-1 w-40">
            <h2 className="text-xl font-bold text-zinc-50">
            Nossa Produção
          </h2>
          </div>
          <p className="text-muted-foreground">
            Conheça a produção das mulheres do MMTR-SE!
          </p>
        </div>
        <SearchBar />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64 flex-shrink-0">
            <ProductFilters />
          </div>
          <div className="flex-1">
            <ProductGrid products={data ?? []} isLoading={isLoading} />
          </div>
      </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
