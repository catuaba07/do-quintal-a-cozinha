import { MediaType, PrismaClient, RecipeDifficulty } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const recipes = [
  {
    title: "Feijoada Completa",
    description:
      "O prato mais tradicional do Brasil, com feijão preto, carnes variadas e acompanhamentos clássicos.",
    image: "https://storage.luisotee.com/typebot/public/brazilian-feijoada-with-black-beans-and-meat.jpg",
    preparation_time_in_minutes: 30,
    cooking_time_in_minutes: 210,
    number_of_servings: 8,
    difficulty: RecipeDifficulty.INTERMEDIARY,
    ingredients: [
      "500g de feijão preto",
      "300g de carne seca",
      "300g de costela de porco",
      "200g de linguiça calabresa",
      "200g de bacon",
      "150g de paio",
      "2 folhas de louro",
      "4 dentes de alho",
      "1 cebola grande",
      "2 colheres de sopa de óleo",
      "Sal e pimenta a gosto"
    ],
    steps: [
      { step_number: 1, instruction: "Deixe o feijão de molho na véspera. Escorra e lave bem." },
      { step_number: 2, instruction: "Em uma panela grande, coloque o feijão com água suficiente para cobrir e cozinhe por cerca de 1 hora." },
      { step_number: 3, instruction: "Em outra panela, refogue a cebola e o alho no óleo até dourar." },
      { step_number: 4, instruction: "Adicione todas as carnes e refogue por alguns minutos." },
      { step_number: 5, instruction: "Junte as carnes ao feijão junto com as folhas de louro." },
      { step_number: 6, instruction: "Cozinhe em fogo baixo por mais 2 horas, mexendo ocasionalmente." },
      { step_number: 7, instruction: "Tempere com sal e pimenta a gosto." },
      { step_number: 8, instruction: "Sirva com arroz branco, couve refogada, farofa e laranja." },
    ]
  },
  {
    title: "Brigadeiro Gourmet",
    description:
      "A versão sofisticada do doce mais amado pelos brasileiros, perfeito para ocasiões especiais.",
    image: "https://storage.luisotee.com/typebot/public/gourmet-brigadeiro-chocolate-truffles-brazilian-de.jpg",
    preparation_time_in_minutes: 15,
    cooking_time_in_minutes: 45,
    number_of_servings: 20,
    difficulty: RecipeDifficulty.EASY,
    ingredients: [
      "1 lata de leite condensado",
      "3 colheres de sopa de chocolate em pó",
      "1 colher de sopa de manteiga",
      "Chocolate granulado para decorar",
      "Forminhas de papel"
    ],
    steps: [
      { step_number: 1, instruction: "Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga." },
      { step_number: 2, instruction: "Cozinhe em fogo médio, mexendo sempre, até que a mistura desgrude do fundo da panela." },
      { step_number: 3, instruction: "Deixe esfriar completamente." },
      { step_number: 4, instruction: "Com as mãos untadas com manteiga, faça bolinhas com a massa." },
      { step_number: 5, instruction: "Passe as bolinhas no chocolate granulado." },
      { step_number: 6, instruction: "Coloque em forminhas de papel e sirva." },
    ]
  },
  {
    title: "Pão de Açúcar",
    description: "Pão doce tradicional brasileiro, macio e saboroso.",
    image: "https://storage.luisotee.com/typebot/public/brazilian-sweet-bread-pao-de-acucar.jpg",
    preparation_time_in_minutes: 30,
    cooking_time_in_minutes: 120,
    number_of_servings: 6,
    difficulty: RecipeDifficulty.INTERMEDIARY,
    ingredients: [
      "500g de farinha de trigo",
      "200ml de leite morno",
      "2 ovos",
      "100g de açúcar",
      "50g de manteiga",
      "10g de fermento biológico seco",
      "1 pitada de sal",
      "Açúcar de confeiteiro para polvilhar"
    ],
    steps: [
      { step_number: 1, instruction: "Misture o fermento com o leite morno e um pouco de açúcar. Deixe descansar por 10 minutos." },
      { step_number: 2, instruction: "Em uma tigela, misture a farinha, o açúcar, o sal, os ovos e a manteiga." },
      { step_number: 3, instruction: "Adicione o fermento ativado e sove até obter uma massa lisa." },
      { step_number: 4, instruction: "Deixe a massa crescer até dobrar de volume." },
      { step_number: 5, instruction: "Modele os pães, coloque em uma assadeira e deixe crescer novamente." },
      { step_number: 6, instruction: "Asse em forno pré-aquecido a 180°C por cerca de 30 minutos." },
      { step_number: 7, instruction: "Polvilhe açúcar de confeiteiro antes de servir." }
    ]
  },
  {
    title: "Moqueca de Peixe",
    description: "Prato típico da Bahia com peixe, leite de coco e dendê.",
    image: "https://storage.luisotee.com/typebot/public/brazilian-moqueca-fish-stew-coconut-milk.jpg",
    preparation_time_in_minutes: 0,
    cooking_time_in_minutes: 45,
    number_of_servings: 4,
    difficulty: RecipeDifficulty.EASY,
    ingredients: [
      "800g de filé de peixe (robalo, cação ou outro)",
      "2 tomates em rodelas",
      "1 pimentão em rodelas",
      "1 cebola em rodelas",
      "200ml de leite de coco",
      "2 colheres de sopa de azeite de dendê",
      "Suco de 1 limão",
      "Coentro a gosto",
      "Sal e pimenta a gosto"
    ],
    steps: [
      { step_number: 1, instruction: "Tempere o peixe com sal, pimenta e suco de limão. Reserve." },
      { step_number: 2, instruction: "Em uma panela, faça camadas de peixe, tomate, pimentão e cebola." },
      { step_number: 3, instruction: "Regue com leite de coco e azeite de dendê." },
      { step_number: 4, instruction: "Cozinhe em fogo baixo, sem mexer, por cerca de 30 minutos." },
      { step_number: 5, instruction: "Finalize com coentro picado e sirva com arroz branco." }
    ]
  },
  {
    title: "Açaí na Tigela",
    description: "Sobremesa refrescante com açaí e frutas tropicais.",
    image: "https://storage.luisotee.com/typebot/public/acai-bowl-brazilian-purple-fruit-granola-banana.jpg",
    preparation_time_in_minutes: 0,
    cooking_time_in_minutes: 15,
    number_of_servings: 2,
    difficulty: RecipeDifficulty.EASY,
    ingredients: [
      "400g de polpa de açaí congelada",
      "2 bananas",
      "Granola a gosto",
      "Mel a gosto",
      "Frutas frescas (morango, kiwi, etc.)"
    ],
    steps: [
      { step_number: 1, instruction: "Bata a polpa de açaí com uma banana até ficar cremoso." },
      { step_number: 2, instruction: "Coloque em tigelas e decore com a outra banana fatiada, granola e frutas frescas." },
      { step_number: 3, instruction: "Regue com mel e sirva imediatamente." }
    ]
  },
  {
    title: "Coxinha de Frango",
    description: "Salgadinho brasileiro clássico com massa de batata e frango.",
    image: "https://storage.luisotee.com/typebot/public/brazilian-coxinha-chicken-croquette-golden-fried.jpg",
    preparation_time_in_minutes: 0,
    cooking_time_in_minutes: 90,
    number_of_servings: 12,
    difficulty: RecipeDifficulty.INTERMEDIARY,
    ingredients: [
      "2 peitos de frango cozidos e desfiados",
      "2 xícaras de caldo de frango",
      "2 xícaras de farinha de trigo",
      "2 colheres de sopa de manteiga",
      "1 cebola picada",
      "2 dentes de alho picados",
      "Sal e pimenta a gosto",
      "Farinha de rosca para empanar",
      "Óleo para fritar"
    ],
    steps: [
      { step_number: 1, instruction: "Refogue a cebola e o alho na manteiga, adicione o frango desfiado e tempere." },
      { step_number: 2, instruction: "Ferva o caldo de frango, adicione a farinha de trigo e mexa até soltar do fundo." },
      { step_number: 3, instruction: "Deixe a massa esfriar, modele as coxinhas recheando com o frango." },
      { step_number: 4, instruction: "Passe na farinha de rosca e frite em óleo quente até dourar." }
    ]
  },
  {
    title: "Caipirinha",
    description: "O drink nacional do Brasil com cachaça, limão e açúcar.",
    image: "https://storage.luisotee.com/typebot/public/caipirinha-cocktail-lime-cachaca-brazilian-drink.jpg",
    preparation_time_in_minutes: 0,
    cooking_time_in_minutes: 5,
    number_of_servings: 1,
    difficulty: RecipeDifficulty.EASY,
    ingredients: [
      "1 limão",
      "2 colheres de chá de açúcar",
      "50ml de cachaça",
      "Gelo a gosto"
    ],
    steps: [
      { step_number: 1, instruction: "Corte o limão em pedaços e coloque em um copo." },
      { step_number: 2, instruction: "Adicione o açúcar e macere bem." },
      { step_number: 3, instruction: "Acrescente a cachaça e o gelo. Misture e sirva." }
    ]
  },
  {
    title: "Quindim",
    description: "Doce tradicional feito com gemas, açúcar e coco.",
    image: "https://storage.luisotee.com/typebot/public/brazilian-quindim-yellow-coconut-dessert-custard.jpg",
    preparation_time_in_minutes: 0,
    cooking_time_in_minutes: 60,
    number_of_servings: 8,
    difficulty: RecipeDifficulty.INTERMEDIARY,
    ingredients: [
      "12 gemas",
      "200g de açúcar",
      "100g de coco ralado",
      "2 colheres de sopa de manteiga derretida"
    ],
    steps: [
      { step_number: 1, instruction: "Misture as gemas peneiradas com o açúcar, o coco e a manteiga." },
      { step_number: 2, instruction: "Despeje em forminhas untadas com manteiga e polvilhadas com açúcar." },
      { step_number: 3, instruction: "Asse em banho-maria em forno médio por cerca de 1 hora." },
      { step_number: 4, instruction: "Deixe esfriar antes de desenformar." }
    ]
  },
];

const prisma = new PrismaClient();

async function main() {
  for (const recipe of recipes) {
    const createdRecipe = await prisma.recipe.create({
      data: {
        id: uuidv4(),
        title: recipe.title,
        description: recipe.description,
        preparation_time_in_minutes: recipe.preparation_time_in_minutes ?? 0,
        cooking_time_in_minutes: recipe.cooking_time_in_minutes ?? 0,
        number_of_servings: recipe.number_of_servings ?? 1,
        difficulty: recipe.difficulty,
        ingredients: recipe.ingredients ? JSON.stringify(recipe.ingredients) : JSON.stringify([]),
        media: {
          create: {
            media: {
              create: {
                id: uuidv4(),
                media_type: MediaType.IMAGE,
                url: recipe.image
              }
            }
          }
        },
        steps: { create: recipe.steps.map(step => ({ instruction: step.instruction, step_number: step.step_number })) }
      },
    });
    console.log(`Seeded recipe: ${createdRecipe.title}`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });