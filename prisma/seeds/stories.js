import pkg from '@prisma/client';
const { MediaType, StoryCategory } = pkg;
import { v4 as uuidv4 } from 'uuid';

export const storiesData = [
  {
    id: "1",
    title: "Venha o que vier, mas eu estou sempre sorrindo",
    name: "Rosa — Rosivania Bezerra Dias de Farias",
    description:
      "Doceira, agricultora e mulher sempre sorridente que vive entre Sergipe e Alagoas. Mantém tradições culinárias herdadas da mãe e fortalece sua renda com doces gourmet.",
    slug: "rosa",
    storyCategoryId: "INSPIRADORA",
    regionId: "ARA",
    mediaUrl: "/historias/rosa.jpg",
    content:`
  <p>Nada é mais contagiante que um sorriso, e esse é o convite para conhecer a história de Rosa, ou Rosivania Farias, 58 anos, mãe de três filhos e duas netas. Dona de risadas soltas que contagiam quem está ao redor, divide sua vida entre Sergipe e Alagoas.</p>

  <p>Doceira de mão cheia, conta que herdou o gosto pela cozinha de sua mãe, cozinheira experiente com especialidade em comidas típicas alagoanas.</p>

  <h2>Sobre si mesma</h2>
  <p>Rosa se descreve como uma pessoa amigueira, sorridente e sempre feliz. Conta que “ri até com o vento” e que adora conhecer pessoas, interagir e fazer amizades.</p>

  <p>Tem três filhos — Jefferson, Aline e Jonathan (filho do coração) — e duas netas, Alice e Maya, que chama de presentes de Deus.</p>

  <p>Aposentada, complementa sua renda trabalhando com agricultura, fazendo doces, salgados e vendendo roupas.</p>

  <h2>MMTR</h2>
  <p>Sua relação com o MMTR começou quando chegou a Sergipe e conheceu Madalena. A partir daí passou a participar de reuniões, viagens, atividades e formações.</p>

  <p>Através do movimento, percebeu que a vida das mulheres não se resume a ser dona de casa. Aprendeu sobre direitos, deveres, sonhos e protagonismo feminino.</p>

  <h2>Uso de tecnologia</h2>
  <p>Para Rosa, é essencial que agricultoras aprendam a usar tecnologias, pois isso facilita divulgar e vender seus produtos.</p>

  <h2>Produção e herança de mãe</h2>
  <p>Rosa trabalha com doces caseiros e herdou da mãe o gosto pela culinária. Sente-se realizada na cozinha e relembra pratos típicos como buchada e doce de mamão com coco.</p>

  <h2>Assentamento</h2>
  <p>No Assentamento Vitória da União, enfrenta desafios com o clima quente e escassez de chuva. Cultiva fruteiras como abacate, laranja, mexerica, coco e bananeira.</p>

  <p>Percebe melhorias como o calçamento das estradas, que facilitou a vida da comunidade.</p>

  <h2>Divisão de tarefas</h2>
  <p>Em casa, Rosa costuma fazer tudo sozinha. Os filhos ajudam quando podem, mas ela prefere assumir a maior parte das tarefas.</p>

  <h2>Venda no aplicativo</h2>
  <p>Rosa produz doces gourmet — doce de leite batido saborizado com morango, ameixa, maracujá ou abacaxi. A comunidade compra e aprova seus produtos.</p>

  <h2>Território</h2>
  <p>Rosa acredita na importância de viver em um lugar onde se encontra pessoas boas e motivação para crescer em comunidade. Valoriza amizades, igreja e fé.</p>
`
    },

  // ------------------------------------------------------------------

  {
    id: "2",
    title: "Sou benzedeira, minha avó me ensinou",
    name: "Ivanilde Maria de Souza",
    description:"Mulher negra, benzedeira, trabalhadora rural e diretora do MMTR-NE. Superou uma infância marcada por dificuldades e hoje vive no Povoado São Bento, onde planta, benze e participa do movimento.",
    slug: "ivanilde",
    storyCategoryId: "INSPIRADORA",
    regionId: "ARA",
    mediaUrl: "/historias/ivanilde.jpg",
  content: `
  <p>Ivanilde Maria de Souza, 61 anos, é mulher negra, agricultora, benzedeira e diretora do MMTR-NE. Vive no Povoado São Bento, em Sergipe.</p>

  <h2>Infância difícil</h2>
  <p>Perdeu a mãe com quase três anos e foi criada pela avó Ilara. Enfrentou fome e dificuldades severas. A ausência do pai também marcou sua infância.</p>

  <h2>Adolescência</h2>
  <p>Foi morar com o pai e a madrasta, onde enfrentou maus-tratos, violência e exploração. Fugiu para não morrer.</p>

  <p>Mais tarde recebeu ajuda de parentes e conseguiu um novo recomeço ao chegar no Povoado São Bento.</p>

  <h2>Construção da vida</h2>
  <p>Com apoio da comunidade, construiu sua casa por meio de mutirões. Trabalhou em agricultura, plantios, crochê, cozinha e cuidado da casa.</p>

  <h2>Benzimento</h2>
  <p>Aprendeu a benzer com a avó. Usa ervas como hortelã, boldo, alecrim, capim-santo e alfazema para preparar chás, remédios e rezas.</p>

  <h2>Relação com o MMTR</h2>
  <p>Começou ajudando na cozinha do movimento. Aos poucos ganhou confiança, voz e papel de dirigente.</p>

  <p>Participar do MMTR foi sua terapia: aprendeu sobre direitos, autoestima, oratória e superou traumas.</p>

  <h2>Tecnologia e mudança social</h2>
  <p>Acredita que agricultoras precisam aprender tecnologia para divulgar trabalho, vender produtos e registrar a própria história.</p>

  <h2>Território e pertencimento</h2>
  <p>Valoriza a calma do lugar onde vive, o quintal com plantas medicinais e alimentícias e a comunidade que a acolheu.</p>
`
},
];

  export async function seedStories(prisma) {
    for (const story of storiesData) {
      let createdData = {
          id: story.id,
          title: story.title,
          name: story.name,
          description: story.description,
          slug: story.slug,
          content: story.content,
          storyCategory: {
            connect: { id: story.storyCategoryId }
          },
          region: {
            connect: { id: story.regionId }
          },
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
        }
        let updatedData = {
          slug: story.slug,
          title: story.title,
          name: story.name,
          description: story.description,
          content: story.content,
          storyCategory: { connect: { id: story.storyCategoryId } },
          region: { connect: { id: story.regionId } },
        }
      await prisma.story.upsert({
        where: { id: story.id },
        update: updatedData,
        create: createdData,
      });
    }
    const allStories = await prisma.story.findMany();
    console.log('Story model fields:', prisma._dmmf?.modelMap?.Story?.fields.map(f => f.name));
    return allStories;
  }
