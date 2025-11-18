import {  PrismaClient, StoryCategory, MediaType } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';



const storiesData = [{
      id: "1",
      title: "Venha o que vier, mas eu estou sempre sorrindo",
      name: "Rosa - Rosivania Bezerra Dias de Farias",
      description: "Nada é mais contagiante que um sorriso, nos faz bem encontrar pessoas felizes. Esse é o convite para conhecer um pedaço da história de vida de Rosa, ou Rosivania Bezerra dias de Farias, 58 anos, mãe de três filhos, duas netas, e dona de risadas soltas que contagia quem está ao redor. Doceira de mão cheia, nos conta que herdou o gosto pela cozinha de sua mãe, também excelente cozinheira, com especialidade para comidas típicas Alagoana. Hoje vive dividida entre Sergipe e Alagoas.", 
      content: "Rosa é uma pessoa amigueira, sorridente, rio com o vento. Adoro fazer amizade, conhecer pessoas, interagir. E estou sempre feliz. Venha o que vier, mas eu estou sempre sorrindo. E Tenho três filhos, o Jefferson foi o primeiro depois do Jefferson veio a Aline, depois o Jonathan, que é uma benção, ele é filho do coração. Mas que eu amo da mesma forma, não tem diferença. E são minhas três joias raras. E agora duas netas que Deus me deu de presente agora. A Alice e a Maya. Sou agricultora e faço e vendo doces e salgados. Também vendo roupas, trabalho com vendas. E sempre estou buscando uma ajuda financeira, porque depois que a gente se aposenta é aquela quantia contada. E agradecer a Deus por ter. Mas a gente tem que sempre estar buscando, trabalhando para ter uma rendinha, não só depender daquele salariozinho.",
      category: StoryCategory.INSPIRADORA,
      regionId: "1",
      mediaUrl: "/images/logo.png",    
    },
  ];
  export async function seedStories(prisma) {
    for (const story of storiesData) {
      await prisma.story.upsert({
        where: { id: story.id },
        update: {},
        create: {
          id: story.id,
          title: story.title,
          name: story.name,
          description: story.description,
          content: story.content,
          category: story.category,
          regionId: story.regionId,
          media: {
            create: {
              media: {
              create: {
                id: uuidv4(),
                media_type: MediaType.IMAGE,
                url: story.mediaUrl,
              }
            }
            },
          },
        },
      });
    }
    const allStories = await prisma.story.findMany();
    console.log('Story model fields:', prisma._dmmf?.modelMap?.Story?.fields.map(f => f.name));
    return allStories;   
  }
