"use client";
import { useSearchParams } from "next/navigation";

import { useGetAllProducts } from "@/hooks/use-get-all-products";
import { ProductGrid } from "@/components/product-grid";

export default function Page() {
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
        <div>
          <div className="px-4 py-2 bg-purple-400/95 inline">
            <span className="text-lg font-bold text-white">Nossa Produção</span>
          </div>
          <p className="mt-3">Conheça a nossa produção</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ProductGrid products={data ?? []} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </main>
  );
}
