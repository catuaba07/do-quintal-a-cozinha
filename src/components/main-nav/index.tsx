"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Image 
          src="/logo.webp" 
          alt="Logo do Movimento da Mulher Trabalhadora Rural de Sergipe e voltar ao ínicio da página" 
          height={32} 
          width={32} 
        />
      </Link>
	<NavigationMenu className="flex items-center gap-4 text-sm xl:gap-6">
	  <NavigationMenuList>
	    <NavigationMenuItem>
	      <NavigationMenuTrigger>MMTR-SE</NavigationMenuTrigger>
	      <NavigationMenuContent>
	        <NavigationMenuLink
       	            href="/sobre"
       	            className={cn(
       	              "transition-colors hover:text-primary",
       	              pathname === "/sobre" ? "text-foreground font-semibold" : "text-foreground"
       	            )}
       	          >Sobre
	        </NavigationMenuLink>
	        <NavigationMenuLink
       	            href="/onde-estamos"
       	            className={cn(
       	              "transition-colors hover:text-primary",
       	              pathname === "/onde-estamos" ? "text-foreground font-semibold" : "text-foreground"
       	            )}
       	          >
       	            Onde Estamos
		</NavigationMenuLink>
	      </NavigationMenuContent>
	    </NavigationMenuItem>
	    <NavigationMenuItem>
	      <NavigationMenuLink
                 href="/nossas-historias"
                 className={cn(
                   "transition-colors hover:text-primary",
                   pathname?.startsWith("/nossas-historias") ? "text-foreground font-semibold" : "text-foreground"
                 )}
        >
                 Nossas Histórias
	      </NavigationMenuLink>
	    </NavigationMenuItem>
	    <NavigationMenuItem>
	      <NavigationMenuLink
                href="/nossa-producao"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname?.startsWith("/nossa-producao")
                    ? "text-foreground font-semibold"
                    : "text-foreground"
                )}
                >
                Nossa Produção
	      </NavigationMenuLink>
	    </NavigationMenuItem>
	    <NavigationMenuItem>
	      <NavigationMenuLink
                href="/nossas-receitas"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname?.startsWith("/nossas-receitas")
                    ? "text-foreground font-semibold"
                    : "text-foreground"
                )}
                >
                Nossas Receitas
	      </NavigationMenuLink>
	    </NavigationMenuItem>
	    <NavigationMenuItem>
	      <NavigationMenuLink
                href="/nosso-espaco"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname?.startsWith("/nosso-espaco")
                    ? "text-foreground font-semibold"
                    : "text-foreground"
                )}
                >
                Nosso Espaço
	      </NavigationMenuLink>
	    </NavigationMenuItem>
	  </NavigationMenuList>
        </NavigationMenu>

    </div>
  );
}
