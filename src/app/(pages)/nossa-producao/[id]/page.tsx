"use client";

import { useGetProductById } from "@/hooks/use-get-product-by-id";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function Page({ params }: Props) {
  const { id } = use(params);
  const { data, isLoading } = useGetProductById({ id });

  if (isLoading) {
    return <div>carregando...</div>;
  }

  if (!data) {
    return (
      <main className="container-wrapper">
        <div className="container flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Produto não encontrado</h1>
          <Link
            href="/nossa-producao"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Voltar para a Nossa Produção
          </Link>
        </div>
      </main>
    );
  }

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
          <div className="flex flex-col gap-4">
            <div className="p-4 border border-orange-500">
              <div className="relative aspect-square">
                <Image
                  src={data?.image_url || "/placeholder.svg"}
                  alt={data?.product_name || ""}
                  width={100}
                  height={100}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="relative aspect-square">
              <Image
                src={data?.image_url || "/placeholder.svg"}
                alt={data?.product_name || ""}
                width={500}
                height={500}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">{data?.product_name}</h1>
            <div>
              <div className="inline text-[#e49bd3] border border-[#e49bd3] rounded-[8px] py-[5.5px] px-2">
                <p className="inline text-base/[0]">Artesanato</p>
              </div>
            </div>
            <div>
              <p>{data?.description}</p>
            </div>
            <div>
              <div className="font-semibold text-base">
                R$ {Math.floor(Math.random() * 600).toFixed(2)}
              </div>
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </main>
  );
}
