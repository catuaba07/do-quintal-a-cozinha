import { Tag } from "@/components/tag";
import Image from "next/image";

export default function Sobre() {
  return (
    <main className="container-wrapper">
      <div className="container flex flex-col gap-6 py-8">
        <Tag text="Sobre" caption="Conheça nossa história" />
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Um pouco da história...
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Somos um movimento auto organizado de mulheres que constroem o 
                feminismo rural em Sergipe a partir das suas diversas identidades 
                e territórios.
              </p>
              
              <p>
                O nascimento do MMTR-SE está intimamente ligado à luta pela terra 
                no estado de Sergipe. Com o fim da ditadura militar, intensificou-se 
                a discussão sobre os direitos das pessoas. Foi um período efervescente 
                de lutas sociais, especialmente da luta pela terra.
              </p>
              
              <p>
                No estado de Sergipe, a Comissão Pastoral da Terra (CPT) desempenhou 
                um papel importante na mobilização e formação da população rural.
              </p>
              
              <p>
                Podemos dizer, então, que o MMTR-SE teve início, em especial, com a 
                participação das mulheres acampadas e assentadas. Logo em seguida, o 
                movimento foi se expandindo para outras mulheres da agricultura familiar.
              </p>
              
              <p>
                Em 1990, organizou-se o primeiro ato comemorativo do Dia Internacional 
                da Mulher — 8 de março — com a presença da companheira Marlene, do Rio 
                Grande do Norte, que veio representando o MMTR-NE. Assim teve início a 
                organização do movimento no estado.
              </p>
              
              <p className="font-semibold text-purple-600">
                Desde então, as mulheres do MMTR-SE vêm ocupando diversos espaços de 
                participação política.
              </p>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Galeria de Fotos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/mmtr-sobre-1.jpg"
                  alt="Mulheres trabalhadoras rurais do MMTR-SE reunidas em atividade coletiva de organização e formação política"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/mmtr-sobre-2.jpg"
                  alt="Evento do Movimento da Mulher Trabalhadora Rural com participantes em momento de mobilização e debate"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/mmtr-sobre-3.jpg"
                  alt="Mulheres do MMTR-SE em espaço de participação política, demonstrando a atuação do movimento em Sergipe"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/mmtr-sobre-4.jpg"
                  alt="Trabalhadoras rurais em ação de mobilização do MMTR-SE, construindo o feminismo rural a partir de suas identidades e territórios"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
