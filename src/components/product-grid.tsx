"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { $Enums } from "@prisma/client";

interface Profile {
  name: string;
  phone_number: string;
  social_name: string | null;
  instagram: string | null;
}

interface Product {
  id: string;
  product_name: string;
  description: string | null;
  category: $Enums.Category;
  image_url: string | null;
  audio_url: string | null;
  video_url: string | null;
  profile: Profile;
}

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

export function ProductGrid({ products, isLoading }: ProductGridProps) {
  const isMobile = useMobile();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-[300px] bg-muted"></div>
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative aspect-square">
            <Image
              src={product.image_url || "/placeholder.svg"}
              alt={product.product_name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">{product.product_name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {product.description}
            </p>
            <div className="mt-2 text-sm text-muted-foreground">
              Artesã: {product.profile.name}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <div className="font-semibold">
              R$ {Math.floor(Math.random() * (599 + 1)).toFixed(2)}
            </div>
            <Button
              size={isMobile ? "sm" : "default"}
              className="rounded-full bg-green-600 hover:bg-green-700"
              onClick={() => {
                const message = `Olá! Estou interessado(a) no produto: ${product.product_name}`;
                const whatsappUrl = `https://wa.me/${
                  product.profile.phone_number
                }?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              {isMobile ? "" : "WhatsApp"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
