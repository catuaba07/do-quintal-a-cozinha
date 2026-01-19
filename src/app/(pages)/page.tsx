import Image from "next/image";
import { HomeIcon } from "@/components/home-icon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container-wrapper h-full">
      <div className="container flex flex-col h-full py-4 md:py-6 gap-4 md:gap-6">
        <div className="h-150 w-full relative flex-shrink-0">
          <Image
            src="/home-image.webp"
            alt="Foto de grupo de mulheres trabalhadoras rurais do MMTR-SE reunidas em frente a uma casa, segurando faixas e bandeiras que celebram os 30 anos do movimento e a Marcha Mundial das Mulheres"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          />
        </div>
        <nav className="flex-1 flex items-center justify-center min-h-0 py-4 md:py-8" aria-label="Seções do site">
          <h2 className="sr-only">Explore nossas seções</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-30 place-items-center w-fit">
            <Link href="/nosso-espaco">
              <HomeIcon
                title="Nosso Espaço"
                illustrationSrc="/icons/botton-espaco.webp"
                altText="Ilustração de duas mãos se cumprimentando formando um coração, representando o espaço de interação e comunidade do MMTR-SE"
              ></HomeIcon>
            </Link>
            <Link href="/nossas-historias">
              <HomeIcon
                title="Nossas Histórias"
                illustrationSrc="/icons/botton-historias.webp"
                altText="Ilustração de 2 mulheres, representando as histórias das mulheres trabalhadoras rurais"
              ></HomeIcon>
            </Link>
            <Link href="/nossa-producao">
              <HomeIcon
                title="Nossa Produção"
                illustrationSrc="/icons/botton-produtos-plain.webp"
                altText="Ilustração de uma rama de coentro, representando os produtos da agricultura familiar"
              ></HomeIcon>
            </Link>
            <Link href="/nossas-receitas">
              <HomeIcon
                title="Nossas Receitas"
                illustrationSrc="/icons/botton-receitas.webp"
                altText="Ilustração de panela e colher de pau, representando as receitas tradicionais"
              ></HomeIcon>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
