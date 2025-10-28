"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Image 
          src="/logo.png" 
          alt="Logo do Movimento da Mulher Trabalhadora Rural de Sergipe" 
          height={32} 
          width={32} 
        />
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/nossa-historia"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/nossa-historia" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Nossas Histórias
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
      </nav>
    </div>
  );
}
