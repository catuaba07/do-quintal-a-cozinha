export const dynamic = "force-static";

const people = [
  {
    name: "Ivanilde Maria de Souza",
    description: "Benzedeira, trabalhadora rural e diretora do MMTR-NE. Moradora do Povoado São Bento (SE).",
    image: "/images/ivanilde.png",
    href: "/nossas-historias/2", 
  },
  {
    name: "Rosa (Rosivania Farias)",
    description: "Doceira, agricultora e símbolo de alegria. Vive entre Sergipe e Alagoas.",
    image: "/images/rosa.png",
    href: "/nossas-historias/1", 
  },
  {
    name: "Maria Renilde de Santana",
    description:`Maria Renilde de Santana, 69 anos. povoado Matatas, Salgado (SE) de cor parda, mãe de sete filhos e viúva duas vezes, ela nos relata uma vida de muito trabalho desde criança, da dor pela perda trágica dos seus, mas sem perder a alegria e disposição de trabalhar, viver em comunidade e servindo a quem a procura, está nas rodas de mulheres. Orgulhosa do seu roçado cheio de fruteiras e de vida.`, 
    image: "/images/renilde.png",
    href: "/nossas-historias/3", 
  }
];

export default function HomePage() {
  return (
    <main
      className="max-w-6xl mx-auto px-6 py-16"
      aria-labelledby="site-title"
    >
      <header className="mb-14 text-center">
        <h1
          id="site-title"
          className="text-4xl font-bold text-gray-900 mb-4 leading-tight"
        >
          Nossas Histórias
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Conheça a história das mulheres que constroem os seus territórios e o nosso movimento!
        </p>
      </header>
      <section
        aria-label="Lista de histórias"
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {people.map((person) => (
          <article
            key={person.name}
            className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col focus-within:ring-4 focus-within:ring-blue-300"
          >
            {/* Imagem */}
            <img
              src={person.image}
              alt={`Foto de ${person.name}`}
              className="h-96 w-full object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                {person.name}
              </h2>

              <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                {person.description}
              </p>

              <a
                href={person.href}
                className="inline-block w-full bg-blue-600 text-white text-center py-2.5 rounded-lg font-medium hover:bg-blue-700 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                aria-label={`Saiba mais sobre ${person.name}`}
              >
                Saiba mais
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
