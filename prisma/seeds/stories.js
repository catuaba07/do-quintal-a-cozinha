import pkg from '@prisma/client';
const { MediaType } = pkg;
import { v4 as uuidv4 } from 'uuid';

export const storiesData = [
  {
    id: "1",
    title: "Encontrei com Lula, conversei com ele e fiquei feliz",
    name: "Dona Raimunda",
    description:
      "Artesã, agricultora e matriarca da família que vive em Mattas. Segue com a lida e sua vida, sendo inspiração para muitas gerações.",
    slug: "raimunda",
    regionId: "ARA",
    mediaUrl: "/images/stories/raimunda.png",
    content:`
  <p>Quer inspiração? Então vamos conhecer um pouquinho da história de Raimunda Raquel da Cruz, 82 anos, mulher branca, moradora do povoado Matatas em Salgado (SE). Ela nos inspira pela simplicidade de enxergar a vida e as dificuldades que acreditamos difíceis de transpor. Não existem obstáculos para sua ocupação nos espaços, seja pela falta de leitura ou condição geracional. Sem ter frequentado escola formal, nos dar aula de sabedoria e nos inspira a superar nossas dificuldades. Onde tem marchas e atividade sempre está presente. Por isso, o aplicativo “Do quintal a cozinha” está  “femenageando” dando nome ao nosso chatbot de <strong>Dona Raimunda</strong>, facilitando a acessibilidade às nossas conversas.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Minha vida foi assim, desde pequena, com seis anos de idade, eu já trabalhava na roça com meus pais, e com sete anos já ganhava dinheiro, e graças a Deus, a minha vida é assim. Como meu pai e minha mãe me ensinaram, eu vou para a igreja, vou trabalhando. Não cheguei a frequenta a escola.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Tive dezoito filhos, mas criei onze e criei dois netos. O tanto de netos, só dormindo pra contar.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Ainda hoje faço roça. Agora sou viúva.  Vivo na minha roça, trabalhando, batalhando a minha vida aqui e acolá. Pouco, porque hoje eu não posso mais [por causa da]  coluna, mais ainda. Graças a Deus, vivo na minha roça, na minha feira. Minha filha não quer mais que eu vá para a feira, mas eu vou, porque eu não estou aleijada. Eu vou para a minha feira, fazer minhas feiras, fazer meus pagamentos.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Homenagem – robochat-dona Raimunda</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Bom, fiquei feliz que botaram meu nome, porque acho que eu mereço, e gostaram de mim. Até hoje, minhas amigas, graças a Deus, fizeram isso comigo, porque estão achando que eu vou ser feliz.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Chegada no Movimento</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Fui chamada por Izaldira foi quem me botou lá dentro, no movimento. Graças a Deus, até hoje, elas me ajudam. Izaldira, Madalena, Vera, elas que me ajudam a levar eu até lá.  Eu vou para todo canto. Vou para Brasília, São Paulo, Pernambuco, Caruaru, pra todo canto.
Todo canto que elas me levam, eu vou.
</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">As marchas</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Já fui pra todas as Marcha das Margaridas, foi muito bom, graças a Deus. Muitas amigas, muito conforto, tive muito conforto até hoje na minha vida com a Marcha das Margaridas, com o Movimento de Mulher Trabalhadeira Rural também, graças a Deus, fui muito feliz.
Também fui pra Marcha de Mulheres em 2010, em São Paulo, caminhei 100 quilômetros, lembro que não cansei no caminho, graças a Deus. Foi muito o caminho, mas nunca desanimei porque Jesus me sustentava.
</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">No outro encontro encontrei com Lula, (Brasília), conversei com ele e fiquei feliz. Ele foi muito bom comigo, graças a Deus, conversou comigo, me ajudou, me deu muita força na minha barraca. Ele disse que se eu precisasse de alguma coisa, podia mandar chamar ele, que ele vinha me ajudar. Mas, graças a Deus, não precisei, também não chamei ele, mas ele conversou muito comigo. Fiquei muito satisfeita com as palavras dele.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Produção</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Faço artesanato. Faço bordado, vagonite, ponto cruz, puxadinho, escama de peixe e faço pano de prato, coberta de taco. Vendo na feira de Salgado. Onde tem, eu vou.
Meu sítio  fica aqui mesmo, na Matatas. Quando eu comprei, só era terra. Mas agora já tenho mandioca plantada, tenho coco, tenho jaqueira e tenho pé de mangueira.
</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Trabalho</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Minhas tarefas eu faço, de  vez em quando fazer uma faxina, mas é eu mesmo. Varro casa, cozinho e vou levando a vida assim mesmo. O meu trabalho é só dentro de casa, bordando, fazendo crochê, vou na roça, boto remédio na formiga e volto para casa.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Território</h2>
  <p><strong>Minha casa é aqui e acho bom  porque graças a Deus até hoje eu moro e vivo feliz.</strong></p>
  `},
  // ------------------------------------------------------------------
  {
    id: "2",
    title: "Sou uma guerreira, trabalho todos os dias na roça",
    name: "Silvia Helena",
    description:"Mulher negra, agricultora não assentada, moradora há mais de 30 anos do Assentamento.",
    slug: "silvia-helena",
    regionId: "ARA",
    mediaUrl: "/images/stories/dita.jpg",
    content:`
  <p class="text-lg leading-relaxed text-gray-800 mb-6>Vamos conhecer a história de vida de Silvia Helena, 56 anos, ou Dita como é conhecida, mulher negra moradora há mais de 30 do Assentamento Vitória da União, no município de Santa Luzia do Itanhy (SE). Arupemba Dita é agricultora não assentada, fez sua vida trabalhando na terra de sua mãe e irmãos assentados, passou por uma infância difícil e a superação veio na conquista de sua autonomia. Ela nos conta com orgulho tudo que conquistou com a organização coletiva.
  Sócia e militante do MMTR-SE, ela ocupa a  diretoria da Associação do seu  Assentamento.
</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">“Já tem mais de 30 anos que a gente mora aqui no assentamento Vitória da União. Consegui ter uma roça, sou agricultora. Filha de agricultora assentada, tenho irmãos assentados. Não sou assentada  e  trabalho todos os dias na roça. No inverno planto muita verdura. Trabalho muito com mandioca, macaxeira. Planto feijão de corda, feijão de arranca, milho, bananeiras, fava. Também tenho gado. Adquiri um pouco de gado. Tem de tudo pouco. Verduras, a gente planta bastante, hortaliça. E tenho minhas plantas ornamentais. Algumas ervas pra fazer chá. Crio galinha. Várias coisas. Sou uma guerreira. Levanto cedo pra batalhar, trabalhar. Tenho a minha casa pra tomar de conta. Tenho os bichos pra tomar de conta. Também participo de uma feirinha da agricultura familiar nas quartas-feiras na cidade.".</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Infância</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Então, a gente quase não teve infância. Começamos a trabalhar cedo. Cedo, cedo, cedo. Eu me lembro que com 9 anos já estava na luta, na roça mais meu pai plantando e cuidando de fumo que era muito, trabalhava bastante com fumo. Também com o negócio brincar era pouco. Trabalhava bastante. Estudava, a gente ia pra escola, sim. Tinha aquelas dificuldades, o colégio era longe. Mas nunca deixei de ir pra escola, sempre que a gente podia, a gente ia pra escola. Mas foi uma infância difícil. A gente trabalhou bastante. Tinha negócio de brinquedo não. Naquela época não tinha celular, não tinha bicicleta. Boneca pra brincar, nada disso. Era trabalho mesmo. Mas foi uma infância feliz, a gente tinha os irmãos, os primos, os avós. Tudo morava junto, próximo um do outro, a gente estava ali, naquela animação, naquela festa, naquela época não tinha energia. Não tinha televisão. Tinha um rádio de pilha. </p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sobre seus antepassados</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Minha avó, eu pedi muito cedo, mas lembro que minha avó rezava. E sempre ia dizer, não comam isso que faz mal. Do meu pai aqui na minha casa tem muito, esse negócio de fazer chá de cidreira. Tem a babosa aqui também. Eles lavavam a cabeça com babosa. De criança, eu já lavava a cabeça com babosa, ainda hoje tenho aqui em casa babosa.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">As sementes</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">A gente planta e todo ano tem que guardar um pouquinho pra ter pro próximo ano. Eu ganhei uma semente de milho crioulo no Seminário de Biodiversidade em Aracaju (fev. 2025) que participei junto ao MMTR-SE, que plantei esse ano. Se a gente colhe uma abóbora, a gente corta a abóbora. A semente a gente já guarda. Põe pra secar e já guarda pro ano que vem. Mesma coisa é o quiabo, a mesma coisa é a macaxeira... Você tem que deixar pra semente pro próximo ano.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Uso da água</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">A água daqui do assentamento é poço, e a associação faz a gestão. Mas todo mundo tem água encanada em casa. No verão tem mudança na distribuição pra não faltar de forma nenhuma. O assentamento cresceu e hoje tem muitos moradores, muitas casas e no verão o gasto é maior.  E aí a gente tem mais dificuldade. Tem que saber economizar.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sobre as mudanças climáticas</h2>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Ano passado teve uma seca que eu não tinha visto antes. Essa seca, diz minha mãe que há uns 20 anos atrás aconteceu a mesma coisa. Foi seca mesmo, uma seca que a gente perdeu até gado. Então, no verão tem que ter menos planta. E tem que aproveitar as águas, tem que tá pegando as águas que você usa, e tá colocando nas plantas. </p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Divisão de tarefas </h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Eu faço tudo sozinha. É raro meu companheiro lavar uma xícara. É raro ele colocar água na planta.  Ultimamente ele vai mais pra roça e eu estou indo menos. Mas a gente já trabalhou de igual pra igual na roça. E quando eu chegava em casa, eu tinha que fazer as coisas dele em casa. Buscar lenha, era uma tarefa minha. Mas lenha eu vou buscar de carroça, de galinhota, fecho na cabeça.  Racho lenha até hoje, eu racho lenha.
</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Jornada diária </h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Trabalho da hora que eu levanto até a hora que eu vou deitar, eu tô fazendo as coisas. Não tem assim, quantidade de horas. Não tenho descanso, é o dia todo fazendo uma coisa ou outra, uma coisa ou outra, não paro.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Trabalho</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Por exemplo, eu limpava o terreiro, eu não sabia que o terreiro era um trabalho. Pra mim que era um terreiro que fazia parte da casa. E não é. Quer dizer, dar comida a um animal, um bicho, é um trabalho também. Doméstico, no caso cria galinha, você vai dar comida pra galinha, colocar água pra galinha. É um trabalho também.  Eu pensei que fosse fazer parte da casa, tudo, mas não é. O movimento ajudou a abrir os olhos. A gente aprende muita coisa com o Movimento.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sua produção</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Quando a gente tiver o aplicativo e a gente vai colocar os produtos, eu acho uma excelente ideia. Vamos poder vender para além da comunidade. A associação já faz venda também em grupo.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Participação </h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">No Movimento já tenho  mais de 15 anos. Mas eu não sou uma pessoa, assim, do Movimento que fico na frente. Eu sou sempre, assim, mais atrás, mais calada, mais escutando. Eu gosto de participar das reuniões, de algumas viagens. Tem reunião ali, eu vou. Uma viagem ali, se puder, eu vou. Foi assim que eu cheguei, devagarzinho, devagarzinho. E continuo aí no Movimento, no que eu puder ajudar. O Movimento pra mim tem muita importância, você assistindo, acompanhando o Movimento, as reuniões, você aprende muita coisa. Muita coisa que estava lá, adormecida, você vai lembrando. É importante a gente participar pra viver com os nossos direitos, nossas obrigações. </p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tecnologia</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Sem tecnologia você não vai a lugar nenhum. Pra quem gosta tem que correr atrás. Eu sou muito preguiçosa pra aprender, mas é importante. Tem que acompanhar o mundo. </p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Território</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Pronto, eu vim pra cá jovem, com meu pai, com minha mãe, com meus irmãos, que são assentados. E aqui fui ficando. Casei, construí minha casa, minha família. Tenho meu trabalho. Eu planto roça no terreno da minha mãe, dos meus irmãos.
  Quando chegamos aqui era uma mata, diz o povo que tinha até onça. Não tinha nada. Só mata mesmo. <i>Devagarzinho</i> foi mudando. Logo chegou energia, depois a  água encanada, Colégio para as crianças estudarem, e  foi melhorando. Se tem coisas boas, também tem coisas ruins no assentamento. Em qualquer lugar que você mora tem coisas boas.
</p>
  <p><strong>Aqui é um lugar bom de se morar. Eu gosto daqui. Eu não penso em sair daqui de forma nenhuma. </strong></p>

  `},
  // ------------------------------------------------------------------
  {
    id: "3",
    title: "Sou benzedeira, minha avó me ensinou",
    name: "Ivanilde",
    description: "Benzedeira e trabalhadora rural, moradora do Povoado São Bento em Salgado (SE). Diretora do MMTR-NE.",
    slug: "ivanilde",
    regionId: "SAL",
    mediaUrl: "/images/stories/ivanilde.png",
    content:`
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Ivanilde Maria de Souza, 61 anos. Mulher negra, moradora do Povoado São Bento, estrada do Riacho Seco em Salgado (SE). Dona de uma história com tantas perdas familiares desde a partida de sua mãe ainda criança, encontrou acolhimento e junto a sua comunidade ajudou com sua herança de benzedeira e construiu sua família.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">"Sou uma trabalhadora rural. Não tenho terra, mas eu tenho meu quintalzinho aqui, trabalho no meu quintal. Me aposentei como trabalhadora rural. Sou benzedeira, minha avó me ensinou a rezar, ela rezava e fui aprendendo. Participo de vários grupos, da associação, da igreja, da Mãe Rainha. E atualmente sou diretora do MMTR-Ne, esse meu segundo mandato.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Minha infância</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">A minha história é muito sofrida, mas superei. Eu nasci num lugar chamado Pé da Preta em Lagarto (SE). Desse lugar do Pé da Preta, saí de lá na faixa dos dois anos e sete meses. Vim pra um lugar chamado Teiú, lá comecei a me criar. Nesse Teiú a gente viveu na fome. Não tinha o que comer. Pra gente comer, ia pra o riacho que chamava Alvoroço pescar. E pegava os peixes, milho, torrava e fazia farinha, fubá, para comer com os peixes.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Depois, com dois anos minha mãe engravidou de novo. Dessa gravidez, ela passou muito tempo doente, durante a gravidez. Não tinha médico nessa época. E ela teve uma menina. No parto ficou mais mal ainda que não despachou. A parteira não teve como despachar. Não conseguia. Meu avô, pai de meu pai, morava em Riachão do Dantas, e de lá, ele soube e pegou e veio buscar ela. E levou ela pra Riachão. Ela e minha irmã.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Minha avó quando soube mandou vir buscar a gente. Quando chegou lá em Riachão, minha irmã só passou dois dias de nascida. Aí, a gente veio-se embora, junto com a minha avó, que se chamava Ilara, que é a mãe que eu conheci. Eu e meu irmão Rael que ficou se arrastando. Quando mãe foi liberada pra vir pra casa, viemos. Mãe chegou, como hoje, no Teiú, com três dias, piorou. Eu ia fazer três anos, mas lembro desse dia. Eu estava tomando banho no riacho Alvoroço, que passava na frente de minha casa, e o povo lá, lutando com ela, depois, chegou uma pessoa e me pegou. Minha filha, vamos pra cá. Quando chegou lá dentro, a mãe me pediu um beijo. Minha avó, a mãe do meu pai, que me falou tudinho isso. Aí, me pegaram e me baixaram perto dela e dei um beijo. Aí, ali mesmo, foi a despedida. Deus levou ela.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Fiquei morando com minha avó, a mãe do meu pai, Ilara. Meu pai não vinha quase em casa ver a gente. Pai não queria que eu estudasse. Não era pra estudar, mãe (avó) dizia, enquanto eu estiver viva, eles vão estudar. Só depois que eu morrer agora, aí você pode fazer o que você quiser com seus filhos, que eu não vou estar, é seu. Aí, continuo estudando no Tanque. Depois do Tanque, minha mãe (avó) adoeceu e faleceu.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Adolescência</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Fui morar no Açu (Lagarto) com meu pai e a madrasta, estava casado com uma mulher chamada Zefa. Foi aí que começou meu inferno, era explorada, tudo que fazia reclamava. Pra roça não prestava, pra dentro de casa não prestava. Era escrava. Tiveram dez filhos e os dez filhos foram todos eu que criei. Trabalhava, mas não pegava o dinheiro. Quem pegava o dinheiro era ela.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">E a roupa era duas roupas, uma no couro e uma no arame. Pra de tardezinha tirar aquela do arame e tomar banho e vestir. Para resumir, depois de uma briga feia com ela e meu pai ficou do lado dela, fugir, mas se não fujo, se não fujo de casa tinha sido estuprada pelo irmão dela, comecei a contar e ela disse que era mentira o irmão contou que era mentira.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Vim morar no Treze, também em Lagarto com uma tia, Judite era irmã da minha avó Ilara, aí fiquei na casa da tia Judite, quando eu tinha uns 20 anos, Deus levou. E desta forma vim morar no São Bento, Salgado. Fiquei trabalhando de doméstica em Aracaju, mãe Luzia me deu um terreno, um chão de casa lá embaixo (no povoado), mas tio Joãozinho lá embaixo não dar certo e em conversa com os filhos me deu esse chão, onde construir minha casa, eu não os amigos, construir através de mutirão, muitas pessoas ajudaram, agradeço a Deus primeiramente e abençoe todas as pessoas que me ajudaram e ainda que vem me ajudando até com uma palavra.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">O Movimento</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Minha história com Movimento começa depois que estou aqui no São Bento. Foi através de Izaldira, ela me chamou pra cozinhar, eu e Marta, nesta etapa de cozinha então a Marta ficava brincando vai se aposentar como cozinheira, depois fui participando de outros momentos e foi uma superação, de cozinheira passei diretora, estou diretora do MMTR-NE pela segunda vez. Vim tendo espaço para contar histórias, comecei a escutar as outras e foi como uma terapia e fui superando principalmente medo de falar.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tecnologia</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Muita coisa a gente que é agricultora precisa saber de tecnologia. Temos condições de mostrar que estamos aprendendo tudo. Apostar na nossa capacidade.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Quintal</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Meu quintalzinho de lado a minha roça é pouca, mas suficiente para mim, planto, minhas cebolinhas, meus coentrinhos, meus tomatinhos, aqui no quintalzinho. Meus chás de remédio. Também faço crochê.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Minha casa</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Era uma casinha pequena com um quarto e um banheiro. Cresci mais a casa, graças a Deus, mais um espaço, e meu quintalzinho que tem tudo.</p>

  <p><strong>O que me motiva aqui é porque aqui é muito calmo, e gosto muito daqui, do meu território aqui. Acho calmo, gosto muito daqui."</strong></p>
  `},
  {
    id: "4",
    title: "Tem que ser mulher, mas tem que ser feminista-aprovada",
    name: "Madalena Santana",
    description: "Militante desde os 15 anos, assentada há 35 anos no Assentamento Vitória da União. Ajudou a criar o MST, CUT e MMTR-NE em Sergipe.",
    slug: "madalena",
    regionId: "GLO",
    mediaUrl: "/images/stories/madalena.png",
    content: `
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Vamos conhecer Maria Madalena de Santana, 63 anos, nascida em Nossa Senhora da Glória, no sertão de Sergipe. Ela é assentada há 35 anos no Assentamento Vitória da União. Mergulhar um pouco na sua história é também mergulhar na memória das lutas de resistência e por direitos desde o período da redemocratização do país. Militante desde a adolescência, ela ajudou a criar os principais movimentos sociais no estado de Sergipe. Participando dos processos políticos ativamente, engajou-se na luta pela terra, onde passou de sem-terra à assentada.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">"Meu nome de guerra é Madalena Santana. Nasci no sertão de Sergipe, desse imenso nordeste belo, nos anos 60. E o que lembro dos anos 60 e 70, foi uma grande seca, lembro muito bem porque a minha mãe chorou muito, porque quase todos meus tios foram tudo embora para São Paulo e para o sul. E ficou só a gente, outros tios e as avós, que eram idosas. Meus pais eram trabalhadores rurais sem-terra. Quem nasce no sertão, já nasce com a disposição de lutar pela vida. Lutar pela vida e ir lutando também para melhorar as condições da vida. A gente morava em uma comunidade e lá éramos uns dos mais pobres, então existia toda essa carga de discriminação que até hoje existe. Éramos nove filhos, seis homens e três mulheres, sou a do meio, entre os nove e entre as mulheres."</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Hoje sou assentada no Assentamento Vitória da União há 35 anos, quando a gente criou o assentamento em 1990. Sou mãe de duas filhas, também militantes.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Infância</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Meus pais eram trabalhadores rurais sem terra. Somos nove filhos. Meu irmão mais velho do que eu, morreu ainda pequeno. E meu outro irmão, Francisco, morreu já com oito, nove anos porque a gente não tinha acesso à saúde, não tinha água, não tinha nada. Então ficamos em sete irmãos. Foi daí que começamos a discutir e ver que o problema do sertão não era a seca, era a cerca.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Quando criança não estudei. Quando fui alfabetizada foi no Mobral (Movimento Brasileiro de Alfabetização) que hoje é equivalente ao EJA (Educação de Jovens e Adultos). Depois eu estudei na escola normal.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Meus dois irmãos mais velhos, não lembro da vivência de infância com eles, porque eles iam trabalhar com meu pai de alugado, que hoje chamam de diarista, eles que desbravaram as terras entre Nossa Senhora da Glória para Monte Alegre, para outro município distante, e ficaram lá a semana. Eles só vinham para casa no final de semana.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Início da militância nos anos 70</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Nos anos 70, a gente fazia parte do grupo de jovens ligados à igreja católica e como jovens fomos participar da luta da retomada de Santana dos Frades (Pacatuba-SE) e da resistência dos índios Xocós em Porto da Folha (SE). Começou lá.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Não tinha muita coisa na cabeça, mas eu só achava injusto o que estava acontecendo. E a gente fez muita campanha em Nossa Senhora da Glória para ajudar os posseiros e indígenas.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Naquele tempo, principalmente as meninas, sair era uma coisa brava. Mesmo assim a gente foi para essas lutas. Depois, já nos anos 80, já estava na luta pela redemocratização do país e a gente começou a participar de um monte de lutas.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">A gente fez a oposição sindical no sindicato rural de Glória e ajudou a construir a CUT- Central Única dos Trabalhadores e o Partido dos Trabalhadores. O Movimento Sem Terra foi a gente que trouxe para Sergipe.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Fizemos a primeira ocupação de terra em Barra da Onça, em Poço Redondo (SE) nos anos 80, e naquele corre-corre ia fazendo a luta também contra a Companhia de Saneamento de Sergipe (Deso) porque não tinha água. As pessoas pagavam, não tinha.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Assim passamos a viver vigiados. Na Barra da Onça, a gente só sai escondidos porque tinha muito jagunço atrás da gente também. E a luta foi acontecendo, os trabalhadoras/es foram entrando e discutindo e decidimos avançar para região Sul do estado que também tinham problemas como as/os catadoras/es de laranja, das crianças que quebraram pedra.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Aqui também existe a cerca, as pessoas eram exploradas porque eles não tinham terra.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Quem não tem terra não tem água.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Eu participei de todas as lutas, desde os meus 15 anos, inclusive de resistência à terra e de oposição de tudo. Era uma jovem e era menina, e tinha toda aquela carga de preconceito e o movimento veio me ajudar discutir e enfrentar esses preconceitos.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">As frentes de trabalho: emergências</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">As frentes de trabalho eram feitas nas fazendas dos fazendeiros, nas terras deles. Então, essa água quando chovia também era deles. E, naquela época, só os homens podiam se cadastrar para trabalhar, porque as mulheres não podiam. Segundo quem coordenava na época, diziam que as mulheres menstruavam e perdiam o dia de serviço. Então, a gente não tinha acesso a esse trabalho. Mas, a gente também já estava participando do sindicato rural e íamos para as barragens, de mulheres tinha eu e Lúcia que era minha cunhada fazer trabalho de base com as pessoas, falando sobre os direitos, o que estava errado, o que não estava e colocando o porquê daquela situação.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Movimento de Mulheres</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Eu e a companheira Yolanda, que ainda está lá em Nossa Senhora da Glória, tivemos o privilégio de ir para a primeira reunião na Paraíba de fundação e criação do MMTR Nordeste. Nunca me esqueço. Conheci Nazaré Flor e outras companheiras que já partiram também. E aí a gente começou a lutar.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Me achei enquanto mulher no MMTR, então esse é um movimento. E por ser do MMTR que, em 2017, tive o prazer e o privilégio de ir na caravana Lula pelo Brasil. Ele esteve aqui em Estância (SE) e representei as mulheres trabalhadoras rurais. Falei com o Lula, dei a bandeira do movimento para ele, porque tem muita assentada aqui, mas fui escolhida e me sinto privilegiada de falar com o Presidente Lula e dizer da importância do que foi e do que são as políticas públicas que o ele implantou nesse Brasil para as/os trabalhadoras/es de modo geral.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tem que ser mulher, mas tem que ser feminista</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Minha vida foi sempre marcada por grandes desafios, pela luta de se firmar enquanto mulher, enquanto trabalhadora e enquanto jovem porque ninguém acreditava e acredita na juventude. Eu era muito jovem, comecei com 15 anos a lutar e até hoje estou aqui na luta, vivendo.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Políticas públicas</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Tenho duas filhas que hoje com as políticas públicas de acesso à educação e com todos os esforços que tivemos são formadas, uma em Direito e a outra em Assistência Social, para a gente é um orgulho ver essas meninas e outras meninas estudando e chegando lá. Fui abrindo espaços para outras e fui assumindo outras missões. Algumas infelizmente só acontece para as mulheres quando os filhos chegam.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Trabalho do Cuidado</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Agora é cuidar dos nossos pais. Já cuidaram da gente, a gente tem que cuidar dos pais. A mulher é sempre desafiada a tudo, é a grande criadora, a grande cuidadora da humanidade. Posso dizer porque cuido desde pequena, e quando chega mais pra frente vai ter que cuidar dos seus pais. Pra mim é um orgulho cuidar do meu pai.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Produção</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Já éramos contra o uso de veneno, agora com mais consciência estamos entrando nessa linha da agroecologia e está legal a discussão com outras/os companheiras/os. Não são muitas ainda, mas vamos chegar lá. Eu acho que é por aí o caminho. Acho que a luta tem várias frentes e vários momentos e que a gente tem que estar em todas.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Mudanças</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Morar em Agrovila foi uma escolha por facilitar a organização social, inclusive das mulheres participarem. E facilita a chegada de energia, de água encanada. Na época isso era uma novidade, alguns não entenderam. Hoje é um espaço meio quadrado, que tem a intenção de fazer uma praça mais bela do que aqui já tem.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Assentamento como território</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">No início foi a luta pela nossa permanência no assentamento porque também os coronéis, os fazendeiros e a polícia lá do sertão também tinha aqui e também veio atrás da gente.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">E a gente conseguiu. Aqui não era nada. Hoje, essa beleza que é o assentamento e o Priapu têm mais de 100 famílias. Fomos os pioneiros aqui no estado, em vários pontos fomos os pioneiros a brigar por água, por qualidade de vida. Estamos lutando pra melhorar e pra se firmar aqui, nesse pedaço que eu digo que é meu.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Também, na área da agroecologia, temos uma boa reserva de mato. Mas ainda faltam muitas condições para avançar na produção. Tem várias frutas plantadas e juntos querendo entrar nessa linha. Então, a minha roça, tirando meu fundo de casa, ela tem uma diversidade muito grande de frutas. Tá uma beleza.</p>

  <p><strong>Aqui é meu lugar, aqui é a minha vida, aqui foi que eu escolhi, eu escolhi vir para aqui, morar aqui, criar minhas filhas aqui e vou continuar aqui.</strong></p>
  `},
  // ------------------------------------------------------------------
  {
    id: "5",
    title: "Venha o que vier, mas eu estou sempre sorrindo",
    name: "Rosa",
    description: "Doceira e agricultora de 58 anos, moradora do Assentamento Vitória da União. Mãe de três filhos, sempre sorridente e engajada no MMTR.",
    slug: "rosa",
    regionId: "GLO",
    mediaUrl: "/images/stories/rosa.png",
    content: `
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Nada é mais contagiante que um sorriso, nos faz bem encontrar pessoas felizes. Esse é o convite para conhecer um pedaço da história de vida de Rosa, ou Rosivania Farias, 58 anos, mãe de três filhos, duas netas, e dona de risadas soltas que contagia quem está ao redor. Doceira de mão cheia, nos conta que herdou o gosto pela cozinha de sua mãe, também excelente cozinheira, com especialidade para comidas típicas Alagoana. Hoje vive dividida entre Sergipe e Alagoas.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">"Rosa é uma pessoa amigueira, sorridente, rio com o vento. Adoro fazer amizade, conhecer pessoas, interagir. E estou sempre feliz. Venha o que vier, mas eu estou sempre sorrindo. E Tenho três filhos, o Jefferson foi o primeiro depois do Jefferson veio a Aline, depois o Jonathan, que é uma benção, ele é filho do coração. Mas que eu amo da mesma forma, não tem diferença. E são minhas três joias raras. E agora duas netas que Deus me deu de presente agora. A Alice e a Maya.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Sou agricultora e faço e vendo doces e salgados. Também vendo roupas, trabalho com vendas. E sempre estou buscando uma ajuda financeira, porque depois que a gente se aposenta é aquela quantia contada. E agradecer a Deus por ter. Mas a gente tem que sempre estar buscando, trabalhando para ter uma rendinha, não só depender daquele salariozinho."</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">MMTR</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Quando eu cheguei aqui, em Sergipe, que sou alagoana, mas nunca tinha participado de nada desses projetos. Quando cheguei aqui em Sergipe, conheci Madalena. E através de Madalena, foi que me engajei nesses projetos. Tive conhecimento do MMTR, comecei a participar de reuniões, viajar com elas, conhecer o dia-a-dia de outras pessoas fora. E assim fui me apegando a participar de todas as coisas que surgiam, que pudesse participar, estava presente. E me trouxe conhecimento enorme, eu achava que a mulher era só ser dona de casa, trabalhar, cozinhar, lavar, passar. E através do movimento eu tive outra visão da vida, que não só é isso, a mulher tem seus direitos, tem seus sonhos. E quando a gente busca, tem que batalhar para conseguir as coisas, realizar os sonhos. E através do MMTR a gente tem muitos conhecimentos, sabemos nossos direitos, os deveres. E assim, a cada dia, a cada encontro, a gente vai se aperfeiçoando, ganhando conhecimento. E foi assim que eu aprendi muitas coisas.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Uso tecnologia da comunicação</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">É importante as agricultoras aprenderem a usar as tecnologias porque facilita a vida. Como eu já falei, era difícil expor as coisas da agricultura, o que a gente vendesse, alguma coisa. E hoje em dia, com a tecnologia, as coisas ficam tudo mais fáceis. Você posta, divulga e vender os produtos.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Produção / Herança de mãe</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Estou trabalhando com doces, doces caseiros.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Aprendi a cozinhar, a culinária, com a minha mãe, porque ela cozinhava muito bem e eu peguei o gosto pela cozinha, porque eu estando dentro de uma cozinha, eu me realizo. Então, eu acho que foi isso, pelo gosto pela culinária da minha mãe.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Ela fazia muito bem, buchada, que é um prato típico lá de Alagoas, o povo gosta muito, e o doce de mamão com coco.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Assentamento</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Agora, no Assentamento Vitória da União, está com muito sol e as está plantações estão penando, no momento, tem fruteiras, abacate, laranja, mexerica, quando eu cheguei, aí só tinha, no local, tinha muitas acerolas, só que dono antigo, cortou. Aí a gente foi replantando, aí plantamos as fruteiras que tem hoje, pé de coco, coco d'água, e, como é, bananeira, e as outras coisas que já tinha, que era o abacateiro e o Genipapo.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Vejo muitas melhoras, o calçamento, que facilitou a vida das pessoas, por não ter as estradas. Melhoraram muito. E cada dia, aos poucos, está melhorando.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Adaptações ao clima</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Eu vejo que as chuvas, principalmente esse ano, no tempo da plantação foi pouquinha, mas depois ela já chegou. Então, o tempo está mudando.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Divisão de tarefas</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Eu faço tudo em casa, costumo fazer tudo. Os filhos só levantam, forram a cama e pronto. Mas as outras coisas eu tenho mania de fazer tudo só. Eu não gosto muito de botar eles para fazer, mas eles sabem como são os deveres deles e sempre que pode ajuda.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Venda no aplicativo</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Então, quero sim. Vou achar os meus produtos que eu estou vendendo agora, os meus doces gourmet. A comunidade já comprou, e gostam.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Ultimamente eu estou fazendo doce gourmet, que é o doce de leite saborizado com morango, ameixa, geleia de maracujá, geleia de abacaxi. Então, eu estou fazendo agora esses doces. São fáceis. Você faz o doce batido e depois você saboriza com a geleia.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Território</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Quando a gente vem para um lugar morar, que a gente encontra pessoas boas, encontrar amigas, fazer amizade. sempre tem aquela motivação de continuar naquele lugar, para crescer com aquelas pessoas, buscar sempre as melhoras para a nossa comunidade, participar das coisas, principalmente das coisas da igreja, das coisas que Deus nos propõe a cada dia, que é servir ao nosso próximo.</p>

  <p><strong>E estar sempre engajada em todas as coisas que surgem, buscando dar o melhor para a nossa comunidade.</strong></p>
  `},
  // ------------------------------------------------------------------
  {
    id: "6",
    title: "Me descobri a mulher que sou, me descobri como feminista",
    name: "Alba Rafaela",
    description: "Agroecóloga de 42 anos, moradora do Povoado Barro Vermelho em Nossa Senhora de Lourdes. Produtora de queijo artesanal e feminista.",
    slug: "alba-rafaela",
    regionId: "NLO",
    mediaUrl: "/images/stories/alba.png",
    content: `
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Filha do semiárido e moradora do povoado Barro Vermelho, no Alto Sertão sergipano. Nasceu e cresceu na comunidade, onde viveu sua infância inteira e começou, ainda aos 12 anos, a trabalhar na roça junto à família.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">"Meu nome é Alba Rafaela de Andrade, tenho 42 anos solteiros, sou do município de Nossa Senhora de Lourdes, no Alto Sertão sergipano. Nasci e cresci nesse lugar. Vivi toda minha infância aqui, sempre muito ligada à roça e ao trabalho da terra.</p>

  <p class="text-lg leading-relaxed text-gray-800 mb-6">Na minha família, a gente cultivava em um sistema parecido com agrofloresta, onde tudo era cultivado no mesmo espaço, feijão, milho, abóbora, quiabo, macaxeira. Todo esse cultivo era para o nosso próprio sustento. Aos 30 anos, eu saí da comunidade para morar na capital, buscando estudo. Fiz faculdade de Agroecologia no Instituto Federal de Sergipe. Foram quatro anos de estudo e mais um tempo de trabalho na capital, embora não tenha trabalhado diretamente na área. Há cerca de seis meses, retornei para o campo, para meu município, onde trabalho na agroecologia e também na produção de queijo artesanal, um trabalho feito em família."</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Minha chegada ao MMTR</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Entrei no MMTR através de Gisélia, que conheci em um encontro da ASA. Foi ela quem me apresentou ao movimento. Desde 2010 participo dos espaços do MMTR. O movimento foi transformador na minha vida, me mostrou caminhos que eu não conhecia, me fez descobrir a mulher que eu sou e me descobrir como feminista. Para outras mulheres também é muito importante, porque ajuda a revelar nossa capacidade, dentro e fora de casa, e a importância da nossa liberdade e autonomia.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">A importância das tecnologias para nós, mulheres agricultoras</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Hoje, a tecnologia é essencial. Ela facilita divulgar nossos produtos, falar com familiares distantes, aprender coisas novas, acessar direitos e oportunidades. Mas também é importante saber usar, ter limite e usar a tecnologia ao nosso favor.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Sobre o aplicativo que o MMTR está lançando junto com o Intervozes, acredito que ele vai ajudar muito as mulheres a conhecerem melhor as ferramentas, divulgar sua produção e enxergar a tecnologia como algo que pode fortalecer nosso trabalho e nossa autonomia.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">No meu dia a dia uso WhatsApp, Instagram, Gmail, aplicativos de banco, sites de compras e outros que facilitam a rotina. Eu gosto muito de ler livros, não online. Para estudar, prefiro o livro físico. Pelo celular, gosto de assistir vídeos, ouvir coisas, usar aplicativos.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Produção</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Nossa maior renda é o leite, criamos galinhas para consumo e venda de ovos. Não participamos atualmente de feiras, mas já vendemos produtos no PNAE anos atrás. Os queijos são vendidos por encomenda, na porta de casa ou para atravessadores. Temos sementes de abobora, fava e feijão de corda.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Terra, sementes, água e mudanças climáticas</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">A terra onde vivemos veio de herança. São cerca de 30 tarefas que eram usadas mais para o gado, e a roça nós fazíamos em terras de um fazendeiro, em troca de plantar palma para ele. Depois minha irmã comprou um terreno maior e a partir dai começamos produzir na nossa própria terra.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">O território como um todo melhorou muito. Hoje é um território forte na bacia leiteira na agricultura. Quase todo mundo tem um pedacinho de terra e uma vaquinha. O lado negativo é a monocultura do milho, que tomou conta e devastou a caatinga. Antes tinha diversidade de plantas e animais silvestre, hoje, o solo estar descoberto, muito uso de adubo químico que acaba prejudicando um todo.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">A maioria das sementes a gente acabou perdendo principalmente o milho crioulo hoje a gente pega com vizinho, ou com minha tia, mais hoje plantamos pouco, atualmente estamos comprando milho para ração animal porque vimos que comprar sai mais em conta o custo é menor pra produzir hoje o milho é necessário alto investimento. O que mantemos mais é a semente da palma. A água chega encanada, vinda do Rio São Francisco. Para os animais usamos água de chuva guardada em barreiros. Temos cisterna e, quando necessário, também dependemos de carro-pipa. O clima mudou muito. Há anos de muita chuva e anos de pouca. Este ano choveu até setembro, o que é raro no semiárido.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Divisão de tarefas</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">Na nossa família somos três mulheres e um homem. Meu irmão é agente de saúde e mora em outro povoado, mas vem para tirar o leite. Depois disso, todo o trabalho na produção é feito por nós, as três mulheres. Minhas irmãs Renata e Rosimeire cuidam dos animais e da produção do leite. Eu fico mais com os cuidados da casa e do quintal. A produção do queijo começou por iniciativa da minha irmã mais velha, Rosimeire. Antes, a gente só vendia o leite. Ela decidiu começar a produzir o queijo para agregar valor ao produto, e deu certo. Minha irmã também cuida da roça e dos animais. Eu e minha irmã mais nova cuidamos da casa, limpar, cozinhar e ela também faz o queijo e administra a propriedade junto com minha irmã mais velha. Eu sou a única que não faço queijo, mas eu sei fazer, só não faço no momento. No meu caso, sou mais do cuidado com os afazeres de casa lavar cozinhar. Todas nós trabalhamos cerca de 10 horas por dia das cinco da manhã ate a cinco da tarde.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Território</h2>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">O que me motiva é a família e o desejo de produzir alimentos orgânicos, oferecer comida de qualidade para as pessoas, especialmente para quem enfrenta problemas de saúde, pois a nossa alimentação é a nossa base para uma vida saudável. Também tenho o sonho de trabalhar com turismo rural.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">São ideias que precisam de estrutura e apoio, mas que guardo com carinho.</p>
  <p class="text-lg leading-relaxed text-gray-800 mb-6">No momento estou no interior também porque estou desempregada. Se surgir uma boa oportunidade de trabalho fora, posso sair de novo, porém enquanto estou lá, sigo acreditando no potencial do território, da agroecologia e nas possibilidades que ainda posso construir no campo.</p>
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
