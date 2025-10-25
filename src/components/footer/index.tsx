"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-yellow-400/95 backdrop-blur supports-[backdrop-filter]:bg-yellow-400/60">
      <div className="container-wrapper">
        <div className="container flex flex-col my-4 gap-2 md:gap-4">
          <div className="flex justify-between lg:min-w-[1024px] m-auto flex-col lg:flex-row">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <Image 
                src="/logo.png" 
                alt="Logo do Movimento da Mulher Trabalhadora Rural de Sergipe" 
                height={64} 
                width={64} 
              />
            </Link>
            <div className="flex flex-col gap-2 my-auto">
              <p className="font-bold">{siteConfig.name}</p>
              <p className="font-bold">{siteConfig.mail}</p>
            </div>
            <div className="lg:grid grid-flow-col grid-rows-2 gap-x-8 flex flex-col">
              <Link
                href="/sobre"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/sobre"
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Sobre
              </Link>
              <Link
                href="/nossa-historia"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/nossa-historia"
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Nossa História
              </Link>
              <Link
                href="/onde-estamos"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/onde-estamos"
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Onde Estamos
              </Link>
              <Link
                href="/nossa-producao"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/nossa-producao")
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Nossa Produção
              </Link>
              <Link
                href="/nossas-receitas"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/nossas-receitas")
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Nossas Receitas
              </Link>
              <Link
                href="/nosso-espaco"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/nosso-espaco")
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Nosso Espaço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
