// data/stories.fixture.ts
import { Story } from "@/types/story"

export const storiesFixture: Story[] = [
  {
    id: "1",
    name: "Maria do Mar",
    description:
      "Artesã que mantém viva a tradição das rendas e bordados à beira-mar no Nordeste.",
    content: `
      Maria do Mar aprendeu a arte das rendas com sua avó, aos 9 anos de idade.
      Hoje, ela ensina jovens da comunidade a transformar o artesanato em fonte de renda,
      mantendo viva uma tradição centenária. Seu trabalho foi reconhecido em feiras culturais
      e projetos de empreendedorismo feminino.
    `,
    category: "Cultura",
    region: "Salgado",
    media: ["/images/maria.jpg"],
  },
  {
    id: "2",
    name: "Raimunda das Cores",
    description:
      "Artista visual que transforma muros em telas vivas nas periferias de São Paulo.",
    content: `
      Raimunda das Cores cresceu na Zona Leste de São Paulo e encontrou na arte urbana uma forma
      de expressão e resistência. Suas obras abordam questões sociais, raciais e ambientais,
      e já foram exibidas em galerias e eventos de arte urbana pelo Brasil.
    `,
    category: "Arte",
    region: "Aracaju",
    media: ["/videos/raimunda.mp4"],
  },
  {
    id: "3",
    name: "Ana Tech",
    description:
      "Programadora e líder comunitária que ensina meninas do interior a programar.",
    content: `
      Ana iniciou sua trajetória no mundo da tecnologia com um computador doado por uma ONG.
      Hoje, lidera oficinas de programação em escolas públicas e projetos que unem
      tecnologia e inclusão social. Seu foco é inspirar meninas a seguirem carreiras em STEM.
    `,
    category: "Tecnologia",
    region: "Sergipe",
    media: ["/images/ana.jpg"],
  },
]
