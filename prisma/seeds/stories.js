import pkg from '@prisma/client';
const { MediaType, StoryCategory } = pkg;
import { v4 as uuidv4 } from 'uuid';

export const storiesData = [
  {
  id: "1",
  title: "Venha o que vier, mas eu estou sempre sorrindo",
  name: "Rosa — Rosivania Bezerra Dias de Farias",
  description: "Doceira, agricultora e mulher sempre sorridente que vive entre Sergipe e Alagoas. Mantém tradições culinárias herdadas da mãe e fortalece sua renda com doces gourmet.",
  slug: "rosa",
  storyCategoryId: "INSPIRADORA",
  regionId: "ARA",
  mediaUrl: "/images/rosa.png",
  content: `
  <div class="flex flex-col items-center mb-10">
    <img 
      src="/images/rosa.png" 
      alt="Foto de Rosa — Rosivania Bezerra Dias de Farias" 
      class=" w-full max-w-xl rounded-xl shadow-md object-cover"/>
  </div>
  <p>
    Nada é mais contagiante que um sorriso, e esse é o convite para conhecer a história de Rosa, ou Rosivania Farias, 58 anos, mãe de três filhos e duas netas. Dona de risadas soltas que contagiam quem está ao redor, divide sua vida entre Sergipe e Alagoas.
  </p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">
    Doceira de mão cheia, conta que herdou o gosto pela cozinha de sua mãe, cozinheira experiente com especialidade em comidas típicas alagoanas. também
excelente cozinheira, com especialidade para comidas típicas Alagoana. Hoje vive dividida entre Sergipe e Alagoas.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sobre si mesma</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">
    “Rosa é uma pessoa amigueira, sorridente, rio com o vento. Adoro fazer amizade, conhecer pessoas, interagir. E estou sempre feliz. Venha o que vier, mas eu estou sempre sorrindo. E tenho três filhos, o Jefferson foi o primeiro depois do Jefferson veio a Aline, depois o Jonathan, que é uma benção, ele é filho do coração. Mas que eu amo da mesma forma, não tem diferença. E são minhas três joias raras. E agora duas netas que Deus me deu de presente agora. A Alice e a Maya. 
    Sou agricultora e faço e vendo doces e salgados. Também vendo roupas, trabalho com vendas. E sempre estou buscando uma ajuda financeira, porque depois que a gente se aposenta é aquela quantia contada. E agradecer a Deus por ter. Mas a gente tem que sempre estar buscando, trabalhando para ter uma rendinha, não só depender daquele salariozinho.”</p>
  <h2>MMTR</h2>
  <p>Quando eu cheguei aqui, em Sergipe, que sou alagoana, mas nunca tinha participado de nada desses projetos. Quando cheguei aqui em Sergipe, conheci Madalena. E através de Madalena, foi que me engajei nesses projetos. Tive conhecimento do MMTR, comecei a participar de reuniões, viajar com elas, conhecer o dia-a-dia de outras pessoas fora. E assim fui me apegando a participar de todas as coisas que surgiam, que pudesse participar, estava presente. E me trouxe conhecimento enorme, eu achava que a mulher era só ser dona de casa, trabalhar, cozinhar, lavar, passar. E através do movimento eu tive outra visão da vida, que não só é isso, a mulher tem seus direitos, tem seus sonhos. E quando a gente busca, tem que batalhar para conseguir as coisas, realizar os sonhos. E através do MMTR a gente tem muitos conhecimentos, sabemos nossos direitos, os deveres. E assim, a cada dia, a cada encontro, a gente vai se aperfeiçoando, ganhando conhecimento. E foi assim que eu aprendi muitas coisas.</p>
  <h2>Uso da tecnologia da comunicação</h2>
  <p>É importante as agricultoras aprenderem a usar as tecnologias porque facilita a vida. Como eu já falei, era difícil expor as coisas da agricultura, o que a gente vendesse, alguma coisa. E hoje em dia, com a tecnologia, as coisas ficam tudo mais fáceis. Você posta, divulga e vender os produtos.</p>
  <h2>Produção/Herança de mãe</h2>
  <p>Estou trabalhando com doces, doces caseiros.
Aprendi a cozinhar, a culinária, com a minha mãe, porque ela cozinhava muito bem e eu peguei o gosto pela cozinha, porque eu estando dentro de uma cozinha, eu me realizo. Então, eu acho que foi isso, pelo gosto pela culinária da minha mãe. Ela fazia muito bem, buchada, que é um prato típico lá de Alagoas, o povo gosta muito, e o doce de mamão com coco.</p>
<h2>Assentamento</h2>
<p>Agora, no Assentamento Vitória da União, está com muito sol e as está plantações estão penando, no momento, tem fruteiras, abacate, laranja, mexerica, quando eu cheguei, aí só tinha, no local, tinha muitas acerolas, só que dono antigo, cortou. Aí a gente foi replantando, aí plantamos as fruteiras que tem hoje, pé de coco, coco d'água, e, como é, bananeira, e as outras coisas que já tinha, que era o abacateiro e o Genipapo. Vejo muitas melhoras, o calçamento, que facilitou a vida das pessoas, por não ter as estradas. Melhoraram muito. E cada dia, aos poucos, está melhorando.</p>  
<h2>Adaptações ao clima</h2>
<p>Eu vejo que as chuvas, principalmente esse ano, no tempo da plantação foi pouquinha, mas depois ela já chegou. Então, o tempo está mudando.</p>
<h2>Divisão de tarefas</h2>
<p>Eu faço tudo em casa, costumo fazer tudo. Os filhos só levantam, forram a cama e pronto. Mas as outras coisas eu tenho mania de fazer tudo só. Eu não gosto muito de botar eles para fazer, mas eles sabem como são os deveres deles e sempre que pode ajuda.</p>
<h2>Venda no aplicativo</h2>
<p>Então, quero sim. Vou achar os meus produtos que eu estou vendendo agora, os meus doces gourmet. A comunidade já comprou, e gostam. Ultimamente eu estou fazendo doce gourmet, que é o doce de leite saborizado com morango, ameixa, geleia de maracujá, geleia de abacaxi. Então, eu estou fazendo agora esses doces. São fáceis. Você faz o doce batido e depois você saboriza com a geleia.</p>
<h2>Território</h2>
<p>Quando a gente vem para um lugar morar, que a gente encontra pessoas boas, encontrar amigas, fazer amizade. sempre tem aquela motivação de continuar naquele lugar, para crescer com aquelas pessoas, buscar sempre as melhoras para a nossa comunidade, participar das coisas, principalmente das coisas da igreja, das coisas que Deus nos propõe a cada dia, que é servir ao nosso próximo. <strong>E estar sempre engajada em todas as coisas que surgem, buscando dar o melhor para a nossa comunidade”</strong>.</p>
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
    mediaUrl: "/images/ivanilde.png",
  content: `
  <div class="flex flex-col items-center mb-10">
    <img 
      src="/images/ivanilde.png" 
      alt="Foto de Ivanilde" 
      class=" w-full max-w-xl rounded-xl shadow-md object-cover"/>
  </div>
  <p>Ivanilde Maria de Souza, tenho 61 anos. Mulher negra, moradora do Povoado São Bento, estrada do Riacho Seco em Salgado (SE). Dona de uma história com tantas perdas familiares desde partida de sua mãe ainda criança, encontrou acolhimento e junto a sua comunidade ajudando com sua herança de benzedeira e construindo sua família unipessoal.
“Sou uma trabalhadora rural. Não tenho terra, mas eu tenho meu quintalzinho aqui, trabalho no meu quintal. Me aposentei como trabalhadora rural. Sou benzedeira, minha avó me ensinou a rezar, ela rezava e fui aprendendo. Participo de vários grupos, da associação, da igreja, da Mãe Rainha. E atualmente sou diretora do MMTR-Ne, esse meu segundo mandato.</p>

<h2>Minha infância.</h2>
 <p>A minha história é muito sofrida, mas superei.  Eu nasci num lugar chamado Pé da Preta em Lagarto (SE). Desse lugar do Pé da Preta, saí de lá na faixa dos dois anos e sete meses. Vim pra um lugar chamado Teiú, lá comecei a me criar. Nesse Teiú a gente viveu na fome. Não tinha o que comer. Pra gente comer, ia pra o riacho  que chamava Alvoroço pescar. E pegava os peixes, milho, torrava e fazia farinha, fubá, para comer com os peixes.  Depois, com dois anos minha mãe engravidou de novo. Dessa gravidez, ela passou muito tempo doente, durante a gravidez. Não tinha médico nessa época. E ela teve uma menina. No parto ficou mais mal ainda que não despachou. A parteira não teve como despachar. Não conseguia. Meu avô, pai de meu pai, morava em Riachão do Dantas, e de lá, ele soube e pegou e veio buscar ela. E levou ela pra Riachão. Ela e minha irmã. Minha avó quando soube mandou vir buscar a gente. Quando chegou lá em Riachão, minha irmã só passou dois dias de nascida. Aí, a gente veio-se embora, junto com a minha avó, que se chamava Ilara, que é a mãe que eu conheci. Eu e meu irmão Rael que ficou se arrastando.  Quando mãe foi liberada pra vir pra casa, viemos. Mãe chegou, como hoje, no Teiú, com três dias, piorou. Eu ia fazer três anos, mas lembro desse dia. Eu estava tomando banho no  riacho Alvoroço, que passava na frente de  minha casa,  e o povo lá, lutando com ela, depois, chegou uma pessoa e me pegou. Minha filha, vamos pra cá.  Quando chegou lá dentro, a mãe me pediu um beijo.  Meu avô, a mãe do meu pai, que me falou tudinho isso. Aí, me pegaram e me baixaram perto dela e dei um beijo.  Aí, ali mesmo, foi a despedida. Deus levou ela. Fiquei morando com minha avó, a mãe do meu pai, Ilara. Meu pai não vinha quase em casa ver a gente. Pai não queria que eu estudasse. Não era pra estudar, mãe (avó) dizia, enquanto eu estiver viva, eles vão estudar. Só depois que eu morrer agora, aí você pode fazer o que você quiser com seus filhos, que eu não vou estar, é seu. Aí, continuo estudando no Tanque. Depois do Tanque, minha mãe (avô) adoeceu e faleceu. 
</p>
<h2>Adolescência</h2>
<p>Fui morar no Açu (Lagarto) com meu pai e a madrasta, estava casado com uma mulher chamada Zefa. Foi aí que começou meu inferno, era explorada, tudo que fazia reclamava. Pra roça não prestava, pra dentro de casa não prestava. Era escrava. Tiveram dez filhos e os dez filhos foram todos eu que criei. Trabalhava, mas não pegava o dinheiro. Quem pegava o dinheiro era ela.  E a roupa era duas roupas, uma no couro e uma no arame. Pra de tardezinha tirar aquela do arame e tomar banho e vestir. Para resumir, depois de uma briga feia com ela e meu pai ficou do lado dela, fugir, mas se não fujo, se não fujo de casa tinha sido estuprada pelo irmão dela, comecei a contar e ela disse que era mentira o irmão contou que era mentira. Vim morar no Treze, também em Lagarto com uma tia, Judite era irmã da minha avó Ilara, aí fiquei na casa da tia Judite, quando eu tinha uns 20 anos, Deus levou. E desta forma vim morar no São Bento, Salgado.  Fiquei trabalhando de doméstica em Aracaju, mãe Luzia me deu um terreno, um chão de casa lá embaixo (no povoado), mas tio Joãozinho lá embaixo não dar certo e em conversa com os filhos me deu esse chão, onde construir minha casa, eu não os amigos, construir através de mutirão, muitas pessoas ajudaram, agradeço a Deus primeiramente e abençoe todas as pessoas que me ajudaram e ainda que vem me ajudando uma palavra até com uma palavra. 
</p>
<h2>O Movimento</h2>
<p> Minha história com Movimento, começa depois que estou aqui no São Bento, foi através de Izaldira, ela me chamou pra cozinhar, eu e Marta, nesta etapa de cozinha então a Marta ficava brincando vai se aposentar como cozinheira, depois fui participando de outros momentos e foi uma superação, de cozinheira passei diretora, estou diretora do MMTR-NE pela segunda vez. Vim tendo espaço para contar histórias, comecei a escutar as outras e foi como uma terapia e fui superando principalmente medo de falar. 
</p>
<h2>Tecnologia</h2> 
<p>Muita coisa a gente que é agricultora precisa saber de tecnologia. Temos condições de mostrar que estamos aprendendo tudo, tanto ver a gente aprender. Apostar na nossa capacidade. </p>
<h2>Quintal</h2>
<p>Meu quintalzinho de lado a minha roça é pouca, mas suficiente para mim, planto, minhas cebolinhas, meus coentrinhos, meus tomatinhos, aqui no quintalzinho. Meus chás de remédio. Também faço crochê.</p>
<h2>Minha casa </h2>
<p>Era uma casinha pequena com um quarto e um banheiro. Cresci mais a casa, graças a Deus, mais um espaço, e meu quintalzinho que tem tudo. O que me motiva aqui é porque aqui é muito calmo, e gosto muito daqui, do meu território aqui. Acho calmo, gosto muito daqui”. </p>
`
},
// ------------------------------------------------------------------
  {
    id: "3",
    title: "Eu posso servir a alguém",
    name: "Maria Renilde de Santana",
    description:"Eu posso servir a alguém Maria Renilde de  Santana, 69 anos. povoado Matatas, Salgado (SE) de cor parda, mãe de sete filhos e viúva duas vezes, ela  anos relata vida de muito trabalho desde criança, da  dor pela perda trágica dos seus, mas sem perder a alegria e disposição de trabalhar, viver em comunidade e servindo a quem a procura, está nas rodas de mulheres. Orgulhosa do seu roçado cheio de fruteiras e de vida.",
    slug: "renilde",
    storyCategoryId: "INSPIRADORA",
    regionId: "ARA",
    mediaUrl: "/images/renilde.png",
  content: `<div class="flex flex-col items-center mb-10">
    <img 
      src="/images/renilde.png" 
      alt="Foto de Maria Renilde de Santana" 
      class=" w-full max-w-xl rounded-xl shadow-md object-cover"/>
  </div>
  <p>”O povo daqui me conhece bem, tem quarenta e dois anos que moro aqui, sou amiga de todo mundo aqui graças a Deus, não tenho inimigos  porque eu posso servir a alguém.</p>
  <p>Participo da Associação da comunidade dos grupos. Eu morava em Poço Verde (SE) mas com vinte e sete anos eu vim pra cá e estou aqui. Vai ser bom as pessoas conhecerem minha história.</p>
  <p>Desde criança,  dos meus dez anos, trabalhava com meus pais na roça, trabalhavam muito. Depois, quando eu tinha dezesseis anos, me casei.</p>
  <p>Já fui trabalhar com  meus pais e meu marido na  roça. Depois disso, com vinte e quatro anos, perdi meu marido. Os cigarros mataram, na minha casa. Balearam ele, levei pra hospital em Salvador, passou um mês e oito dias sofrendo.</p>
  <p>Fiquei grávida, com quatro meses de grávida. Meu filho nasceu, graças a Deus, com todo o sofrimento, ele nasceu. Fiquei com três filhos, dois já tinham nascidos e um na barriga e fui vivendo.</p>
  <p>Três anos depois  me casei outra vez e vim embora pra cá. Tá com quarenta anos que eu moro aqui. Aqui, graças a Deus, fui vivendo, trabalhei muito. Além dos três filhos que vieram comigo tive mais quatro, então tive sete filhos. Agora está com três anos que o marido morreu, e estou viúva outra vez. Duas vezes.</p>
  <p>Trabalhei muito aqui, ainda hoje faço umas besteirinhas,  mais cansada, com dores nos braços, nas pernas, mas tô indo Meu filho ia pra feira em São Cristóvão (SE) vender as coisa, às vezes eu ia junto, mas três, quatro vezes,  mas também mataram meu filho lá, outra dor. Depois disso nunca mais fui lá</p>
  <h2>O MMTR</h2>
  <p>As meninas daqui que participam, me levavam e   fiquei gostando, depois, saí, comecei a não ir. Agora vou só para igreja aqui. Estou cansada.</p>
  <h2>Minha roça</h2>
  <p>Minha roça aqui mesmo na Matatas, a minha terra era  lá no sertão (Poço Verde) mas lá era muito seco. Mas sempre tinha um inverninho,  a gente fazia muita plantação de milho, feijão, batata, amendoim, mandioca, tudo que a gente fazia lá.</p>
  <p>Depois eu vim embora pra cá e a gente ficava fazendo a mesma coisa. O meu marido mesmo aqui plantava muita macaxeira. Plantava roça de milho, feijão, batata. O terreno aqui é pouco, não chega a três tarefas, então plantava aqui e plantava no terreno do vizinho. No meu terreno tenho macaxeira, tem banana, tem jenipapo, tem mandioca, milho, feijão, abacate, tem laranja, tem caju, tem coco e tem mangueira.</p>
  <h2>Acesso as TICs</h2>
  <p>Não uso muito essas coisas da internet ( redes sociais)  porque eu não sei ler.  Mas uso telefone e tenho WI-FI. Eu procuro muita coisa no telefone, vejo muita coisa. Sem saber ler,</p>
  <p>eu entendo um bocado de coisa, mas não leio porque eu não sei ler,  procuro as minhas coisas e eu assisto, porque pra eu ler mesmo, eu não sei ler.</p>
  <h2>As sementes.</h2>
  <p>A gente pegava as frutas que a gente comia, plantava e nascia. As laranjas a gente comprava pra plantar. E a maioria foi nascida aí dentro. Os coqueiros foram plantados também.</p>
  <p>No verão a gente não faz plantação porque é muito quente essas coisas dão no inverno, em tempos de chuva.</p>
  <h2>Tarefas</h2>
  <p>Em casa por enquanto faço tudo, mas já estou cansada e pensando em procurar  uma pessoa para me ajudar. Já trabalhei muito. Trabalhei muito pra criar meus  filhos. Quando eu cheguei pra aqui, eu tinha uns 27 anos.</p>
  <p>Gostei daqui. E pra eu sair daqui mesmo só quando Deus quiser, na horinha dele, eu vou”.</p>
  
  `},
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
