"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";

import { useGetAllProducts } from "@/hooks/use-get-all-products";
import { ProductGrid } from "@/components/product-grid";
import { PageHeader } from "@/components/page-header";
import { SearchBar } from "@/components/search-bar";

export default function Page() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetAllProducts({});

  const fuse = useMemo(
    () =>
      new Fuse(data ?? [], {
        keys: [
          { name: "product_name", weight: 2 },
          "description",
          "profile.name",
          "profile.social_name",
        ],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [data]
  );

  const filtered = useMemo(() => {
    if (!data) return [];
    if (!search.trim()) return data;
    return fuse.search(search.trim()).map((r) => r.item);
  }, [data, search, fuse]);

  return (
    <>
      <PageHeader
        title="Nossa Produção"
        subtitle="Conheça os produtos cultivados com amor e tradição"
      />
      <div className="container-wrapper">
        <div className="container flex flex-col gap-6 mt-6">
          <SearchBar
            value={search}
            onSubmit={setSearch}
            placeholder="Buscar produtos..."
          />
          <ProductGrid products={filtered} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}
