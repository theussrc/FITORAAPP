/**
 * FITORA - Consolidated Production Bundle
 * Design refinado, gastronômico e responsivo inspirado na referência do usuário
 */

(function () {
  'use strict';

  // ==========================================
  // 1. BANCO DE DADOS DAS 50 RECEITAS COM FOTOS REAIS E CURADAS
  // ==========================================
  const RECIPES_DATA = [
    // CAFÉ DA MANHÃ (1 - 10)
    {
      id: 1,
      name: "Panqueca de banana e aveia",
      category: "Café da manhã",
      description: "Maciez incomparável com apenas 3 ingredientes base. Perfeita para começar o dia com energia sustentável.",
      image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?auto=format&fit=crop&w=800&q=80",
      time: "10 min",
      difficulty: "Fácil",
      servings: "1 porção (3 panquecas)",
      ingredients: [
        "1 banana madura amassada",
        "2 ovos inteiros",
        "3 colheres de sopa de farelo de aveia",
        "1 pitada de canela em pó",
        "1 fio de mel para finalizar (opcional)"
      ],
      steps: [
        "Amasse bem a banana em um prato fundo até formar um purê liso.",
        "Em uma tigela, bata levemente os dois ovos com um garfo.",
        "Junte a banana amassada, a aveia e a canela aos ovos, misturando até ficar homogêneo.",
        "Aqueça uma frigideira antiaderente em fogo baixo e unte com um fiozinho de óleo de coco ou azeite.",
        "Despeje pequenas porções da massa e tampe por 2 minutos. Quando dourar embaixo e firmar as bordas, vire e doure o outro lado."
      ],
      tip: "Use uma banana bem madura (com casca pintadinha) para garantir doçura natural sem precisar adicionar açúcar.",
      substitutions: "Substitua a aveia por farinha de amêndoas se desejar uma opção com menor teor de carboidratos.",
      tags: ["café da manhã", "banana", "rápido", "até 20 minutos", "poucos ingredientes", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 2,
      name: "Panqueca de cacau",
      category: "Café da manhã",
      description: "Sabor intenso de chocolate em uma massa fofinha e rica em antioxidantes para manhãs especiais.",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
      time: "12 min",
      difficulty: "Fácil",
      servings: "1 porção (2 a 3 unidades)",
      ingredients: [
        "1 banana nanica amassada",
        "1 ovo inteiro",
        "2 colheres de sopa de aveia em flocos finos",
        "1 colher de sopa de cacau em pó 100%",
        "1 colher de café de fermento em pó químico",
        "Gotas de chocolate amargo para finalizar (opcional)"
      ],
      steps: [
        "No prato, amasse a banana até desmanchar completamente.",
        "Misture o ovo, a aveia e o cacau 100% até obter uma massa escura e aveludada.",
        "Adicione o fermento por último e mexa delicadamente.",
        "Aqueça a frigideira antiaderente untada em fogo baixo.",
        "Coloque a massa, adicione algumas gotas de chocolate por cima e tampe até dourar e virar."
      ],
      tip: "O cacau 100% alcalino dissolve melhor e traz um sabor mais suave e achocolatado sem amargor excessivo.",
      substitutions: "Pode usar farinha de coco ou farinha de trigo integral no lugar da aveia.",
      tags: ["café da manhã", "chocolate", "doces", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 3,
      name: "Panqueca de maçã e canela",
      category: "Café da manhã",
      description: "Aroma acolhedor de maçã tostada com canela, textura úmida e reconfortante.",
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
      time: "15 min",
      difficulty: "Fácil",
      servings: "1 porção",
      ingredients: [
        "1/2 maçã ralada com casca",
        "1 ovo",
        "3 colheres de sopa de farinha de aveia",
        "1/2 colher de chá de canela em pó",
        "1 colher de sopa de leite (vegetal ou desnatado)",
        "1 colher de café de fermento em pó"
      ],
      steps: [
        "Em um bowl pequeno, bata o ovo com a canela e o leite.",
        "Adicione a maçã ralada e a farinha de aveia, misturando com uma colher.",
        "Finalize com o fermento em pó.",
        "Despeje na frigideira untada pré-aquecida em fogo baixo e tampe.",
        "Vire com cuidado após 3 minutos e doure o outro lado até ficar bem aromática."
      ],
      tip: "Ralar a maçã com a casca preserva as fibras e traz uma textura suculenta e rústica.",
      substitutions: "Você pode substituir a maçã por pera madura ralada com o mesmo resultado incrível.",
      tags: ["café da manhã", "rápido", "até 20 minutos", "poucos ingredientes", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 4,
      name: "Overnight oats de banana",
      category: "Café da manhã",
      description: "Aveia dormida cremosa, preparada na noite anterior para um café da manhã sem pressa.",
      image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80",
      time: "5 min (+ geladeira)",
      difficulty: "Fácil",
      servings: "1 pote individual",
      ingredients: [
        "4 colheres de sopa de aveia em flocos grossos",
        "100ml de leite ou bebida vegetal",
        "2 colheres de sopa de iogurte natural integral",
        "1 banana fatiada",
        "1 colher de chá de sementes de chia",
        "Canela a gosto"
      ],
      steps: [
        "No pote de vidro com tampa, misture a aveia, a chia e a canela.",
        "Despeje o leite e o iogurte natural, mexendo bem para hidratar todos os grãos.",
        "Coloque metade das rodelas de banana no meio e o restante por cima.",
        "Tampe e leve à geladeira por pelo menos 4 horas ou durante a noite.",
        "Consuma frio diretamente do pote pela manhã."
      ],
      tip: "A aveia em flocos grossos mantém melhor a mastigação e não vira papa como o farelo.",
      substitutions: "Use iogurte vegetal e bebida de amêndoas para uma versão 100% sem lactose.",
      tags: ["café da manhã", "banana", "rápido", "até 20 minutos", "sem forno", "fácil", "poucos ingredientes"],
      videoUrl: ""
    },
    {
      id: 5,
      name: "Overnight oats de chocolate",
      category: "Café da manhã",
      description: "Parece sobremesa, mas é nutrição pura. Textura de pudim cremoso de chocolate.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      time: "5 min (+ geladeira)",
      difficulty: "Fácil",
      servings: "1 pote individual",
      ingredients: [
        "4 colheres de sopa de aveia em flocos",
        "1 colher de sopa de cacau em pó 100%",
        "1 colher de chá de sementes de chia",
        "100ml de leite ou bebida vegetal",
        "2 colheres de sopa de iogurte natural",
        "1 colher de chá de mel ou adoçante natural",
        "Raspas de chocolate amargo para finalizar"
      ],
      steps: [
        "Misture a aveia, o cacau em pó e a chia no pote de vidro.",
        "Acrescente o mel, o leite e o iogurte, misturando vigorosamente até dissolver o cacau.",
        "Tampe o pote e guarde na geladeira durante a noite (mínimo 6 horas).",
        "Pela manhã, finalize com raspas de chocolate amargo 70% por cima."
      ],
      tip: "Adicione uma pitada de café solúvel na mistura para realçar profundamente o sabor do cacau.",
      substitutions: "Para enriquecer em proteína, adicione 1 scoop de whey protein de chocolate ou baunilha.",
      tags: ["café da manhã", "chocolate", "doces", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 6,
      name: "Mingau cremoso de aveia",
      category: "Café da manhã",
      description: "O clássico do conforto. Quentinho, aveludado e que sustenta até a hora do almoço.",
      image: "https://images.unsplash.com/photo-1586511925508-a4c507b97500?auto=format&fit=crop&w=800&q=80",
      time: "8 min",
      difficulty: "Fácil",
      servings: "1 porção",
      ingredients: [
        "3 colheres de sopa de aveia em flocos",
        "150ml de leite (ou bebida vegetal)",
        "1 colher de café de canela em pó",
        "1 colher de chá de mel ou xarope de bordo",
        "1 pitadinha mínima de sal"
      ],
      steps: [
        "Em uma panela pequena, coloque a aveia, o leite, o sal e a canela.",
        "Ligue o fogo médio e mexa constantemente com uma espátula ou fouet.",
        "Assim que levantar fervura, abaixe o fogo e continue mexendo por 3 a 4 minutos até engrossar.",
        "Transfira para uma tigela bonita e adicione o mel por cima e frutas frescas se desejar."
      ],
      tip: "A pitada sutil de sal é o segredo dos chefs: ela equilibra a doçura e realça o sabor tostado da aveia.",
      substitutions: "Experimente fazer com leite de coco culinário diluído para um toque exótico e hipercremoso.",
      tags: ["café da manhã", "rápido", "até 20 minutos", "fácil", "poucos ingredientes"],
      videoUrl: ""
    },
    {
      id: 7,
      name: "Omelete de queijo e tomate",
      category: "Café da manhã",
      description: "Macio por dentro, recheio derretido com o frescor do tomate e toque de orégano.",
      image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80",
      time: "8 min",
      difficulty: "Fácil",
      servings: "1 porção",
      ingredients: [
        "2 ovos inteiros",
        "1 colher de sopa de água ou leite",
        "30g de queijo branco (minas, muçarela ou ricota)",
        "1/2 tomate picado sem sementes",
        "Orégano seco a gosto",
        "Sal e pimenta-do-reino moída a gosto",
        "1 fio de azeite"
      ],
      steps: [
        "Bata os ovos com a água, sal e pimenta com um garfo até espumar levemente.",
        "Aqueça o azeite em uma frigideira antiaderente pequena em fogo médio-baixo.",
        "Despeje os ovos batidos e deixe as bordas firmarem por 1 minuto.",
        "Espalhe o queijo, o tomate picado e o orégano sobre uma metade do omelete.",
        "Dobre a outra metade por cima, desligue o fogo e deixe abafado por 1 minuto para o queijo derreter."
      ],
      tip: "Adicionar uma colher de água aos ovos cria vapor na frigideira, deixando a omelete muito mais fofa.",
      substitutions: "Substitua o tomate por espinafre refogado ou cogumelos frescos salteados.",
      tags: ["café da manhã", "proteína", "rápido", "até 20 minutos", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 8,
      name: "Ovos mexidos cremosos",
      category: "Café da manhã",
      description: "Técnica francesa adaptada para o dia a dia. Textura aveludada sem ressecar.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      time: "6 min",
      difficulty: "Fácil",
      servings: "1 porção",
      ingredients: [
        "2 ovos caipiras frescos",
        "1 colher de chá de manteiga de boa qualidade",
        "1 colher de sopa de requeijão light ou iogurte natural",
        "Cebolinha fresca picadinha",
        "Sal e pimenta moída na hora a gosto"
      ],
      steps: [
        "Quebre os ovos em uma tigela e misture delicadamente sem bater demais.",
        "Derreta a manteiga em fogo baixo na frigideira antiaderente.",
        "Despeje os ovos e empurre suavemente da borda para o centro com uma espátula de silicone.",
        "Quando estiver quase cozido, mas ainda úmido e brilhante, desligue o fogo.",
        "Incorpore a colher de requeijão ou iogurte, salgue e salpique a cebolinha fresca."
      ],
      tip: "Nunca salgue os ovos muito antes de levar à frigideira, pois o sal quebra a umidade e deixa os ovos aguados.",
      substitutions: "Para versão sem lactose, use azeite de oliva extravirgem no lugar da manteiga e creme vegetal.",
      tags: ["café da manhã", "proteína", "rápido", "até 20 minutos", "fácil", "poucos ingredientes", "sem forno"],
      videoUrl: ""
    },
    {
      id: 9,
      name: "Tapioca com frango e queijo",
      category: "Café da manhã",
      description: "A clássica tapioca brasileira com recheio proteico suculento e queijo derretido.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      time: "10 min",
      difficulty: "Fácil",
      servings: "1 unidade",
      ingredients: [
        "3 a 4 colheres de sopa de goma hidratada para tapioca",
        "3 colheres de sopa de frango cozido e desfiado temperado",
        "1 fatia de queijo muçarela ou queijo minas padrão",
        "1 colher de café de sementes de chia ou gergelim (opcional)",
        "Orégano a gosto"
      ],
      steps: [
        "Peneire a goma de tapioca diretamente sobre a frigideira fria e espalhe em formato circular.",
        "Salpique a chia ou gergelim sobre a goma para agregar fibras.",
        "Ligue o fogo médio e deixe firmar por cerca de 1 minuto e meio até soltar do fundo.",
        "Distribua o frango desfiado aquecido, o queijo e o orégano em uma metade.",
        "Dobre a tapioca ao meio, abaixe o fogo por 30 segundos até o queijo fundir e sirva imediatamente."
      ],
      tip: "Adicionar chia ou gergelim na massa reduz o índice glicêmico da tapioca e prolonga a saciedade.",
      substitutions: "O frango pode ser substituído por ovos mexidos ou carne moída magra refogada.",
      tags: ["café da manhã", "proteína", "frango", "lanches", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 10,
      name: "Pão de queijo de frigideira",
      category: "Café da manhã",
      description: "Crocante por fora e puxa-puxa por dentro. Feito em minutos sem precisar ligar o forno.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      time: "7 min",
      difficulty: "Fácil",
      servings: "1 unidade generosa",
      ingredients: [
        "1 ovo inteiro",
        "2 colheres de sopa de polvilho doce ou azedo",
        "1 colher de sopa de requeijão ou iogurte natural",
        "2 colheres de sopa de queijo parmesão ralado ou muçarela",
        "1 pitada de sal"
      ],
      steps: [
        "Em uma tigela pequena, bata o ovo com o sal e o requeijão até ficar homogêneo.",
        "Adicione o polvilho e misture bem até dissolver todo o pó.",
        "Misture a maior parte do queijo ralado na massa.",
        "Despeje na frigideira untada em fogo baixo e tampe.",
        "Vire quando dourar por baixo e doure o outro lado até ficar crocante."
      ],
      tip: "O polvilho azedo traz um sabor mais pronunciado e levemente aerado; o doce dá textura mais macia e uniforme.",
      substitutions: "Pode usar tapioca no lugar do polvilho caso não tenha polvilho em casa.",
      tags: ["café da manhã", "lanches", "rápido", "até 20 minutos", "sem forno", "fácil", "poucos ingredientes"],
      videoUrl: ""
    },

    // DOCES (11 - 20)
    {
      id: 11,
      name: "Brownie de banana e cacau",
      category: "Doces",
      description: "Sem farinha de trigo e sem açúcar refinado. Fudgy, denso e repleto de sabor de cacau.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      time: "20 min",
      difficulty: "Fácil",
      servings: "4 porções",
      ingredients: [
        "2 bananas bem maduras",
        "2 ovos",
        "4 colheres de sopa de cacau em pó 100%",
        "2 colheres de sopa de pasta de amendoim ou óleo de coco",
        "1 colher de chá de fermento em pó",
        "Chocolate 70% picado para cobertura"
      ],
      steps: [
        "Pré-aqueça o forno a 180°C ou utilize a airfryer a 160°C.",
        "Amasse muito bem as bananas até virarem um purê homogêneo.",
        "Adicione os ovos, a pasta de amendoim e o cacau em pó. Misture com vigor.",
        "Incorpore o fermento delicadamente.",
        "Despeje em refratário pequeno untado, cubra com pedacinhos de chocolate e asse por 15 a 18 minutos."
      ],
      tip: "Não asse em excesso! O brownie deve sair do forno ligeiramente úmido no centro para ficar cremoso ao esfriar.",
      substitutions: "Pode assar na airfryer em forma de silicone por 12 a 14 minutos a 160°C.",
      tags: ["doces", "chocolate", "banana", "sobremesa", "fácil"],
      videoUrl: ""
    },
    {
      id: 12,
      name: "Brownie de aveia e chocolate",
      category: "Doces",
      description: "Rico em fibras, casquinha crocante e miolo aveludado que mata a vontade de doce com equilíbrio.",
      image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80",
      time: "25 min",
      difficulty: "Fácil",
      servings: "6 fatias",
      ingredients: [
        "1 xícara de farinha de aveia",
        "1/2 xícara de cacau em pó 100%",
        "2 ovos inteiros",
        "1/3 xícara de mel ou melado",
        "1/4 xícara de óleo de coco ou manteiga derretida",
        "50g de chocolate amargo picado",
        "1 colher de café de fermento"
      ],
      steps: [
        "Bata os ovos com o mel e o óleo de coco até emulsionar.",
        "Adicione a farinha de aveia e o cacau, mexendo com uma espátula até ficar uma massa pesada e brilhante.",
        "Misture metade do chocolate picado e o fermento.",
        "Transfira para forma quadrada untada ou forrada com papel manteiga.",
        "Espalhe o restante do chocolate por cima e asse a 180°C por cerca de 18 a 20 minutos."
      ],
      tip: "Deixe esfriar completamente antes de cortar em quadrados para que os pedaços fiquem perfeitos.",
      substitutions: "Use eritritol ou xilitol no lugar do mel caso prefira versão sem açúcares naturais.",
      tags: ["doces", "chocolate", "sobremesa", "fácil"],
      videoUrl: ""
    },
    {
      id: 13,
      name: "Cookie de aveia e chocolate",
      category: "Doces",
      description: "Crocante nas bordas e macio no centro. Perfeito para o lanche da tarde acompanhado de café.",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
      time: "18 min",
      difficulty: "Fácil",
      servings: "6 cookies médios",
      ingredients: [
        "1 xícara de aveia em flocos",
        "1 ovo",
        "2 colheres de sopa de pasta de amendoim ou óleo de coco",
        "2 colheres de sopa de mel",
        "40g de chocolate meio amargo ou 70% picado",
        "1 pitada de sal marinho"
      ],
      steps: [
        "Misture o ovo, a pasta de amendoim e o mel em uma tigela.",
        "Acrescente a aveia e o sal, mexendo até formar uma massinha moldável.",
        "Adicione as gotas ou pedaços de chocolate.",
        "Modele bolinhas, disponha em assadeira com papel manteiga e aperte levemente com os dedos.",
        "Asse a 180°C por 12 a 15 minutos até as bordas dourarem."
      ],
      tip: "A pitadinha de flor de sal ou sal marinho no topo do cookie antes de assar cria um contraste incrível com o chocolate.",
      substitutions: "Acrescente nozes ou castanhas picadas para dar crocância extra.",
      tags: ["doces", "chocolate", "lanches", "rápido", "até 20 minutos", "fácil"],
      videoUrl: ""
    },
    {
      id: 14,
      name: "Cookie de banana",
      category: "Doces",
      description: "Apenas 2 ingredientes essenciais para um snack saudável, natural e sem glúten.",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
      time: "15 min",
      difficulty: "Fácil",
      servings: "4 a 5 unidades",
      ingredients: [
        "1 banana grande bem madura",
        "1/2 xícara de aveia em flocos finos",
        "Canela em pó a gosto (opcional)",
        "Uvas passas ou gotas de chocolate (opcional)"
      ],
      steps: [
        "Amasse a banana com um garfo até formar um purê bem liso.",
        "Adicione a aveia e a canela, misturando até obter consistência firme de massa.",
        "Com o auxílio de uma colher, distribua porções em uma assadeira untada ou na cesta da airfryer.",
        "Asse no forno a 180°C por 12 minutos ou na airfryer a 160°C por 8 minutos até firmar."
      ],
      tip: "Quanto mais madura a banana estiver, mais doce e saboroso o cookie ficará sem precisar de adoçantes.",
      substitutions: "Adicione sementes de girassol ou gergelim para elevar os micronutrientes.",
      tags: ["doces", "banana", "poucos ingredientes", "rápido", "até 20 minutos", "fácil"],
      videoUrl: ""
    },
    {
      id: 15,
      name: "Brigadeiro de cacau",
      category: "Doces",
      description: "Versão saudável do doce mais amado do Brasil, feito à base de banana e cacau sem leite condensado.",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
      time: "10 min",
      difficulty: "Fácil",
      servings: "6 docinhos",
      ingredients: [
        "2 bananas bem maduras",
        "2 colheres de sopa cheias de cacau em pó 100%",
        "2 colheres de sopa de leite em pó (desnatado ou vegetal)",
        "Cacau em pó ou granulado 70% para enrolar"
      ],
      steps: [
        "Coloque as bananas no micro-ondas por 1 minuto e meio para amolecer e caramelizar.",
        "Amasse vigorosamente ainda quentes até virar uma pasta bem fina.",
        "Junte o cacau e o leite em pó, misturando com colher até soltar do fundo da tigela.",
        "Leve ao congelador por 20 minutos para dar ponto de enrolar.",
        "Unte as mãos com um pingo de água ou óleo de coco, boleie e passe no cacau em pó."
      ],
      tip: "Aquecer a banana no micro-ondas quebra o amido e concentra o açúcar natural, garantindo o ponto perfeito do brigadeiro.",
      substitutions: "Para versão vegana, use leite de coco em pó em vez de leite de vaca em pó.",
      tags: ["doces", "chocolate", "banana", "sobremesa", "sem forno", "rápido", "até 20 minutos", "poucos ingredientes", "fácil"],
      videoUrl: ""
    },
    {
      id: 16,
      name: "Trufa de chocolate e aveia",
      category: "Doces",
      description: "Textura densa e sedosa com recheio nutritivo e cobertura elegante de cacau puro.",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
      time: "15 min",
      difficulty: "Fácil",
      servings: "8 trufas",
      ingredients: [
        "1/2 xícara de aveia em flocos finos",
        "2 colheres de sopa de pasta de amendoim ou castanha",
        "2 colheres de sopa de cacau em pó 100%",
        "2 colheres de sopa de mel ou xarope de agave",
        "1 colher de sopa de água quente (se necessário para ponto)",
        "Cacau em pó para finalizar"
      ],
      steps: [
        "Em um bowl, misture a aveia, o cacau, a pasta de amendoim e o mel.",
        "Aperte e misture com as mãos até formar uma massa densa e maleável.",
        "Se ficar muito seca, pingue a água quente aos poucos.",
        "Faça bolinhas uniformes e passe em uma tigela com cacau em pó 100%.",
        "Sirva gelado ou em temperatura ambiente."
      ],
      tip: "Guarde as trufas na geladeira em pote hermético por até 7 dias para ter sempre um docinho pronto.",
      substitutions: "A pasta de amendoim pode ser trocada por pasta de amêndoas ou tahine.",
      tags: ["doces", "chocolate", "sobremesa", "sem forno", "rápido", "até 20 minutos", "poucos ingredientes", "fácil"],
      videoUrl: ""
    },
    {
      id: 17,
      name: "Barrinha caseira de aveia",
      category: "Doces",
      description: "Muito superior às barrinhas industriais. Sem conservantes, crocante e cheia de energia boa.",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
      time: "20 min",
      difficulty: "Fácil",
      servings: "6 barrinhas",
      ingredients: [
        "1 xícara de aveia em flocos grossos",
        "3 colheres de sopa de mel",
        "2 colheres de sopa de pasta de amendoim",
        "2 colheres de sopa de castanhas ou amêndoas picadas",
        "1 colher de sopa de sementes de abóbora ou girassol",
        "1 pitadinha de canela"
      ],
      steps: [
        "Aqueça o mel e a pasta de amendoim por 20 segundos para amolecerem.",
        "Em uma vasilha, adicione a aveia, as castanhas, sementes e canela.",
        "Verta os líquidos e mexa até que todos os grãos estejam envolvidos.",
        "Pressione firmemente a mistura em um refratário retangular forrado com papel vegetal.",
        "Leve ao forno a 170°C por 15 minutos até dourar levemente. Deixe esfriar e corte em barras."
      ],
      tip: "Pressionar com as costas de uma colher com força é essencial para a barra não esfarelar ao cortar.",
      substitutions: "Acrescente cramberries ou damascos picados para um toque cítrico adocicado.",
      tags: ["doces", "lanches", "até 20 minutos", "fácil"],
      videoUrl: ""
    },
    {
      id: 18,
      name: "Bolinho de chocolate de caneca",
      category: "Doces",
      description: "Pronto em apenas 2 minutos no micro-ondas. Massa fofa, quentinha e reconfortante.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      time: "4 min",
      difficulty: "Fácil",
      servings: "1 caneca",
      ingredients: [
        "1 ovo",
        "1 colher de sopa de cacau em pó 100%",
        "2 colheres de sopa de farinha de aveia",
        "1 colher de sopa de leite",
        "1 colher de sopa de mel ou adoçante culinário",
        "1/2 colher de chá de fermento em pó",
        "1 quadradinho de chocolate amargo para o centro"
      ],
      steps: [
        "Na própria caneca (apta para micro-ondas), bata o ovo com o leite e o mel usando um garfo.",
        "Acrescente o cacau e a aveia, misturando até ficar sem gruminhos.",
        "Adicione o fermento e mexa delicadamente.",
        "Afunde o pedaço de chocolate no centro da massa.",
        "Leve ao micro-ondas em potência alta por 1 minuto e 30 segundos e consuma ainda morno."
      ],
      tip: "O quadradinho de chocolate afundado no centro derrete e se transforma em uma calda quente cremosa.",
      substitutions: "Pode ser feito na airfryer a 160°C por 8 minutos em ramequim cerâmico.",
      tags: ["doces", "chocolate", "rápido", "até 20 minutos", "poucos ingredientes", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 19,
      name: "Muffin de banana e canela",
      category: "Doces",
      description: "Bolinhos aromáticos e fofinhos, ideais para preparar no fim de semana e consumir durante a semana.",
      image: "https://images.unsplash.com/photo-1587536849024-da8ef50b1db8?auto=format&fit=crop&w=800&q=80",
      time: "25 min",
      difficulty: "Fácil",
      servings: "6 muffins",
      ingredients: [
        "2 bananas maduras amassadas",
        "2 ovos inteiros",
        "1 xícara de farelo ou farinha de aveia",
        "1 colher de chá de canela em pó",
        "1 colher de sopa de óleo de coco",
        "1 colher de sopa de fermento químico em pó"
      ],
      steps: [
        "Amasse as bananas e misture com os ovos e o óleo de coco.",
        "Adicione a aveia e a canela, misturando com uma espátula até incorporar.",
        "Acrescente o fermento em pó e mexa suavemente.",
        "Distribua em forminhas de silicone para muffin.",
        "Asse a 180°C por cerca de 20 minutos até enfiar um palito e sair limpo."
      ],
      tip: "Pode congelar os muffins assados por até 30 dias. Para consumir, bastam 30 segundos no micro-ondas.",
      substitutions: "Adicione maçã em cubinhos ou nozes trituradas à massa para dar textura extra.",
      tags: ["doces", "banana", "café da manhã", "lanches", "fácil"],
      videoUrl: ""
    },
    {
      id: 20,
      name: "Muffin de chocolate",
      category: "Doces",
      description: "Massa escura, intensa e aerada com pequenas gotas derretidas de chocolate meio amargo.",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80",
      time: "25 min",
      difficulty: "Fácil",
      servings: "6 muffins",
      ingredients: [
        "2 ovos",
        "1 banana madura amassada",
        "3/4 xícara de farinha de aveia",
        "3 colheres de sopa de cacau em pó 100%",
        "3 colheres de sopa de mel ou açúcar demerara",
        "1/4 xícara de leite",
        "1 colher de sopa de fermento",
        "30g de gotas de chocolate 70%"
      ],
      steps: [
        "No liquidificador ou na tigela, bata os ovos, a banana, o leite e o mel.",
        "Transfira para uma bacia e adicione a aveia e o cacau peneirado.",
        "Misture o fermento e metade das gotas de chocolate.",
        "Preencha 3/4 das forminhas de cupcake e salpique o restante do chocolate por cima.",
        "Asse em forno pré-aquecido a 180°C por 18 a 20 minutos."
      ],
      tip: "Peneirar o cacau em pó evita pelotas amargas e deixa o muffin com aspecto profissional.",
      substitutions: "Pode usar farinha de arroz no lugar da aveia para versão sem contaminação cruzada de glúten.",
      tags: ["doces", "chocolate", "sobremesa", "fácil"],
      videoUrl: ""
    },

    // SOBREMESAS (21 - 30)
    {
      id: 21,
      name: "Mousse de chocolate com iogurte",
      category: "Sobremesas",
      description: "Cremoso, aveludado e com equilíbrio sublime entre o amargo do cacau e o frescor do iogurte.",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
      time: "8 min (+ geladeira)",
      difficulty: "Fácil",
      servings: "2 taças",
      ingredients: [
        "1 pote (170g) de iogurte grego natural sem açúcar",
        "80g de chocolate amargo 70% derretido",
        "1 colher de sopa de mel ou melado (opcional)",
        "Raspas de chocolate ou cacau para servir"
      ],
      steps: [
        "Derreta o chocolate 70% em banho-maria ou no micro-ondas de 30 em 30 segundos mexendo sempre.",
        "Deixe o chocolate amornar por 2 minutos para não talhar o iogurte.",
        "Adicione o iogurte grego em temperatura ambiente e o mel ao chocolate derretido.",
        "Bata vigorosamente com um fouet até formar um creme aerado, uniforme e reluzente.",
        "Divida em duas taças e refrigere por pelo menos 1 hora antes de servir."
      ],
      tip: "Utilize o iogurte em temperatura ambiente. Se estiver muito gelado, o chocolate endurece em pedacinhos antes de emulsionar.",
      substitutions: "Pode usar chocolate 85% para um sabor ainda mais gastronômico e menos adocicado.",
      tags: ["sobremesas", "chocolate", "rápido", "até 20 minutos", "poucos ingredientes", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 22,
      name: "Mousse de maracujá",
      category: "Sobremesas",
      description: "O contraste perfeito entre acidez tropical e cremosidade láctea em uma versão leve e funcional.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      time: "10 min (+ geladeira)",
      difficulty: "Fácil",
      servings: "3 porções",
      ingredients: [
        "Polpa concentrada de 2 maracujás frescos",
        "1 xícara de iogurte grego natural",
        "4 colheres de sopa de leite em pó desnatado",
        "2 colheres de sopa de mel ou adoçante a gosto",
        "Sementinhas de maracujá para decorar"
      ],
      steps: [
        "Bata no liquidificador a polpa de maracujá coada (reserve 1 colher com sementes para calda).",
        "Junte o iogurte grego, o leite em pó e o mel.",
        "Bata em velocidade alta por 3 minutos até ficar muito denso e espumoso.",
        "Coloque em tacinhas e cubra com as sementes reservadas.",
        "Deixe gelar por 2 horas até adquirir consistência de mousse firme."
      ],
      tip: "O leite em pó atua como espessante natural sem necessidade de gelatina incolor.",
      substitutions: "Pode ser feito com suco concentrado de limão siciliano para uma mousse de limão irresistível.",
      tags: ["sobremesas", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 23,
      name: "Creme de morango com iogurte",
      category: "Sobremesas",
      description: "Lembrança de infância na versão mais pura possível. Cor rosada natural e sabor refrescante.",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
      time: "6 min",
      difficulty: "Fácil",
      servings: "2 porções",
      ingredients: [
        "1 xícara de morangos congelados",
        "1 pote de iogurte natural integral bem gelado",
        "1 colher de sopa de mel ou estévia",
        "Morangos frescos fatiados para guarnecer",
        "Folhas de hortelã fresca"
      ],
      steps: [
        "Coloque os morangos congelados, o iogurte e o mel no processador ou liquidificador potente.",
        "Processe na função pulsar até que os morangos se desmanchem em um creme espesso estilo sorbet.",
        "Distribua em copos baixos ou taças.",
        "Finalize com morangos frescos picados e folhas de hortelã.",
        "Sirva imediatamente para aproveitar a consistência aveludada."
      ],
      tip: "Usar o morango congelado é o truque de ouro para conseguir consistência de sobremesa gelada sem adicionar gelo.",
      substitutions: "Pode misturar mirtilos ou framboesas para um sabor de frutas vermelhas mais pronunciado.",
      tags: ["sobremesas", "rápido", "até 20 minutos", "poucos ingredientes", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 24,
      name: "Morango com chocolate",
      category: "Sobremesas",
      description: "A clássica sofisticação gastronômica com casquinha estaladiça de chocolate amargo.",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
      time: "10 min",
      difficulty: "Fácil",
      servings: "2 porções",
      ingredients: [
        "1 caixa de morangos frescos e firmes",
        "70g de chocolate 70% ou 85% de cacau",
        "1 colher de café de óleo de coco (para brilho)",
        "Castanhas trituradas ou flor de sal (opcional)"
      ],
      steps: [
        "Lave bem os morangos e seque-os um a um delicadamente com papel toalha (devem estar 100% secos).",
        "Derreta o chocolate amargo com o óleo de coco em banho-maria até ficar bem fluído.",
        "Segure cada morango pela folhinha verde e mergulhe até 3/4 no chocolate derretido.",
        "Deite os morangos sobre uma folha de papel manteiga e salpique castanhas se desejar.",
        "Leve à geladeira por 10 minutos até a casquinha cristalizar e ficar crocante."
      ],
      tip: "A umidade é inimiga do chocolate: os morangos precisam estar totalmente secos para a casquinha aderir perfeitamente.",
      substitutions: "Faça o mesmo processo com rodelas de banana ou gomos de tangerina.",
      tags: ["sobremesas", "chocolate", "rápido", "até 20 minutos", "poucos ingredientes", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 25,
      name: "Cheesecake no pote",
      category: "Sobremesas",
      description: "Camadas visuais elegantes: base crocante de aveia e amêndoas, creme aveludado e geleia artesanal.",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
      time: "15 min",
      difficulty: "Fácil",
      servings: "2 potes",
      ingredients: [
        "4 colheres de sopa de farelo de aveia ou biscoito integral triturado",
        "1 colher de sopa de óleo de coco derretido",
        "150g de ricota fresca cremosa ou creme de ricota light",
        "2 colheres de sopa de iogurte grego",
        "1 colher de sopa de mel e gotas de baunilha",
        "4 colheres de sopa de morangos picados cozidos com um pingo de água (calda)"
      ],
      steps: [
        "Misture a aveia com o óleo de coco e acomode no fundo de dois potes de vidro, pressionando bem.",
        "No processador ou garfo, bata a ricota com o iogurte, mel e baunilha até virar uma pasta acetinada.",
        "Despeje a camada de creme branco sobre a base crocante.",
        "Em uma panelinha rápida, cozinhe os morangos por 3 minutos até virarem uma geleia rústica.",
        "Cubra os potes com a calda de frutas vermelhas e sirva gelado."
      ],
      tip: "Montar em potinhos de vidro pequenos permite servir individualmente como em confeitarias gourmet.",
      substitutions: "Pode usar calda de goiabada sem açúcar ou geleia de damasco caseira.",
      tags: ["sobremesas", "proteína", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 26,
      name: "Pavê de chocolate",
      category: "Sobremesas",
      description: "Versão equilibrada em camadas de creme de cacau suave e biscoitos integrais hidratados.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      time: "15 min (+ geladeira)",
      difficulty: "Fácil",
      servings: "4 porções",
      ingredients: [
        "1 xícara de leite ou bebida de castanhas",
        "2 colheres de sopa de amido de milho",
        "2 colheres de sopa cheias de cacau 100%",
        "2 colheres de sopa de mel ou demerara",
        "8 biscoitos integrais simples",
        "Raspas de chocolate meio amargo"
      ],
      steps: [
        "Em uma panela fria, dissolva o amido e o cacau no leite com o mel.",
        "Leve ao fogo médio mexendo sempre até engrossar em ponto de mingau aveludado.",
        "Em um refratário pequeno, faça uma camada do creme de chocolate.",
        "Passe os biscoitos rapidamente em um pouco de leite e faça a segunda camada.",
        "Repita as camadas terminando em creme de chocolate e finalize com raspas. Gele por 2 horas."
      ],
      tip: "Umedeça os biscoitos em café forte frio se quiser um toque aromático inspirado no clássico tiramisù.",
      substitutions: "Use fatias finas de bolo caseiro de banana ou aveia no lugar dos biscoitos.",
      tags: ["sobremesas", "chocolate", "até 20 minutos", "fácil"],
      videoUrl: ""
    },
    {
      id: 27,
      name: "Banoffee no pote",
      category: "Sobremesas",
      description: "Camadas dos sonhos: base de aveia tostada, banana fatiada, doce de leite leve e toque de canela.",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
      time: "12 min",
      difficulty: "Fácil",
      servings: "2 potes",
      ingredients: [
        "1 banana madura em rodelas",
        "3 colheres de sopa de doce de leite sem açúcar ou purê de tâmaras",
        "4 colheres de sopa de farinha ou flocos de aveia tostados",
        "3 colheres de sopa de iogurte grego consistente",
        "Canela em pó e raspas de chocolate amargo para finalizar"
      ],
      steps: [
        "Na frigideira seca por 2 minutos, toste a aveia com uma pitada de canela até ficar dourada.",
        "Distribua metade da aveia tostada no fundo dos potes.",
        "Acrescente as rodelas de banana e cubra com o doce de leite.",
        "Coloque uma camada generosa de iogurte grego batido para fazer o papel do chantilly.",
        "Polvilhe bastante canela e raspas de chocolate por cima e sirva imediatamente."
      ],
      tip: "O iogurte grego bem gelado imita a sensação do chantilly tradicional com muito mais leveza e proteínas.",
      substitutions: "O purê de tâmaras hidratadas com uma pitadinha de flor de sal substitui o doce de leite com maestria.",
      tags: ["sobremesas", "banana", "rápido", "até 20 minutos", "sem forno", "poucos ingredientes", "fácil"],
      videoUrl: ""
    },
    {
      id: 28,
      name: "Pudim de iogurte",
      category: "Sobremesas",
      description: "Sobremesa leve, geladinha e translúcida com textura sedosa e sutil calda dourada de mel.",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
      time: "10 min (+ geladeira)",
      difficulty: "Fácil",
      servings: "4 porções",
      ingredients: [
        "2 potes (340g) de iogurte natural integral",
        "1/2 xícara de leite morno",
        "1 sachê (12g) de gelatina incolor sem sabor",
        "3 colheres de sopa de mel",
        "Gotas de extrato de baunilha"
      ],
      steps: [
        "Hidrate a gelatina incolor em 5 colheres de água fria e dissolva no leite morno.",
        "No liquidificador, junte o iogurte natural, o mel, a baunilha e o leite com a gelatina.",
        "Bata por 1 minuto apenas para homogeneizar sem criar excesso de bolhas.",
        "Verta em forminhas individuais levemente untadas com uma gota de óleo de coco.",
        "Leve para firmar na geladeira por pelo menos 3 horas antes de desenformar com um fio de mel."
      ],
      tip: "Passe uma faquinha de ponta redonda nas bordas da forminha para desenformar com facilidade e perfeição.",
      substitutions: "Sirva com calda de maracujá reduzida para um toque tropical ácido.",
      tags: ["sobremesas", "proteína", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 29,
      name: "Sorvete caseiro de banana",
      category: "Sobremesas",
      description: "O famoso 'nice cream'. Apenas 1 ingrediente base se transforma em um sorvete ultra cremoso.",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
      time: "5 min",
      difficulty: "Fácil",
      servings: "2 taças",
      ingredients: [
        "2 bananas bem maduras fatiadas e congeladas",
        "1 colher de sopa de pasta de amendoim ou cacau (opcional)",
        "2 colheres de sopa de leite (apenas para ajudar o processador)"
      ],
      steps: [
        "Retire as fatias de banana do congelador e aguarde 2 minutos para soltarem.",
        "Coloque no processador de alimentos ou liquidificador potente.",
        "Processe parando algumas vezes para empurrar as bordas com uma espátula.",
        "Após cerca de 2 a 3 minutos, a banana magicamente se transforma em uma massa cremosa idêntica a sorvete italiano.",
        "Sirva em seguida ou congele por 20 minutos para fazer bolas firmes."
      ],
      tip: "Congele as bananas já em rodelas e em pote aberto para que não congelem em um bloco único e duro.",
      substitutions: "Adicione morangos congelados junto para ter sorvete de banana com morango instantâneo.",
      tags: ["sobremesas", "banana", "rápido", "até 20 minutos", "poucos ingredientes", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 30,
      name: "Frozen yogurt de frutas vermelhas",
      category: "Sobremesas",
      description: "Refrescância máxima e cor viva. Cremoso, azedinho na medida certa e sem adição de gordura hidrogenada.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      time: "6 min",
      difficulty: "Fácil",
      servings: "2 porções",
      ingredients: [
        "1 xícara de frutas vermelhas congeladas (morangos, amoras, mirtilos)",
        "1 pote de iogurte grego natural gelado",
        "1 colher de sopa de mel ou xarope de agave",
        "Folhinhas de hortelã fresca para decorar"
      ],
      steps: [
        "Coloque as frutas congeladas no processador junto com o iogurte grego e o mel.",
        "Bata em pulsos rápidos até que tudo se integre em uma consistência aveludada e firme.",
        "Sirva em taças imediatamente com folhas de hortelã por cima."
      ],
      tip: "Consuma logo após bater para desfrutar da textura cremosa original de frozen yogurt.",
      substitutions: "Pode usar manga madura congelada para um frozen tropical amarelo dourado maravilhoso.",
      tags: ["sobremesas", "rápido", "até 20 minutos", "sem forno", "poucos ingredientes", "fácil"],
      videoUrl: ""
    },

    // LANCHES (31 - 38)
    {
      id: 31,
      name: "Sanduíche natural de frango",
      category: "Lanches",
      description: "Pão integral macio com patê leve de frango, cenoura ralada crocante e folhas frescas.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
      time: "10 min",
      difficulty: "Fácil",
      servings: "1 sanduíche generoso",
      ingredients: [
        "2 fatias de pão 100% integral ou multigrãos",
        "3 colheres de sopa de frango desfiado temperado",
        "1 colher de sopa cheia de requeijão light ou iogurte grego",
        "2 colheres de sopa de cenoura ralada bem fininha",
        "Folhas de rúcula ou alface fresca",
        "Fio de azeite e pimenta-do-reino a gosto"
      ],
      steps: [
        "Em um pratinho, misture o frango desfiado com o requeijão, azeite, pimenta e a cenoura ralada até virar um patê cremoso.",
        "Toste levemente as fatias de pão na frigideira se preferir uma casca crocante.",
        "Espalhe todo o patê de frango em uma das fatias.",
        "Acomode as folhas verdes frescas por cima.",
        "Feche com a outra fatia, corte na diagonal e sirva."
      ],
      tip: "A cenoura ralada crua adiciona água e crocância natural, mantendo o sanduíche úmido por horas mesmo embalado.",
      substitutions: "Substitua o requeijão por creme de ricota ou abacate amassado com gotas de limão.",
      tags: ["lanches", "proteína", "frango", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 32,
      name: "Wrap de frango",
      category: "Lanches",
      description: "Massa fininha e dourada enrolada com frango suculento, queijo e vegetais coloridos.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
      time: "12 min",
      difficulty: "Fácil",
      servings: "1 porção",
      ingredients: [
        "1 massa tipo tortilha integral (rap10 ou similar)",
        "4 colheres de sopa de frango desfiado aquecido",
        "1 fatia de queijo muçarela ou queijo minas",
        "Tomate em tirinhas",
        "Folhas de espinafre ou alface americana",
        "1 colher de chá de mostarda dijon ou iogurte temperado"
      ],
      steps: [
        "Aqueça a massa de wrap dos dois lados na frigideira por 30 segundos para ficar maleável.",
        "Passe a mostarda ou iogurte no centro da massa.",
        "Coloque o queijo, o frango desfiado quente, as tiras de tomate e as folhas verdes.",
        "Dobre a parte inferior para cima e enrole as laterais firmemente como um burrito.",
        "Volte à frigideira por 1 minuto com a emenda virada para baixo para selar e tostar."
      ],
      tip: "Colocar a emenda para baixo na frigideira quente 'cola' o wrap e evita que ele abra na hora de comer.",
      substitutions: "Pode usar folhas de couve crua inteira no lugar da tortilha para uma versão low-carb vegetal.",
      tags: ["lanches", "proteína", "frango", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 33,
      name: "Wrap de carne",
      category: "Lanches",
      description: "Carne moída ou em tiras bem temperadinha com especiarias, queijo e frescor da salada.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
      time: "15 min",
      difficulty: "Fácil",
      servings: "1 porção",
      ingredients: [
        "1 tortilha ou pão folha integral",
        "100g de carne moída magra refogada (com cebola, alho e páprica)",
        "1 fatia de queijo prato ou muçarela",
        "Fatias finas de cebola roxa e tomate",
        "Folhas de alface fresca crocante"
      ],
      steps: [
        "Refogue a carne moída com alho, cebola, cominho e páprica defumada até dourar.",
        "Aqueça rapidamente a tortilha na frigideira seca.",
        "Acomode a carne quente no centro e coloque o queijo por cima para derreter.",
        "Finalize com fatias finas de cebola roxa, tomate e alface.",
        "Enrole bem apertado e doure dos dois lados na frigideira."
      ],
      tip: "A páprica defumada dá um aroma de churrasco sem precisar de molhos artificiais calóricos.",
      substitutions: "Pode usar tirinhas de filé mignon ou alcatra grelhadas no lugar da carne moída.",
      tags: ["lanches", "proteína", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 34,
      name: "Crepioca de frango",
      category: "Lanches",
      description: "A massa elástica perfeita de ovo e tapioca, recheada com frango desfiado cremoso.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      time: "10 min",
      difficulty: "Fácil",
      servings: "1 crepioca farta",
      ingredients: [
        "1 ovo inteiro",
        "2 colheres de sopa de goma de tapioca",
        "1 pitada de sal e orégano",
        "3 colheres de sopa de frango desfiado refogado",
        "1 colher de sopa de requeijão light ou cottage"
      ],
      steps: [
        "Em uma tigelinha, bata o ovo, a tapioca, o sal e o orégano com um garfo até ficar homogêneo e sem grumos.",
        "Despeje a mistura em uma frigideira antiaderente média pré-aquecida em fogo baixo.",
        "Quando a massa firmar e as laterais se soltarem (cerca de 2 minutos), vire o lado.",
        "Misture o frango com o requeijão e coloque sobre metade da crepioca.",
        "Dobre ao meio como um pastelzinho e deixe mais 1 minuto para aquecer tudo junto."
      ],
      tip: "Bater bem a mistura até espumar ligeiramente garante uma massa mais fofa e macia.",
      substitutions: "Para mais fibras, adicione 1 colher de chá de sementes de linhaça dourada à massa.",
      tags: ["lanches", "proteína", "frango", "rápido", "até 20 minutos", "sem forno", "poucos ingredientes", "fácil"],
      videoUrl: ""
    },
    {
      id: 35,
      name: "Crepioca de queijo",
      category: "Lanches",
      description: "Crocante de queijo tostado na frigideira com massa macia. Pronta em menos de 8 minutos.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      time: "8 min",
      difficulty: "Fácil",
      servings: "1 crepioca",
      ingredients: [
        "1 ovo inteiro",
        "2 colheres de sopa de goma de tapioca",
        "1 colher de sopa de queijo parmesão ralado",
        "1 fatia de queijo muçarela ou queijo minas",
        "1 pitada de orégano seco"
      ],
      steps: [
        "Polvilhe o parmesão diretamente no fundo da frigideira antiaderente fria.",
        "Bata o ovo com a tapioca e o sal em um recipiente.",
        "Despeje delicadamente a mistura líquida por cima do queijo na frigideira e ligue o fogo baixo.",
        "O queijo vai criar uma casquinha dourada crocante incrível por baixo.",
        "Coloque a fatia de queijo e orégano no centro, dobre ao meio e sirva com o queijo esticando."
      ],
      tip: "A crosta de parmesão no fundo da frigideira transforma uma simples crepioca em um prato de bistrô.",
      substitutions: "Pode adicionar rodelas finas de tomate e manjericão para uma crepioca marguerita.",
      tags: ["lanches", "proteína", "café da manhã", "rápido", "até 20 minutos", "sem forno", "poucos ingredientes", "fácil"],
      videoUrl: ""
    },
    {
      id: 36,
      name: "Pizza de frigideira",
      category: "Lanches",
      description: "Massa caseira de aveia fina e crocante, molho de tomate caseiro e queijo derretido.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      time: "12 min",
      difficulty: "Fácil",
      servings: "1 pizza individual",
      ingredients: [
        "1 ovo",
        "2 colheres de sopa de farinha de aveia",
        "1 colher de sopa de água",
        "1 pitada de sal",
        "2 colheres de sopa de molho de tomate",
        "30g de muçarela ralada",
        "Rodelas de tomate e folhas de manjericão fresco",
        "Orégano a gosto"
      ],
      steps: [
        "Bata o ovo, a aveia, a água e o sal com um garfo até formar uma massa lisa.",
        "Despeje na frigideira untada em fogo baixo e doure o primeiro lado por 2 minutos.",
        "Vire a massa e desligue o fogo momentaneamente.",
        "Espalhe o molho de tomate, o queijo, o tomate e o orégano.",
        "Ligue em fogo bem baixinho, tampe a frigideira por 3 minutos até o queijo borbulhar e finalize com manjericão."
      ],
      tip: "Tampar a frigideira é crucial para que o calor retenha no topo e derreta o queijo antes da massa queimar.",
      substitutions: "Adicione atum escorrido ou frango desfiado para adicionar ainda mais proteína à pizza.",
      tags: ["lanches", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 37,
      name: "Pão de aveia na frigideira",
      category: "Lanches",
      description: "Massa leve que substitui o pão francês com maestria. Perfeito para rechear com o que quiser.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      time: "8 min",
      difficulty: "Fácil",
      servings: "1 pãozinho individual",
      ingredients: [
        "1 ovo",
        "2 colheres de sopa de farinha de aveia",
        "1 colher de sopa de iogurte natural ou água",
        "1/2 colher de café de fermento em pó",
        "1 pitada de sal",
        "Sementes de gergelim para finalizar"
      ],
      steps: [
        "Misture o ovo, o iogurte e o sal em uma tigela pequena.",
        "Adicione a farinha de aveia e o fermento, mexendo até ficar homogêneo.",
        "Aqueça uma frigideira antiaderente pequena untada com azeite em fogo mínimo.",
        "Despeje a massa, salpique gergelim por cima e tampe.",
        "Vire quando dourar por baixo e deixe mais 1 minuto e meio do outro lado."
      ],
      tip: "Corte o pãozinho ao meio na horizontal e recheie com queijo ou ovos mexidos enquanto estiver quentinho.",
      substitutions: "Adicione ervas finas desidratadas na massa para um sabor especial de pão de ervas.",
      tags: ["lanches", "café da manhã", "rápido", "até 20 minutos", "poucos ingredientes", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 38,
      name: "Bolinho salgado de frango",
      category: "Lanches",
      description: "Crocante por fora e macio por dentro. Rico em proteínas e sem farinha branca.",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      time: "20 min",
      difficulty: "Fácil",
      servings: "6 a 8 bolinhos",
      ingredients: [
        "1 xícara de frango cozido e desfiado fino",
        "1/2 xícara de batata doce ou inglesa amassada",
        "1 ovo",
        "2 colheres de sopa de farelo de aveia",
        "Cheiro-verde picadinho a gosto",
        "Sal, alho e pimenta a gosto"
      ],
      steps: [
        "Em uma tigela grande, junte o frango desfiado, a batata amassada, o ovo e os temperos.",
        "Acrescente o farelo de aveia aos poucos até a massa desgrudar das mãos.",
        "Modele pequenos bolinhos ou croquetes no tamanho desejado.",
        "Pincele com azeite e asse na airfryer a 180°C por 12 a 15 minutos até dourarem.",
        "Sirva com fatias de limão ou molho de iogurte com ervas."
      ],
      tip: "A batata amassada cria a liga perfeita sem necessitar de queijos gordurosos ou excesso de farinha.",
      substitutions: "Pode ser feito com mandioca (aipim) ou abóbora cabotiá cozida no lugar da batata.",
      tags: ["lanches", "proteína", "frango", "até 20 minutos", "fácil"],
      videoUrl: ""
    },

    // ALMOÇO & JANTAR (39 - 45)
    {
      id: 39,
      name: "Frango cremoso com milho",
      category: "Almoço & jantar",
      description: "Tiras douradas de peito de frango envolvidas em creme rústico de milho doce e requeijão.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      time: "20 min",
      difficulty: "Fácil",
      servings: "2 porções fartas",
      ingredients: [
        "350g de peito de frango cortado em cubos ou tiras",
        "1 lata ou espiga de milho verde cozido",
        "1/2 xícara de leite ou leite de coco",
        "2 colheres de sopa de requeijão light ou creme de ricota",
        "1 dente de alho picado e 1/2 cebola ralada",
        "1 colher de sopa de azeite",
        "Salsinha fresca, sal e pimenta-do-reino"
      ],
      steps: [
        "Bata metade do milho com o leite e o requeijão no liquidificador até obter um creme leve.",
        "Em uma panela funda, doure o alho e a cebola no azeite de oliva.",
        "Adicione o frango temperado com sal e pimenta e sele até dourar por completo.",
        "Junte a outra metade do milho em grãos inteiros e despeje o creme batido.",
        "Cozinhe em fogo médio por 5 minutos até encorpar e finalize com salsinha fresca."
      ],
      tip: "Bater metade do milho e deixar a outra metade inteira garante contraste espetacular entre cremosidade e textura.",
      substitutions: "Pode usar biomassa de banana verde para encorpar o molho em substituição ao requeijão.",
      tags: ["almoço & jantar", "proteína", "frango", "até 20 minutos", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 40,
      name: "Frango grelhado com legumes",
      category: "Almoço & jantar",
      description: "Peito de frango suculento com crosta dourada acompanhado de legumes coloridos salteados no azeite.",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
      time: "18 min",
      difficulty: "Fácil",
      servings: "2 porções",
      ingredients: [
        "2 filés médios de peito de frango (cerca de 300g)",
        "1 xícara de brócolis em buquês pequenos",
        "1/2 abobrinha em meia-lua",
        "1/2 cenoura em rodelas finas",
        "2 colheres de sopa de azeite de oliva",
        "Suco de 1/2 limão e 1 dente de alho amassado",
        "Ervas secas (alecrim, tomilho), sal e pimenta"
      ],
      steps: [
        "Tempere os filés de frango com limão, alho amassado, sal e pimenta-do-reino.",
        "Aqueça uma frigideira de ferro ou fundo grosso com 1 colher de azeite em fogo alto.",
        "Coloque os filés e grelhe por 4 minutos de cada lado sem mexer até criar uma crosta dourada suculenta. Reserve.",
        "Na mesma frigideira, adicione o restante do azeite e salteie os legumes em fogo médio.",
        "Pingue 2 colheres de água e tampe por 2 minutos para amaciar mantendo a crocância viva. Sirva junto."
      ],
      tip: "Não fure nem aperte o filé de frango enquanto grelha para preservar os sucos naturais da carne.",
      substitutions: "Adicione cogumelos frescos de paris ou pimentões amarelos para mais variedade.",
      tags: ["almoço & jantar", "proteína", "frango", "rápido", "até 20 minutos", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 41,
      name: "Strogonoff de frango",
      category: "Almoço & jantar",
      description: "Versão leve e sofisticada sem creme de leite pesado, com molho aveludado e champignon fresco.",
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
      time: "20 min",
      difficulty: "Fácil",
      servings: "2 a 3 porções",
      ingredients: [
        "400g de peito de frango cortado em cubos",
        "1 colher de sopa de azeite",
        "1/2 cebola picadinha e 2 dentes de alho",
        "2 colheres de sopa de extrato de tomate puro",
        "1 colher de sopa de mostarda dijon ou amarela",
        "1 xícara de iogurte natural integral em temperatura ambiente",
        "1/2 xícara de cogumelos frescos fatiados",
        "Sal e pimenta a gosto"
      ],
      steps: [
        "Aqueça o azeite e doure o frango em fogo alto até selar completamente. Adicione a cebola e o alho.",
        "Acrescente os cogumelos e refogue por 2 minutos.",
        "Adicione o extrato de tomate e a mostarda, misturando para envolver toda a carne.",
        "Abaixe o fogo para o mínimo ou desligue a panela.",
        "Incorpore o iogurte natural mexendo vigorosamente para criar um molho sedoso e aveludado sem talhar."
      ],
      tip: "O segredo para o iogurte não talhar é adicioná-lo em fogo desligado ou bem baixo com a panela já morna.",
      substitutions: "Creme de ricota light ou leite de coco culinário podem substituir o iogurte com excelente resultado.",
      tags: ["almoço & jantar", "proteína", "frango", "até 20 minutos", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 42,
      name: "Macarrão cremoso com frango",
      category: "Almoço & jantar",
      description: "Massa al dente envolvida em molho branco funcional com pedacinhos de frango e noz-moscada.",
      image: "https://images.unsplash.com/photo-1621996346565-e3d5d628178c?auto=format&fit=crop&w=800&q=80",
      time: "18 min",
      difficulty: "Fácil",
      servings: "2 porções",
      ingredients: [
        "160g de macarrão penne ou fusilli (integral ou grano duro)",
        "250g de frango em tiras já grelhado",
        "1 pote de creme de ricota light ou requeijão",
        "1/2 xícara da água do cozimento do macarrão",
        "1 pitada de noz-moscada ralada na hora",
        "1 colher de sopa de parmesão ralado",
        "Sal e pimenta a gosto"
      ],
      steps: [
        "Cozinhe o macarrão em água abundante e salgada até atingir o ponto al dente.",
        "Antes de escorrer, reserve meia xícara da água quente do cozimento.",
        "Em uma frigideira grande, aqueça as tiras de frango com o creme de ricota.",
        "Adicione a água reservada do macarrão e mexa até formar um molho aveludado e uniforme.",
        "Tempere com noz-moscada, pimenta e sal, junte o macarrão escorrido e misture bem. Polvilhe parmesão."
      ],
      tip: "A água do cozimento do macarrão contém amido e é o grande segredo italiano para encorpar e aveludar qualquer molho.",
      substitutions: "Use macarrão de arroz ou de lentilha para uma versão 100% sem glúten.",
      tags: ["almoço & jantar", "proteína", "frango", "até 20 minutos", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 43,
      name: "Arroz cremoso com frango",
      category: "Almoço & jantar",
      description: "Inspirado na galinhada e no risoto, prato único reconfortante com legumes e queijo.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
      time: "20 min",
      difficulty: "Fácil",
      servings: "2 a 3 porções",
      ingredients: [
        "2 xícaras de arroz cozido (integral ou branco)",
        "250g de frango cozido e desfiado",
        "1/2 cenoura ralada",
        "1/2 xícara de ervilhas frescas ou congeladas",
        "2 colheres de sopa de requeijão light",
        "1/2 xícara de caldo caseiro de legumes ou água morna",
        "Cúrcuma (açafrão-da-terra), cheiro-verde e sal"
      ],
      steps: [
        "Em uma panela média, refogue a cenoura e as ervilhas com um fio de azeite e cúrcuma por 2 minutos.",
        "Adicione o frango desfiado e o arroz cozido, misturando bem para que o arroz ganhe a cor dourada da cúrcuma.",
        "Acrescente o caldo morno e mexa em fogo brando.",
        "Quando o líquido reduzir pela metade, adicione o requeijão e desligue o fogo.",
        "Misture até ficar cremoso como um risoto e finalize com cheiro-verde picadinho."
      ],
      tip: "Perfeito para reaproveitar sobras de arroz da geladeira, transformando-as em uma refeição gourmet em minutos.",
      substitutions: "Pode adicionar cubinhos de queijo coalho ou minas na finalização.",
      tags: ["almoço & jantar", "proteína", "frango", "até 20 minutos", "fácil", "sem forno"],
      videoUrl: ""
    },
    {
      id: 44,
      name: "Escondidinho de frango",
      category: "Almoço & jantar",
      description: "Purê aveludado de batata ou abóbora cobrindo um recheio generoso de frango refogado e queijo gratinado.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      time: "25 min",
      difficulty: "Fácil",
      servings: "2 porções",
      ingredients: [
        "300g de batata-doce, batata-inglesa ou abóbora cabotiá cozida e amassada",
        "300g de peito de frango cozido, desfiado e temperado com tomate e cebola",
        "2 colheres de sopa de leite para dar ponto ao purê",
        "30g de queijo parmesão ralado ou muçarela",
        "Sal, pimenta e noz-moscada a gosto"
      ],
      steps: [
        "Prepare o purê misturando a batata amassada com o leite, sal e noz-moscada até ficar bem cremoso.",
        "Em um refratário pequeno (ou marmitinhas individuais), coloque todo o frango refogado bem suculento no fundo.",
        "Espalhe o purê por cima cobrindo todo o recheio com a ajuda de uma colher.",
        "Salpique o queijo parmesão ralado por toda a superfície.",
        "Leve ao forno alto pré-aquecido a 220°C ou na airfryer por 8 a 10 minutos até borbulhar e dourar o topo."
      ],
      tip: "Deixe o frango com um pouco de molho no fundo para que o escondidinho fique incrivelmente úmido ao partir.",
      substitutions: "Purê de mandioquinha (batata-baroa) ou couve-flor conferem toques sublimes à receita.",
      tags: ["almoço & jantar", "proteína", "frango", "fácil"],
      videoUrl: ""
    },
    {
      id: 45,
      name: "Bowl de frango, arroz e legumes",
      category: "Almoço & jantar",
      description: "Montagem moderna e equilibrada. Cores vibrantes, texturas contrastantes e tempero harmonioso.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      time: "15 min",
      difficulty: "Fácil",
      servings: "1 bowl individual generoso",
      ingredients: [
        "120g de peito de frango grelhado em tiras",
        "1/2 xícara de arroz integral ou sete grãos cozido",
        "1/2 xícara de brócolis cozido no vapor",
        "1/4 xícara de cenoura ralada",
        "1/4 de abacate fatiado ou cubos de manga",
        "1 colher de chá de sementes de gergelim tostado",
        "Molho: 1 colher de sopa de azeite, gotas de limão e pitada de sal"
      ],
      steps: [
        "Escolha uma tigela larga ou prato fundo bonito.",
        "Acomode o arroz cozido em um dos cantos do bowl.",
        "Ao lado, organize harmoniosamente as tiras de frango grelhado, os brócolis e a cenoura ralada em seções visíveis.",
        "Disponha as fatias de abacate ou manga no topo.",
        "Regue tudo com o molho de azeite e limão e finalize com o gergelim tostado por cima."
      ],
      tip: "A montagem setorizada dos ingredientes torna a refeição visualmente convidativa e apetitosa antes mesmo da primeira garfada.",
      substitutions: "Troque o arroz por quinoa cozida ou grão-de-bico para variar os carboidratos complexos.",
      tags: ["almoço & jantar", "proteína", "frango", "rápido", "até 20 minutos", "fácil", "sem forno"],
      videoUrl: ""
    },

    // BEBIDAS (46 - 50)
    {
      id: 46,
      name: "Smoothie de banana e morango",
      category: "Bebidas",
      description: "Cremoso, gelado e naturalmente doce. O par clássico de frutas em textura perfeita de shake.",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
      time: "5 min",
      difficulty: "Fácil",
      servings: "1 copo grande (350ml)",
      ingredients: [
        "1 banana madura congelada em rodelas",
        "5 morangos congelados",
        "150ml de leite (vegetal ou desnatado)",
        "1 colher de sopa de sementes de chia ou linhaça",
        "1 colher de chá de mel (opcional se as frutas estiverem bem maduras)"
      ],
      steps: [
        "Coloque o leite no copo do liquidificador primeiro (isso facilita o trabalho das lâminas).",
        "Adicione as rodelas de banana congelada e os morangos.",
        "Acrescente a chia e o mel se desejar.",
        "Bata em velocidade alta por 1 a 2 minutos até atingir consistência espessa e aveludada.",
        "Despeje em um copo alto e sirva imediatamente com canudo."
      ],
      tip: "Colocar o líquido antes dos ingredientes congelados evita que as lâminas do liquidificador travem.",
      substitutions: "Adicione 1 colher de iogurte grego para um smoothie ainda mais denso e proteico.",
      tags: ["bebidas", "banana", "café da manhã", "rápido", "até 20 minutos", "poucos ingredientes", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 47,
      name: "Vitamina de banana e aveia",
      category: "Bebidas",
      description: "A clássica vitamina brasileira das manhãs, potente em energia limpa e saciedade prolongada.",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
      time: "4 min",
      difficulty: "Fácil",
      servings: "1 copo (300ml)",
      ingredients: [
        "1 banana nanica ou prata bem madura",
        "2 colheres de sopa cheias de aveia em flocos finos",
        "200ml de leite gelado (ou bebida de aveia)",
        "1 colher de café de canela em pó",
        "3 pedras de gelo"
      ],
      steps: [
        "Descasque e quebre a banana dentro do copo do liquidificador.",
        "Junte a aveia, a canela, o leite bem gelado e as pedras de gelo.",
        "Bata por 2 minutos contínuos para aerar a mistura e triturar completamente a aveia.",
        "Sirva em seguida salpicando um toque extra de canela sobre a espuma."
      ],
      tip: "Bater por 2 minutos completos cria uma espuma densa no topo semelhante a um milkshake.",
      substitutions: "Acrescente 1 colher de pasta de amendoim para transformar em uma super vitamina pré-treino.",
      tags: ["bebidas", "banana", "café da manhã", "rápido", "até 20 minutos", "poucos ingredientes", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 48,
      name: "Smoothie de chocolate e banana",
      category: "Bebidas",
      description: "Sabor idêntico ao de sobremesa gourmet com os benefícios antioxidantes do cacau 100%.",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      time: "5 min",
      difficulty: "Fácil",
      servings: "1 copo (350ml)",
      ingredients: [
        "1 banana madura congelada",
        "1 colher de sopa cheia de cacau em pó 100%",
        "1 colher de sopa de pasta de amendoim",
        "180ml de leite vegetal ou desnatado",
        "1 pitadinha de canela ou essência de baunilha"
      ],
      steps: [
        "No liquidificador, coloque o leite e a pasta de amendoim.",
        "Adicione o cacau em pó, a baunilha e a banana congelada em pedaços.",
        "Bata até ficar completamente homogêneo, espesso e com aspecto brilhante de chocolate.",
        "Decore a borda do copo com um fio de pasta de amendoim ou cacau e sirva bem gelado."
      ],
      tip: "A pasta de amendoim confere densidade cremosa sem precisar de sorvete ou aditivos artificiais.",
      substitutions: "Adicione 1 scoop de proteína de chocolate para um shake pós-treino completo.",
      tags: ["bebidas", "chocolate", "banana", "doces", "rápido", "até 20 minutos", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 49,
      name: "Café gelado cremoso",
      category: "Bebidas",
      description: "Inspirado nas melhores cafeterias artesanais. Espuma sedosa de café com leite gelado e canela.",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
      time: "5 min",
      difficulty: "Fácil",
      servings: "1 copo (300ml)",
      ingredients: [
        "1 colher de sopa de café solúvel de boa qualidade",
        "1 colher de sopa de água bem quente",
        "1 colher de chá de mel, demerara ou adoçante",
        "150ml de leite ou bebida vegetal bem gelada",
        "Cubos de gelo",
        "Canela a gosto"
      ],
      steps: [
        "Em uma xícara ou copo pequeno, coloque o café solúvel, a água quente e o mel.",
        "Bata vigorosamente com um mini mixer elétrico ou garfo por 2 minutos até virar uma espuma cremosa dourada e volumosa.",
        "Em um copo alto, coloque os cubos de gelo e despeje o leite gelado.",
        "Coloque a espuma de café por cima com o auxílio de uma colher, criando duas camadas visuais lindas.",
        "Polvilhe canela e misture com canudo na hora de beber."
      ],
      tip: "A água deve estar quente para dissolver o café solúvel e permitir a formação da emulsão cremosa.",
      substitutions: "Pode adicionar gotas de baunilha ao leite para um iced vanilla latte artesanal.",
      tags: ["bebidas", "café da manhã", "rápido", "até 20 minutos", "poucos ingredientes", "sem forno", "fácil"],
      videoUrl: ""
    },
    {
      id: 50,
      name: "Chocolate quente cremoso",
      category: "Bebidas",
      description: "Espesso, aconchegante e com notas profundas de chocolate sem utilizar amido de milho artificial.",
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
      time: "8 min",
      difficulty: "Fácil",
      servings: "1 xícara grande",
      ingredients: [
        "200ml de leite (ou leite de amêndoas/aveia)",
        "1 colher de sopa cheia de cacau em pó 100%",
        "20g de chocolate 70% picado",
        "1 colher de chá de mel ou açúcar mascavo",
        "1 pitadinha de canela e 1 pitadinha mínima de sal"
      ],
      steps: [
        "Em uma panela pequena, coloque o leite, o cacau em pó e a canela.",
        "Ligue em fogo baixo e mexa com um batedor de arame (fouet) até o cacau dissolver completamente.",
        "Quando o leite começar a soltar vapor (sem ferver), adicione os pedacinhos de chocolate 70% e o mel.",
        "Continue mexendo delicadamente até o chocolate derreter por completo e o líquido encorpar e reluzir.",
        "Transfira para sua xícara favorita e aprecie morno."
      ],
      tip: "O chocolate 70% derretido no leite confere a manteiga de cacau que traz a densidade natural e o brilho característico das chocolatarias europeias.",
      substitutions: "Adicione uma ponta de colher de café solúvel para transformar em um autêntico mocha quente.",
      tags: ["bebidas", "chocolate", "doces", "rápido", "até 20 minutos", "poucos ingredientes", "fácil"],
      videoUrl: ""
    }
  ];

  const CATEGORIES_LIST = [
    { id: "cafe-da-manha", name: "Café da manhã", count: 10, icon: "☕" },
    { id: "doces", name: "Doces", count: 10, icon: "🍪" },
    { id: "sobremesas", name: "Sobremesas", count: 10, icon: "🍨" },
    { id: "lanches", name: "Lanches", count: 8, icon: "🥪" },
    { id: "almoco-jantar", name: "Almoço & jantar", count: 7, icon: "🥗" },
    { id: "bebidas", name: "Bebidas", count: 5, icon: "🥤" },
    { id: "ricas-em-proteina", name: "Ricas em proteína", count: 17, icon: "⚡" },
    { id: "ate-20-minutos", name: "Até 20 minutos", count: 44, icon: "⏱️" }
  ];

  // ==========================================
  // MACRONUTRIENTES ESTIMADOS PARA AS 50 RECEITAS
  // ==========================================
  const RECIPES_NUTRITION = {
    1: { calories: 215, protein: 13, carbs: 32, fat: 5 },
    2: { calories: 195, protein: 11, carbs: 27, fat: 5 },
    3: { calories: 220, protein: 12, carbs: 34, fat: 4 },
    4: { calories: 260, protein: 14, carbs: 42, fat: 5 },
    5: { calories: 275, protein: 16, carbs: 40, fat: 6 },
    6: { calories: 230, protein: 10, carbs: 38, fat: 4 },
    7: { calories: 245, protein: 18, carbs: 4, fat: 17 },
    8: { calories: 210, protein: 14, carbs: 2, fat: 16 },
    9: { calories: 290, protein: 26, carbs: 33, fat: 6 },
    10: { calories: 215, protein: 12, carbs: 22, fat: 9 },
    11: { calories: 165, protein: 6, carbs: 28, fat: 4 },
    12: { calories: 185, protein: 8, carbs: 26, fat: 6 },
    13: { calories: 140, protein: 5, carbs: 22, fat: 4 },
    14: { calories: 120, protein: 4, carbs: 24, fat: 2 },
    15: { calories: 95, protein: 4, carbs: 14, fat: 3 },
    16: { calories: 110, protein: 4, carbs: 16, fat: 4 },
    17: { calories: 170, protein: 7, carbs: 26, fat: 5 },
    18: { calories: 195, protein: 12, carbs: 24, fat: 6 },
    19: { calories: 155, protein: 6, carbs: 27, fat: 3 },
    20: { calories: 165, protein: 7, carbs: 25, fat: 5 },
    21: { calories: 160, protein: 14, carbs: 18, fat: 4 },
    22: { calories: 145, protein: 12, carbs: 20, fat: 2 },
    23: { calories: 135, protein: 13, carbs: 18, fat: 2 },
    24: { calories: 110, protein: 3, carbs: 16, fat: 4 },
    25: { calories: 220, protein: 16, carbs: 24, fat: 6 },
    26: { calories: 190, protein: 15, carbs: 24, fat: 4 },
    27: { calories: 205, protein: 11, carbs: 32, fat: 4 },
    28: { calories: 150, protein: 14, carbs: 16, fat: 3 },
    29: { calories: 130, protein: 3, carbs: 30, fat: 1 },
    30: { calories: 125, protein: 12, carbs: 18, fat: 1 },
    31: { calories: 280, protein: 28, carbs: 26, fat: 6 },
    32: { calories: 295, protein: 30, carbs: 28, fat: 7 },
    33: { calories: 330, protein: 29, carbs: 28, fat: 10 },
    34: { calories: 270, protein: 27, carbs: 22, fat: 8 },
    35: { calories: 240, protein: 16, carbs: 20, fat: 10 },
    36: { calories: 260, protein: 22, carbs: 24, fat: 8 },
    37: { calories: 190, protein: 12, carbs: 22, fat: 6 },
    38: { calories: 220, protein: 26, carbs: 12, fat: 7 },
    39: { calories: 340, protein: 38, carbs: 16, fat: 12 },
    40: { calories: 290, protein: 36, carbs: 14, fat: 8 },
    41: { calories: 320, protein: 37, carbs: 10, fat: 13 },
    42: { calories: 380, protein: 34, carbs: 42, fat: 9 },
    43: { calories: 360, protein: 32, carbs: 40, fat: 8 },
    44: { calories: 330, protein: 33, carbs: 32, fat: 7 },
    45: { calories: 350, protein: 35, carbs: 38, fat: 6 },
    46: { calories: 180, protein: 9, carbs: 32, fat: 2 },
    47: { calories: 220, protein: 11, carbs: 38, fat: 3 },
    48: { calories: 210, protein: 14, carbs: 34, fat: 3 },
    49: { calories: 95, protein: 6, carbs: 12, fat: 2 },
    50: { calories: 160, protein: 9, carbs: 20, fat: 5 }
  };

  // Enriquecer cada receita com dados nutricionais
  RECIPES_DATA.forEach(r => {
    const nut = RECIPES_NUTRITION[r.id] || { calories: 210, protein: 14, carbs: 24, fat: 6 };
    r.calories = nut.calories;
    r.protein = nut.protein;
    r.carbs = nut.carbs;
    r.fat = nut.fat;
  });

  // Auxiliar de escala de porções de ingredientes
  function scaleIngredient(text, factor) {
    if (factor === 1) return text;
    return text.replace(/^(\d+(?:[.,]\d+)?|\d+\/\d+)/, (match) => {
      let num;
      if (match.includes('/')) {
        const [n, d] = match.split('/').map(Number);
        num = (n / d) * factor;
      } else {
        num = parseFloat(match.replace(',', '.')) * factor;
      }
      return Number.isInteger(num) ? num : (Math.round(num * 10) / 10).toString().replace('.', ',');
    });
  }

  // Auxiliar de som para o timer de cozinha (Web Audio API)
  function playTimerChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {}
  }

  // ==========================================
  // 2. STORAGE (LOCALSTORAGE DOS FAVORITOS & TEMA)
  // ==========================================
  const FAVORITES_KEY = 'fitora_favorites_v1';
  const COOKED_KEY = 'fitora_cooked_v1';
  const THEME_KEY = 'fitora_theme_preference';

  const Storage = {
    // FAVORITOS
    getFavorites() {
      try {
        const data = localStorage.getItem(FAVORITES_KEY);
        return data ? JSON.parse(data).map(Number) : [];
      } catch (e) {
        console.error('Erro ao ler favoritos do localStorage', e);
        return [];
      }
    },

    isFavorite(id) {
      const numericId = Number(id);
      const favs = this.getFavorites();
      return favs.includes(numericId);
    },

    toggleFavorite(id) {
      const numericId = Number(id);
      let favs = this.getFavorites();
      let isAdded = false;

      if (favs.includes(numericId)) {
        favs = favs.filter(favId => favId !== numericId);
        isAdded = false;
      } else {
        favs.push(numericId);
        isAdded = true;
      }

      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
      } catch (e) {
        console.error('Erro ao salvar favoritos no localStorage', e);
      }

      window.dispatchEvent(new CustomEvent('fitora:favorites-changed', {
        detail: { id: numericId, isFavorite: isAdded, favorites: favs }
      }));

      return isAdded;
    },

    // RECEITAS FEITAS
    getCooked() {
      try {
        const data = localStorage.getItem(COOKED_KEY);
        return data ? JSON.parse(data).map(Number) : [];
      } catch (e) {
        console.error('Erro ao ler receitas feitas do localStorage', e);
        return [];
      }
    },

    isCooked(id) {
      const numericId = Number(id);
      const cooked = this.getCooked();
      return cooked.includes(numericId);
    },

    toggleCooked(id) {
      const numericId = Number(id);
      let cooked = this.getCooked();
      let isAdded = false;

      if (cooked.includes(numericId)) {
        cooked = cooked.filter(cId => cId !== numericId);
        isAdded = false;
      } else {
        cooked.push(numericId);
        isAdded = true;
      }

      try {
        localStorage.setItem(COOKED_KEY, JSON.stringify(cooked));
      } catch (e) {
        console.error('Erro ao salvar receitas feitas no localStorage', e);
      }

      window.dispatchEvent(new CustomEvent('fitora:cooked-changed', {
        detail: { id: numericId, isCooked: isAdded, cooked }
      }));

      return isAdded;
    },

    setCooked(id) {
      const numericId = Number(id);
      let cooked = this.getCooked();
      if (!cooked.includes(numericId)) {
        cooked.push(numericId);
        try {
          localStorage.setItem(COOKED_KEY, JSON.stringify(cooked));
        } catch (e) {}
        window.dispatchEvent(new CustomEvent('fitora:cooked-changed', {
          detail: { id: numericId, isCooked: true, cooked }
        }));
      }
    },

    // TEMA
    getTheme() {
      return localStorage.getItem(THEME_KEY) || 'light';
    },

    setTheme(theme) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {}
      document.documentElement.setAttribute('data-theme', theme);
    },

    initTheme() {
      const theme = this.getTheme();
      document.documentElement.setAttribute('data-theme', theme);
    },

    // LISTA DE COMPRAS (BÔNUS)
    getGroceryList() {
      try {
        const data = localStorage.getItem('fitora_groceries_v1');
        return data ? JSON.parse(data) : [];
      } catch (e) {
        return [];
      }
    },

    isGroceryChecked(id) {
      return this.getGroceryList().includes(id);
    },

    toggleGroceryItem(id) {
      let list = this.getGroceryList();
      let isChecked = false;
      if (list.includes(id)) {
        list = list.filter(item => item !== id);
        isChecked = false;
      } else {
        list.push(id);
        isChecked = true;
      }
      try {
        localStorage.setItem('fitora_groceries_v1', JSON.stringify(list));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('fitora:groceries-changed', {
        detail: { id, isChecked, list }
      }));
      return isChecked;
    },

    clearGroceryList() {
      try {
        localStorage.removeItem('fitora_groceries_v1');
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('fitora:groceries-changed', {
        detail: { list: [] }
      }));
    }
  };

  // ==========================================
  // DADOS DOS BÔNUS EXCLUSIVOS
  // ==========================================
  const SUBSTITUTIONS_DATA = [
    {
      id: 'sub-farinha-trigo',
      category: 'farinhas',
      categoryLabel: 'Farinhas & Grãos',
      original: 'Farinha de Trigo',
      substitutes: [
        { name: 'Farinha de Aveia', ratio: '1 para 1', benefit: 'Mais fibras, saciedade e menor índice glicêmico.' },
        { name: 'Farinha de Amêndoas', ratio: '1 para 1 (reduzir um pouco os líquidos)', benefit: 'Low-carb e rica em gorduras boas.' },
        { name: 'Farinha de Arroz', ratio: '1 para 1', benefit: 'Opção sem glúten e textura leve.' }
      ],
      chefTip: 'Para bolos e panquecas fit, a farinha de aveia batida no liquidificador dá a melhor consistência.'
    },
    {
      id: 'sub-tapioca',
      category: 'farinhas',
      categoryLabel: 'Farinhas & Grãos',
      original: 'Goma de Tapioca',
      substitutes: [
        { name: 'Crepioca (Goma + 1 Ovo)', ratio: '1 colher de sopa de goma batida com 1 ovo', benefit: 'Reduz o pico de insulina e adiciona 6g de proteína.' },
        { name: 'Aveioca (Aveia em flocos finos + água)', ratio: '2 colheres de sopa de aveia hidratada', benefit: 'Muito mais fibras e menor densidade calórica.' }
      ],
      chefTip: 'Nunca coma tapioca pura; misture sempre com ovo, chia ou queijo branco para controlar a absorção do carboidrato.'
    },
    {
      id: 'sub-arroz-branco',
      category: 'farinhas',
      categoryLabel: 'Farinhas & Grãos',
      original: 'Arroz Branco',
      substitutes: [
        { name: 'Arroz Integral ou 7 Grãos', ratio: '1 para 1', benefit: 'Digestão mais lenta e rico em minerais.' },
        { name: 'Quinoa Cozida', ratio: '1 para 1', benefit: 'Carboidrato proteico completo com aminoácidos essenciais.' },
        { name: 'Arroz de Couve-flor ralada', ratio: '1 para 1', benefit: 'Apenas 25 kcal por porção. Ideal para secar.' }
      ],
      chefTip: 'Refogue o arroz de couve-flor com bastante alho, cebola e azeite por só 3 minutos para ficar crocante.'
    },
    {
      id: 'sub-batata-inglesa',
      category: 'farinhas',
      categoryLabel: 'Farinhas & Grãos',
      original: 'Batata Inglesa',
      substitutes: [
        { name: 'Batata Doce', ratio: '1 para 1', benefit: 'Energia de liberação prolongada, perfeita no pré-treino.' },
        { name: 'Abóbora Cabotiá (Japonesa)', ratio: '1 para 1', benefit: 'Metade das calorias e textura aveludada para purês.' },
        { name: 'Mandioca / Aipim', ratio: '1 para 1', benefit: 'Excelente fonte de energia limpa sem glúten.' }
      ],
      chefTip: 'Abóbora assada na Airfryer com alecrim e azeite fica caramelizada e substitui batata frita com perfeição.'
    },
    {
      id: 'sub-frango',
      category: 'proteinas',
      categoryLabel: 'Proteínas & Carnes',
      original: 'Peito de Frango',
      substitutes: [
        { name: 'Sobrecoxa desossada e sem pele', ratio: '1 para 1', benefit: 'Mais suculenta e saborosa sem excesso de gordura.' },
        { name: 'Atum sólido ao natural (em água)', ratio: '1 lata (120g) = 150g de frango', benefit: 'Rico em ômega-3 e zero preparo no fogão.' },
        { name: 'Ovos cozidos', ratio: '2 ovos inteiros = 80g de peito de frango', benefit: 'Proteína de altíssimo valor biológico e barata.' }
      ],
      chefTip: 'Desfie o frango e guarde em potes com pouco caldo para ter proteína pronta na geladeira a semana toda.'
    },
    {
      id: 'sub-carne-moida',
      category: 'proteinas',
      categoryLabel: 'Proteínas & Carnes',
      original: 'Carne Vermelha Moída (Patinho)',
      substitutes: [
        { name: 'Frango ou Peru Moído', ratio: '1 para 1', benefit: 'Menos calorias e digestão mais leve à noite.' },
        { name: 'Proteína de Soja Texturizada (PTS)', ratio: '1 para 1 (hidratada)', benefit: 'Super econômica, zero gordura saturada e dura meses.' },
        { name: 'Lentilha Cozida Temperada', ratio: '1 xícara de lentilha = 100g de carne', benefit: 'Opção 100% vegetal com alto teor de ferro e fibras.' }
      ],
      chefTip: 'Misture 50% de carne moída com 50% de cenoura ralada bem fina: o rendimento dobra e o prato fica mais leve.'
    },
    {
      id: 'sub-whey',
      category: 'proteinas',
      categoryLabel: 'Proteínas & Carnes',
      original: 'Whey Protein (em receitas doces)',
      substitutes: [
        { name: 'Leite em Pó Desnatado + Cacau', ratio: '2 colheres de sopa no lugar de 1 scoop de whey', benefit: 'Dá a mesma textura aveludada em cremes e panquecas.' },
        { name: 'Iogurte Grego Natural sem açúcar', ratio: '100g de iogurte grego', benefit: 'Aumenta a proteína e traz cremosidade natural.' },
        { name: 'Claras de Ovo pasteurizadas', ratio: '3 colheres de sopa de claras', benefit: 'Zero gordura e zero lactose.' }
      ],
      chefTip: 'Você não precisa gastar fortunas com suplementos: leite em pó desnatado com canela ou cacau funciona muito bem em receitas.'
    },
    {
      id: 'sub-requeijao',
      category: 'laticinios',
      categoryLabel: 'Laticínios & Gorduras',
      original: 'Requeijão Tradicional / Maionese',
      substitutes: [
        { name: 'Creme de Ricota Light', ratio: '1 para 1', benefit: '60% menos calorias e 3x mais proteína.' },
        { name: 'Queijo Cottage', ratio: '1 para 1', benefit: 'O queijo mais magro e proteico que existe.' },
        { name: 'Iogurte Natural + Limão e Sal', ratio: '1 para 1', benefit: 'Substituto perfeito da maionese em saladas e wraps.' }
      ],
      chefTip: 'Bata o queijo cottage no mixer com sal e azeite: vira um requeijão cremoso idêntico ao industrializado.'
    },
    {
      id: 'sub-leite',
      category: 'laticinios',
      categoryLabel: 'Laticínios & Gorduras',
      original: 'Leite de Vaca Integral',
      substitutes: [
        { name: 'Leite Desnatado', ratio: '1 para 1', benefit: 'Metade das calorias mantendo o cálcio e a proteína.' },
        { name: 'Leite de Amêndoas ou Coco caseiro', ratio: '1 para 1', benefit: 'Sem lactose e baixíssimo em carboidratos.' },
        { name: 'Água mineral (em panquecas/shakes)', ratio: '1 para 1', benefit: 'Economiza calorias sem alterar a textura final.' }
      ],
      chefTip: 'Para shakes e panquecas, trocar o leite por água ou leite vegetal deixa a digestão muito mais leve.'
    },
    {
      id: 'sub-oleo',
      category: 'laticinios',
      categoryLabel: 'Laticínios & Gorduras',
      original: 'Óleo de Soja / Margarina',
      substitutes: [
        { name: 'Azeite de Oliva Extra Virgem', ratio: '1 colher de chá com pincel de silicone', benefit: 'Antioxidante, protege o coração e não inflama.' },
        { name: 'Manteiga Ghee ou Tradicional (com moderação)', ratio: '1/2 colher de chá', benefit: 'Mais natural e sem gordura hidrogenada trans.' },
        { name: 'Fritadeira sem óleo (Airfryer)', ratio: '0 colheres de gordura', benefit: 'Economiza até 150 kcal por refeição.' }
      ],
      chefTip: 'Use um borrifador de azeite na frigideira: você gasta 90% menos óleo e a comida não gruda nada.'
    },
    {
      id: 'sub-acucar',
      category: 'doces',
      categoryLabel: 'Adoçantes & Doces',
      original: 'Açúcar Refinado / Cristal',
      substitutes: [
        { name: 'Eritritol ou Xilitol', ratio: '1 para 1', benefit: 'Zero calorias e não eleva a glicose no sangue.' },
        { name: 'Banana Nanica bem madura amassada', ratio: '1 banana para cada 2 colheres de açúcar', benefit: 'Doçura 100% natural com fibras e potássio.' },
        { name: 'Mel puro de abelha', ratio: 'Use metade da quantidade do açúcar', benefit: 'Poder adoçante maior e propriedades imunológicas.' }
      ],
      chefTip: 'Quanto mais preta estiver a casca da banana, mais doce ela é: perfeita para adoçar bolinhos sem nenhum açúcar.'
    },
    {
      id: 'sub-chocolate',
      category: 'doces',
      categoryLabel: 'Adoçantes & Doces',
      original: 'Achocolatado / Chocolate ao Leite',
      substitutes: [
        { name: 'Cacau em Pó 100% Alcalino', ratio: '1 colher de sobremesa substitui 2 de achocolatado', benefit: 'Zero açúcar adicionado e riquíssimo em magnésio.' },
        { name: 'Chocolate 70% ou 85% Cacau picado', ratio: '20g a 30g', benefit: 'Mata a vontade de doce com poucas calorias e gorduras do bem.' }
      ],
      chefTip: 'Se achar o cacau 100% amargo no começo, misture com canela em pó: a canela realça o doce natural sem açúcar.'
    }
  ];

  const GROCERY_CATEGORIES = [
    {
      id: 'hortifruti',
      name: '🥬 Hortifrúti & Feira',
      description: 'Compre no início da semana para garantir o máximo de frescor e nutrientes.',
      items: [
        { id: 'item-banana', name: 'Bananas maduras', qty: '1 dúzia', note: 'Base coringa para panquecas, doces fit e pré-treino' },
        { id: 'item-maca', name: 'Maçãs ou Frutas da estação', qty: '4 a 6 un', note: 'Lanches práticos para carregar na bolsa' },
        { id: 'item-limao', name: 'Limões Taiti', qty: '6 un', note: 'Para temperar saladas e marinar peixes e frango' },
        { id: 'item-tomate', name: 'Tomates firmes', qty: '1 kg', note: 'Para saladas, crepiocas e molhos caseiros' },
        { id: 'item-folhas', name: 'Alface americana ou Rúcula', qty: '2 maços', note: 'Higienize e guarde seco em pote com papel toalha' },
        { id: 'item-cebola-alho', name: 'Cebola e Alho', qty: '1 kg cada', note: 'A base aromática de 90% das receitas salgadas' },
        { id: 'item-abobora-batata', name: 'Batata Doce ou Abóbora Cabotiá', qty: '1 a 2 kg', note: 'Carboidrato de alta saciedade para almoço e jantar' }
      ]
    },
    {
      id: 'proteinas',
      name: '🍗 Carnes, Ovos & Frios',
      description: 'As fontes essenciais de proteína para manter sua massa magra e saciedade.',
      items: [
        { id: 'item-ovos', name: 'Ovos (Cartela com 20 ou 30)', qty: '1 cartela', note: 'O alimento mais versátil e barato da dieta' },
        { id: 'item-frango-file', name: 'Peito de Frango em Filé', qty: '1,5 kg', note: 'Tempere e congele em porções individuais de 150g' },
        { id: 'item-patinho', name: 'Carne Moída Magra (Patinho)', qty: '800g a 1kg', note: 'Para recheios, almôndegas e bowls rápidos' },
        { id: 'item-atum', name: 'Atum sólido em água (lata)', qty: '3 a 4 latas', note: 'Salvação para os dias de correria máxima' },
        { id: 'item-queijo-branco', name: 'Queijo Minas Frescal ou Ricota', qty: '1 peça (500g)', note: 'Para café da manhã e recheios proteicos leves' }
      ]
    },
    {
      id: 'mercearia',
      name: '🌾 Grãos, Farinhas & Mercearia',
      description: 'Itens secos que duram o mês todo na despensa e geram dezenas de receitas.',
      items: [
        { id: 'item-aveia', name: 'Aveia em flocos finos', qty: '1 pacote (500g)', note: 'O ingrediente mais usado em todo o FITORA' },
        { id: 'item-tapioca', name: 'Goma de Tapioca fresca', qty: '1 pacote (500g)', note: 'Para as crepiocas matinais e lanches da tarde' },
        { id: 'item-azeite', name: 'Azeite de Oliva Extra Virgem', qty: '1 garrafa (500ml)', note: 'Prefira embalagens de vidro escuro' },
        { id: 'item-cacau', name: 'Cacau em Pó 100%', qty: '1 pote (200g)', note: 'Dura semanas e substitui achocolatados açucarados' },
        { id: 'item-arroz-integral', name: 'Arroz Integral ou Quinoa', qty: '1 pacote (1kg)', note: 'Cozinhe para 3 dias e guarde em pote hermético' },
        { id: 'item-chia-canela', name: 'Sementes de Chia e Canela em pó', qty: '100g de cada', note: 'Aceleram o metabolismo e agregam fibras' }
      ]
    },
    {
      id: 'laticinios',
      name: '🥛 Laticínios & Bebidas',
      description: 'Opções leves para manter o preparo dos lanches e molhos saborosos.',
      items: [
        { id: 'item-iogurte', name: 'Iogurte Natural ou Grego sem açúcar', qty: '4 a 6 potes', note: 'Perfeito para sobremesas, molhos e cremes' },
        { id: 'item-leite-desnatado', name: 'Leite Desnatado ou Bebida Vegetal', qty: '2 litros', note: 'Para vitaminas, crepiocas doces e cafés cremosos' }
      ]
    }
  ];

  // ==========================================
  // 3. UI RENDERERS & ICONS
  // ==========================================
  const UI = {
    icons: {
      home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
      heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
      checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
      more: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/></svg>`,
      clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      level: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      servings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
      arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
      check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
      play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      sparkle: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`,
      filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
      sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
      moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
      chef: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>`,
      share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
      printer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
      timer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="2" x2="14" y2="2"/><line x1="12" y1="14" x2="15" y2="11"/><circle cx="12" cy="14" r="8"/></svg>`
    },

    categoryIcons: {
      'todas': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`,
      'cafe-da-manha': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
      'doces': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="7.5" cy="14.5" r="1.2" fill="currentColor"/><circle cx="12.5" cy="17.5" r="1.2" fill="currentColor"/><circle cx="14.5" cy="12.5" r="1.2" fill="currentColor"/></svg>`,
      'sobremesas': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11h10a4 4 0 0 1 4 4v1H3v-1a4 4 0 0 1 4-4Z"/><path d="M12 16v5"/><path d="M8 21h8"/><circle cx="12" cy="7" r="3.5"/></svg>`,
      'lanches': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="4"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="9" y1="5" x2="9" y2="19"/></svg>`,
      'almoco-jantar': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 8V3"/><path d="M12 8V3"/><path d="M17 8V3"/></svg>`,
      'bebidas': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21h10l1.5-12h-13Z"/><path d="M5 9h14"/><path d="M12 3v6"/><path d="m16 3-4 6"/></svg>`
    },

    showToast(message) {
      let container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
      }
      const toast = document.createElement('div');
      toast.className = 'toast-message';
      toast.innerHTML = `<span>${message}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.remove();
      }, 2600);
    },

    renderHeader(currentRoute) {
      const isHome = currentRoute === '' || currentRoute === 'home';
      const isSearch = currentRoute === 'search';
      const isFavorites = currentRoute === 'favorites';
      const isCooked = currentRoute === 'cooked' || currentRoute === 'feitas';
      const isMore = currentRoute === 'more';
      const currentTheme = Storage.getTheme();
      const themeIcon = currentTheme === 'dark' ? this.icons.sun : this.icons.moon;

      return `
        <header class="site-header">
          <div class="header-inner">
            <a href="#/" class="brand-wrapper" title="FITORA - Início">
              <span class="brand-logo">FITORA<span class="dot"></span></span>
              <span class="brand-tagline">Receitas que cabem na sua rotina.</span>
            </a>

            <div class="header-actions">
              <!-- Navegação Desktop Refinada -->
              <nav class="desktop-nav" aria-label="Navegação Principal Desktop">
                <a href="#/" class="nav-link ${isHome ? 'active' : ''}">
                  ${this.icons.home}
                  <span>Início</span>
                </a>
                <a href="#/search" class="nav-link ${isSearch ? 'active' : ''}">
                  ${this.icons.search}
                  <span>Buscar</span>
                </a>
                <a href="#/favorites" class="nav-link ${isFavorites ? 'active' : ''}">
                  ${this.icons.heart}
                  <span>Favoritas</span>
                </a>
                <a href="#/cooked" class="nav-link ${isCooked ? 'active' : ''}">
                  ${this.icons.checkCircle}
                  <span>Feitas</span>
                </a>
                <a href="#/more" class="nav-link ${isMore ? 'active' : ''}">
                  ${this.icons.more}
                  <span>Mais</span>
                </a>
              </nav>

              <!-- Botão Alternar Tema Claro/Escuro -->
              <button 
                type="button" 
                class="theme-toggle-btn" 
                id="theme-toggle-btn" 
                onclick="window.fitoraApp.toggleTheme()" 
                title="${currentTheme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}"
                aria-label="Alternar tema visual"
              >
                ${themeIcon}
              </button>
            </div>
          </div>
        </header>
      `;
    },

    renderBottomNav(currentRoute) {
      const isHome = currentRoute === '' || currentRoute === 'home';
      const isSearch = currentRoute === 'search';
      const isFavorites = currentRoute === 'favorites';
      const isCooked = currentRoute === 'cooked' || currentRoute === 'feitas';
      const isMore = currentRoute === 'more';

      return `
        <nav class="bottom-nav" aria-label="Navegação Inferior Mobile">
          <a href="#/" class="bottom-nav-item ${isHome ? 'active' : ''}" data-route="home">
            ${this.icons.home}
            <span>Início</span>
          </a>
          <a href="#/search" class="bottom-nav-item ${isSearch ? 'active' : ''}" data-route="search">
            ${this.icons.search}
            <span>Buscar</span>
          </a>
          <a href="#/favorites" class="bottom-nav-item ${isFavorites ? 'active' : ''}" data-route="favorites">
            ${this.icons.heart}
            <span>Favoritas</span>
          </a>
          <a href="#/cooked" class="bottom-nav-item ${isCooked ? 'active' : ''}" data-route="cooked">
            ${this.icons.checkCircle}
            <span>Feitas</span>
          </a>
          <a href="#/more" class="bottom-nav-item ${isMore ? 'active' : ''}" data-route="more">
            ${this.icons.more}
            <span>Mais</span>
          </a>
        </nav>
      `;
    },

    renderFavoriteButton(recipeId, customClass = '') {
      const isFav = Storage.isFavorite(recipeId);
      return `
        <button 
          type="button" 
          class="fav-btn ${isFav ? 'is-favorite' : ''} ${customClass}" 
          data-fav-id="${recipeId}" 
          aria-label="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
          title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
          onclick="event.stopPropagation(); event.preventDefault(); window.fitoraApp.toggleFavorite(${recipeId}, event);"
        >
          ${this.icons.heart}
        </button>
      `;
    },

    getCardTheme(category, id = 0) {
      const cat = String(category || '').toLowerCase();
      if (cat.includes('almoço') || cat.includes('jantar')) return 'recipe-card-theme-green';
      if (cat.includes('café') || cat.includes('cafe')) return 'recipe-card-theme-lime';
      if (cat.includes('lanche')) return 'recipe-card-theme-mint';
      if (cat.includes('doce')) return 'recipe-card-theme-peach';
      if (cat.includes('sobremesa')) return 'recipe-card-theme-peach';
      if (cat.includes('bebida') || cat.includes('suco') || cat.includes('smoothie')) return 'recipe-card-theme-lemon';
      const themes = ['recipe-card-theme-lime', 'recipe-card-theme-mint', 'recipe-card-theme-green', 'recipe-card-theme-peach', 'recipe-card-theme-lemon'];
      return themes[id % themes.length];
    },

    // Card de Receita seguindo fielmente a referência visual
    renderRecipeCard(recipe) {
      const isFav = Storage.isFavorite(recipe.id);
      const isCooked = Storage.isCooked(recipe.id);
      const themeClass = this.getCardTheme(recipe.category, recipe.id);
      const calories = recipe.calories || 210;

      return `
        <article class="recipe-card ${themeClass}" data-recipe-id="${recipe.id}">
          <div class="recipe-card-left" onclick="location.hash='#/recipe/${recipe.id}'">
            <button 
              type="button" 
              class="card-fav-btn ${isFav ? 'is-favorite' : ''}" 
              data-fav-id="${recipe.id}" 
              aria-label="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
              title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
              onclick="event.stopPropagation(); event.preventDefault(); window.fitoraApp.toggleFavorite(${recipe.id}, event);"
            >
              <svg viewBox="0 0 24 24" class="card-heart-svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>

            <h3 class="recipe-card-title">${recipe.name}</h3>

            <div class="recipe-card-bottom-row">
              <div class="recipe-time-pill">
                <svg viewBox="0 0 24 24" class="card-clock-svg" width="14" height="14" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                <span>${recipe.time}</span>
              </div>
              <div class="recipe-card-macro-pill">
                🔥 ${calories} kcal
              </div>
              ${isCooked ? `
                <div class="recipe-card-cooked-pill" data-cooked-card-id="${recipe.id}" title="Você já preparou esta receita!">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Feita</span>
                </div>
              ` : ''}
            </div>
          </div>

          <div class="recipe-card-right" onclick="location.hash='#/recipe/${recipe.id}'">
            <div class="recipe-plate-wrap">
              <img 
                src="${recipe.image}" 
                alt="${recipe.name}" 
                class="recipe-plate-img" 
                loading="lazy" 
                onerror="this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'"
              />
            </div>
          </div>
        </article>
      `;
    },

    // Hero Gastronômico Destaque do Chef
    renderHeroRecipe(recipe) {
      if (!recipe) return '';
      const isFav = Storage.isFavorite(recipe.id);
      return `
        <section class="hero-recipe-banner" onclick="location.hash='#/recipe/${recipe.id}'">
          <button 
            type="button" 
            class="hero-fav-btn ${isFav ? 'is-favorite' : ''}" 
            data-fav-id="${recipe.id}" 
            aria-label="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}" 
            title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}" 
            onclick="event.stopPropagation(); event.preventDefault(); window.fitoraApp.toggleFavorite(${recipe.id}, event);"
          >
            ${this.icons.heart}
          </button>

          <div class="hero-recipe-image-side">
            <img 
              src="${recipe.image}" 
              alt="${recipe.name}" 
              class="hero-recipe-img" 
              loading="eager"
              onerror="this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'"
            />
          </div>
          <div class="hero-recipe-info-side">
            <span class="hero-badge">⭐ Destaque do Dia</span>
            <h2 class="hero-title">${recipe.name}</h2>
            <p class="hero-desc">${recipe.description}</p>
            <div class="hero-metrics-row">
              <span class="recipe-time-pill">⏱️ ${recipe.time}</span>
              <span class="recipe-card-macro-pill">🔥 ${recipe.calories} kcal</span>
              <span class="recipe-card-macro-pill">💪 ${recipe.protein}g proteína</span>
            </div>
            <button class="hero-cta-btn" onclick="event.stopPropagation(); location.hash='#/recipe/${recipe.id}'">
              Cozinhar agora →
            </button>
          </div>
        </section>
      `;
    },

    // Seletor de Categorias Premium com Ícones SVG & Layout Responsivo
    renderCategoriesSection(categories, activeCat = null) {
      const mainCategories = categories.filter(c => !c.id.includes('ricas') && !c.id.includes('ate-20'));
      return `
        <div class="categories-wrapper">
          <div class="categories-slider" role="navigation" aria-label="Categorias de Receitas">
            <button 
              class="category-chip ${!activeCat ? 'active' : ''}" 
              onclick="location.hash='#/'"
            >
              <span class="category-icon">${this.categoryIcons['todas']}</span>
              <span>Todas (${(window.fitoraApp && window.fitoraApp.recipes) ? window.fitoraApp.recipes.length : 50})</span>
            </button>
            ${mainCategories.map(cat => {
              const isActive = activeCat === cat.id;
              const iconSvg = this.categoryIcons[cat.id] || this.categoryIcons['todas'];
              return `
                <button 
                  class="category-chip ${isActive ? 'active' : ''}" 
                  onclick="location.hash='#/category/${cat.id}'"
                >
                  <span class="category-icon">${iconSvg}</span>
                  <span>${cat.name}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    renderEmptyState({ icon, title, description, buttonText, buttonAction }) {
      return `
        <div class="empty-state animate-fade-in">
          <div class="empty-icon">${icon || this.icons.sparkle}</div>
          <h3 class="empty-title">${title}</h3>
          <p class="empty-desc">${description}</p>
          ${buttonText ? `
            <button class="btn-primary" onclick="${buttonAction}">
              ${buttonText}
            </button>
          ` : ''}
        </div>
      `;
    }
  };

  // ==========================================
  // 4. APLICAÇÃO FITORA E ROTEAMENTO
  // ==========================================
  class FitoraApp {
    constructor() {
      this.recipes = RECIPES_DATA;
      this.categories = CATEGORIES_LIST;
      this.currentRoute = '';
      this.currentParams = {};
      this.searchQuery = '';
      this.activeSearchTag = '';
      
      // Estado de Cozinha e Timer
      this.currentServingFactor = 1;
      this.timerSeconds = 0;
      this.timerInterval = null;
      this.isTimerRunning = false;
      this.kitchenModeRecipe = null;
      this.kitchenModeStepIndex = 0;

      this.appRoot = document.getElementById('app');
      this.init();
    }

    init() {
      Storage.initTheme();

      window.addEventListener('hashchange', () => this.handleRoute());
      
      window.addEventListener('fitora:favorites-changed', (e) => {
        this.handleFavoriteChange(e.detail);
      });

      window.addEventListener('fitora:cooked-changed', (e) => {
        this.handleCookedChange(e.detail);
      });

      // Delegação de cliques segura para favoritos
      document.addEventListener('click', (e) => {
        const favBtn = e.target.closest('.fav-btn, .card-fav-btn, .hero-fav-btn');
        if (favBtn) {
          e.stopPropagation();
          e.preventDefault();
          const id = favBtn.getAttribute('data-fav-id');
          if (id) {
            this.toggleFavorite(id);
          }
        }
      });

      this.handleRoute();
    }

    toggleTheme() {
      const current = Storage.getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      Storage.setTheme(next);
      const btn = document.getElementById('theme-toggle-btn');
      if (btn) {
        btn.innerHTML = next === 'dark' ? UI.icons.sun : UI.icons.moon;
        btn.setAttribute('title', next === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
      }
      UI.showToast(next === 'dark' ? 'Modo Escuro ativado 🌙' : 'Modo Claro ativado ☀️');
    }

    toggleFavorite(recipeId, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      const id = Number(recipeId);
      const isAdded = Storage.toggleFavorite(id);
      UI.showToast(isAdded ? 'Receita salva nas favoritas ❤️' : 'Receita removida das favoritas');
      this.handleFavoriteChange({ id, isFavorite: isAdded });
    }

    toggleCooked(recipeId, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      const id = Number(recipeId);
      const isAdded = Storage.toggleCooked(id);
      UI.showToast(isAdded ? 'Receita marcada como feita! 🍳✨' : 'Receita desmarcada de feitas');
      this.handleCookedChange({ id, isCooked: isAdded });
    }

    handleCookedChange({ id, isCooked }) {
      const detailBtn = document.getElementById('detail-cooked-btn');
      if (detailBtn && Number(detailBtn.getAttribute('data-cooked-id')) === id) {
        detailBtn.classList.toggle('is-cooked', isCooked);
        detailBtn.innerHTML = `
          ${UI.icons.checkCircle}
          <span>${isCooked ? 'Feita por mim! ✨' : 'Marcar como Feita ✅'}</span>
        `;
        detailBtn.setAttribute('title', isCooked ? 'Clique para desmarcar' : 'Marcar como feita');
      }

      if (this.currentRoute === 'cooked' || this.currentRoute === 'feitas') {
        this.render();
      } else {
        const cards = document.querySelectorAll(`[data-recipe-id="${id}"] .recipe-card-bottom-row`);
        cards.forEach(row => {
          let badge = row.querySelector('.recipe-card-cooked-pill');
          if (isCooked && !badge) {
            badge = document.createElement('div');
            badge.className = 'recipe-card-cooked-pill';
            badge.setAttribute('data-cooked-card-id', String(id));
            badge.setAttribute('title', 'Você já preparou esta receita!');
            badge.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> <span>Feita</span>`;
            row.appendChild(badge);
          } else if (!isCooked && badge) {
            badge.remove();
          }
        });
      }
    }

    parseRoute() {
      const hash = window.location.hash.slice(2) || 'home';
      const parts = hash.split('/');
      const route = parts[0];
      const param = parts[1] || null;
      return { route, param };
    }

    handleRoute() {
      const { route, param } = this.parseRoute();
      this.currentRoute = route;
      this.currentParams = { param };

      // Se mudou de rota, resetamos o fator de porção para 1
      if (route !== 'recipe') {
        this.currentServingFactor = 1;
        this.resetKitchenTimer();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.render();
    }

    handleFavoriteChange({ id, isFavorite }) {
      const buttons = document.querySelectorAll(`[data-fav-id="${id}"]`);
      buttons.forEach(btn => {
        if (isFavorite) {
          btn.classList.add('is-favorite');
          btn.setAttribute('aria-label', 'Remover dos favoritos');
          btn.setAttribute('title', 'Remover dos favoritos');
        } else {
          btn.classList.remove('is-favorite');
          btn.setAttribute('aria-label', 'Adicionar aos favoritos');
          btn.setAttribute('title', 'Adicionar aos favoritos');
        }
      });

      if (this.currentRoute === 'favorites') {
        this.render();
      }
    }

    render() {
      const headerHtml = UI.renderHeader(this.currentRoute);
      const bottomNavHtml = UI.renderBottomNav(this.currentRoute);
      let viewContent = '';

      switch (this.currentRoute) {
        case 'home':
        case '':
          viewContent = this.renderHomeView();
          break;
        case 'search':
          viewContent = this.renderSearchView();
          break;
        case 'favorites':
          viewContent = this.renderFavoritesView();
          break;
        case 'cooked':
        case 'feitas':
          viewContent = this.renderCookedView();
          break;
        case 'category':
          viewContent = this.renderCategoryView(this.currentParams.param);
          break;
        case 'recipe':
          viewContent = this.renderRecipeDetailView(this.currentParams.param);
          break;
        case 'more':
          viewContent = this.renderMoreView();
          break;
        case 'bonus':
        case 'bonuses':
          viewContent = this.renderBonusView(this.currentParams.param);
          break;
        default:
          viewContent = this.renderNotFoundView();
          break;
      }

      this.appRoot.innerHTML = `
        ${headerHtml}
        <main class="app-container">
          ${viewContent}
        </main>
        ${bottomNavHtml}
        <div id="kitchen-modal-container"></div>
      `;

      this.attachViewEvents();
    }

    attachViewEvents() {
      if (this.currentRoute === 'search') {
        const searchInput = document.getElementById('search-recipe-input');
        const clearBtn = document.getElementById('search-clear-btn');
        
        if (searchInput) {
          searchInput.focus();
          searchInput.value = this.searchQuery;
          
          searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value;
            this.updateSearchResults();
            if (clearBtn) {
              clearBtn.style.display = this.searchQuery ? 'inline-flex' : 'none';
            }
          });
        }

        if (clearBtn) {
          clearBtn.addEventListener('click', () => {
            this.searchQuery = '';
            if (searchInput) {
              searchInput.value = '';
              searchInput.focus();
            }
            clearBtn.style.display = 'none';
            this.updateSearchResults();
          });
        }
      }

      if (this.currentRoute === 'recipe') {
        const ingItems = document.querySelectorAll('.ingredient-item');
        ingItems.forEach(item => {
          item.addEventListener('click', () => {
            item.classList.toggle('checked');
          });
        });

        const stepCards = document.querySelectorAll('.step-card');
        stepCards.forEach(card => {
          card.addEventListener('click', () => {
            card.classList.toggle('checked');
          });
        });
      }

      if (this.currentRoute === 'bonus' || this.currentRoute === 'bonuses') {
        const subsSearch = document.getElementById('subs-search-input');
        if (subsSearch) {
          subsSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('#subs-cards-grid .sub-card');
            cards.forEach(card => {
              const searchText = card.getAttribute('data-search') || '';
              if (!query || searchText.includes(query)) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            });
          });
        }
      }
    }

    // ==========================================
    // INTERAÇÕES DA TELA DE RECEITA: PORÇÕES, TIMER & COZINHA
    // ==========================================
    setServingFactor(factor) {
      this.currentServingFactor = factor;
      const recipeId = this.currentParams.param;
      const recipe = this.recipes.find(r => r.id === Number(recipeId));
      if (!recipe) return;

      // Atualiza botões de porção
      const buttons = document.querySelectorAll('.serving-btn');
      buttons.forEach(btn => {
        const f = Number(btn.getAttribute('data-factor'));
        btn.classList.toggle('active', f === factor);
      });

      // Recalcula e atualiza lista de ingredientes
      const ingList = document.querySelector('.ingredients-list');
      if (ingList) {
        ingList.innerHTML = recipe.ingredients.map(ing => `
          <li class="ingredient-item">
            <span class="ingredient-bullet"></span>
            <span class="ingredient-text">${scaleIngredient(ing, factor)}</span>
          </li>
        `).join('');

        // Reanexa eventos de clique nos ingredientes
        ingList.querySelectorAll('.ingredient-item').forEach(item => {
          item.addEventListener('click', () => item.classList.toggle('checked'));
        });
      }

      // Atualiza macros
      const kcalVal = document.getElementById('macro-val-kcal');
      const protVal = document.getElementById('macro-val-prot');
      const carbVal = document.getElementById('macro-val-carb');
      const fatVal  = document.getElementById('macro-val-fat');

      if (kcalVal) kcalVal.innerText = `${Math.round(recipe.calories * factor)} kcal`;
      if (protVal) protVal.innerText = `${Math.round(recipe.protein * factor)}g`;
      if (carbVal) carbVal.innerText = `${Math.round(recipe.carbs * factor)}g`;
      if (fatVal)  fatVal.innerText  = `${Math.round(recipe.fat * factor)}g`;

      UI.showToast(`Porções ajustadas para ${factor}x`);
    }

    // Cronômetro de Cozinha
    setTimerPreset(minutes) {
      this.timerSeconds = minutes * 60;
      this.updateTimerDisplay();
      if (!this.isTimerRunning) {
        this.toggleKitchenTimer();
      }
    }

    toggleKitchenTimer() {
      const startBtn = document.getElementById('timer-start-btn');
      if (this.isTimerRunning) {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        if (startBtn) startBtn.innerText = 'Continuar';
      } else {
        if (this.timerSeconds <= 0) {
          this.timerSeconds = 5 * 60; // 5 min padrão
        }
        this.isTimerRunning = true;
        if (startBtn) startBtn.innerText = 'Pausar';

        this.timerInterval = setInterval(() => {
          if (this.timerSeconds > 0) {
            this.timerSeconds--;
            this.updateTimerDisplay();
          } else {
            clearInterval(this.timerInterval);
            this.isTimerRunning = false;
            if (startBtn) startBtn.innerText = 'Iniciar';
            playTimerChime();
            UI.showToast('⏰ Tempo esgotado! Seu preparo está pronto.');
          }
        }, 1000);
      }
    }

    resetKitchenTimer() {
      clearInterval(this.timerInterval);
      this.isTimerRunning = false;
      this.timerSeconds = 0;
      const startBtn = document.getElementById('timer-start-btn');
      if (startBtn) startBtn.innerText = 'Iniciar';
      this.updateTimerDisplay();
    }

    updateTimerDisplay() {
      const display = document.getElementById('timer-digits');
      if (!display) return;
      const mins = Math.floor(this.timerSeconds / 60);
      const secs = this.timerSeconds % 60;
      display.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // Compartilhar Receita
    shareRecipe(recipeId) {
      const recipe = this.recipes.find(r => r.id === Number(recipeId));
      if (!recipe) return;

      const shareData = {
        title: `FITORA - ${recipe.name}`,
        text: `Confira essa receita fitness e deliciosa: ${recipe.name}!`,
        url: window.location.href
      };

      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          UI.showToast('Link da receita copiado para a área de transferência! 📋');
        }).catch(() => {
          UI.showToast('Compartilhe: ' + window.location.href);
        });
      } else {
        UI.showToast('Link: ' + window.location.href);
      }
    }

    // Imprimir Receita
    printRecipe() {
      window.print();
    }

    // Modo Cozinha (Mãos na Massa)
    openKitchenMode(recipeId) {
      const recipe = this.recipes.find(r => r.id === Number(recipeId));
      if (!recipe) return;
      this.kitchenModeRecipe = recipe;
      this.kitchenModeStepIndex = 0;
      this.renderKitchenModal();
    }

    closeKitchenMode() {
      this.kitchenModeRecipe = null;
      const container = document.getElementById('kitchen-modal-container');
      if (container) container.innerHTML = '';
    }

    nextKitchenStep() {
      if (!this.kitchenModeRecipe) return;
      if (this.kitchenModeStepIndex < this.kitchenModeRecipe.steps.length - 1) {
        this.kitchenModeStepIndex++;
        this.renderKitchenModal();
      } else {
        const recipeId = this.kitchenModeRecipe.id;
        Storage.setCooked(recipeId);
        playTimerChime();
        UI.showToast('🎉 Parabéns! Receita finalizada e adicionada às Feitas! 🍳✨');
        this.closeKitchenMode();
        this.handleCookedChange({ id: recipeId, isCooked: true });
      }
    }

    prevKitchenStep() {
      if (this.kitchenModeStepIndex > 0) {
        this.kitchenModeStepIndex--;
        this.renderKitchenModal();
      }
    }

    renderKitchenModal() {
      const container = document.getElementById('kitchen-modal-container');
      if (!container || !this.kitchenModeRecipe) return;

      const recipe = this.kitchenModeRecipe;
      const stepIdx = this.kitchenModeStepIndex;
      const totalSteps = recipe.steps.length;
      const stepText = recipe.steps[stepIdx];
      const progressPercent = Math.round(((stepIdx + 1) / totalSteps) * 100);

      container.innerHTML = `
        <div class="kitchen-modal-backdrop" onclick="window.fitoraApp.closeKitchenMode()">
          <div class="kitchen-modal-card" onclick="event.stopPropagation()">
            <div class="kitchen-modal-header">
              <span class="kitchen-modal-title">
                ${UI.icons.chef}
                <span>${recipe.name}</span>
              </span>
              <button class="kitchen-modal-close-btn" onclick="window.fitoraApp.closeKitchenMode()" title="Fechar Modo Cozinha">
                ✕
              </button>
            </div>

            <div class="kitchen-progress-bar-wrap">
              <div class="kitchen-progress-bar-fill" style="width: ${progressPercent}%;"></div>
            </div>

            <div class="kitchen-modal-body">
              <span class="kitchen-step-badge">
                Passo ${stepIdx + 1} de ${totalSteps} (${progressPercent}%)
              </span>
              <p class="kitchen-step-text">${stepText}</p>
            </div>

            <div class="kitchen-modal-footer">
              ${stepIdx > 0 ? `
                <button class="kitchen-nav-btn kitchen-nav-btn-prev" onclick="window.fitoraApp.prevKitchenStep()">
                  ← Anterior
                </button>
              ` : `<span></span>`}

              <button class="kitchen-nav-btn kitchen-nav-btn-next" onclick="window.fitoraApp.nextKitchenStep()">
                ${stepIdx === totalSteps - 1 ? '🎉 Finalizar Receita' : 'Próximo Passo →'}
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // ==========================================
    // TELA 1: INÍCIO (HOME) REFINADA
    // ==========================================
    renderHomeView() {
      // Saudação baseada na hora do dia
      const hour = new Date().getHours();
      let greeting = 'Olá! Bem-vindo ao FITORA';
      let greetingSub = 'O que você gostaria de preparar hoje?';

      if (hour >= 5 && hour < 12) {
        greeting = 'Bom dia ☀️';
        greetingSub = 'O que vamos preparar para o café da manhã?';
      } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa tarde 🌿';
        greetingSub = 'Que tal um almoço prático ou lanche revigorante?';
      } else {
        greeting = 'Boa noite 🌙';
        greetingSub = 'Um jantar aconchegante ou doce saudável para relaxar?';
      }

      // Destaque do Chef do Dia
      const dayOfWeek = new Date().getDay();
      const heroCandidates = [13, 1, 11, 41, 36, 9, 21];
      const heroId = heroCandidates[dayOfWeek % heroCandidates.length];
      const heroRecipe = this.recipes.find(r => r.id === heroId) || this.recipes[0];

      // Destaques gastronômicos
      const featuredRecipes = [
        this.recipes.find(r => r.id === 13), // Cookie de aveia e chocolate
        this.recipes.find(r => r.id === 1),  // Panqueca de banana e aveia
        this.recipes.find(r => r.id === 4),  // Overnight oats de banana
        this.recipes.find(r => r.id === 11), // Brownie de cacau
        this.recipes.find(r => r.id === 7),  // Omelete de queijo e tomate
        this.recipes.find(r => r.id === 9)   // Tapioca com frango e queijo
      ].filter(Boolean);

      // Praticidade (rápidas até 10 minutos)
      const quickRecipes = this.recipes.filter(r => 
        r.tags.includes('até 20 minutos') && (r.time.includes('5') || r.time.includes('8') || r.time.includes('10'))
      ).slice(0, 6);

      // Ricas em Proteína
      const proteinRecipes = this.recipes.filter(r => r.tags.includes('proteína')).slice(0, 6);

      // Doces & Sobremesas
      const sweetRecipes = this.recipes.filter(r => r.category === 'Doces' || r.category === 'Sobremesas').slice(0, 6);

      return `
        <div class="home-view animate-fade-in">
          <!-- Saudação Quente & Acolhedora -->
          <div class="home-greeting-box">
            <span class="home-greeting-sub">${greeting}</span>
            <h1 class="home-headline">${greetingSub}</h1>
          </div>

          <!-- Barra de Busca Rápida Estilizada -->
          <div class="search-bar-wrapper">
            <div class="search-bar-button" onclick="location.hash='#/search'">
              <span class="search-bar-icon">${UI.icons.search}</span>
              <span style="color: var(--color-text-muted); font-size: 0.95rem;">Buscar receitas saudáveis, ingredientes...</span>
              <span style="margin-left: auto; color: var(--color-primary);">${UI.icons.filter}</span>
            </div>
          </div>

          <!-- Banner de Bônus Exclusivos de Membro -->
          <div class="member-bonus-banner" onclick="location.hash='#/bonus'">
            <div class="bonus-banner-icon">🎁</div>
            <div class="bonus-banner-info">
              <span class="bonus-banner-tag">Bônus Exclusivo de Membro</span>
              <div class="bonus-banner-title">Guia de Substituições & Lista de Compras</div>
              <div class="bonus-banner-sub">Acesse seus 2 presentes inclusos no FITORA</div>
            </div>
            <span class="bonus-banner-arrow">→</span>
          </div>

          <!-- Hero: Destaque do Chef do Dia -->
          ${UI.renderHeroRecipe(heroRecipe)}

          <!-- Seletor de Categorias em Abas Horizontais -->
          <section>
            ${UI.renderCategoriesSection(this.categories)}
          </section>

          <!-- Destaques Principais (Cards de referência com pratos circulares) -->
          <section>
            <div class="section-header-row">
              <div>
                <h2 class="section-title">Receitas em destaque</h2>
                <p class="page-subtitle">As receitas mais queridas para a sua rotina.</p>
              </div>
              <a href="#/category/doces" class="section-link">Ver todas →</a>
            </div>
            <div class="recipes-grid">
              ${featuredRecipes.map(r => UI.renderRecipeCard(r)).join('')}
            </div>
          </section>

          <!-- Botões de Acesso Rápido -->
          <div class="quick-icons-row">
            <div class="quick-icon-btn" onclick="location.hash='#/category/ricas-em-proteina'">
              <div class="quick-icon-circle quick-icon-fit">⚡</div>
              <span class="quick-icon-label">Proteína</span>
            </div>
            <div class="quick-icon-btn" onclick="location.hash='#/favorites'">
              <div class="quick-icon-circle quick-icon-likes">❤️</div>
              <span class="quick-icon-label">Favoritas</span>
            </div>
            <div class="quick-icon-btn" onclick="location.hash='#/category/doces'">
              <div class="quick-icon-circle quick-icon-award">🍪</div>
              <span class="quick-icon-label">Doces</span>
            </div>
            <div class="quick-icon-btn" onclick="location.hash='#/category/ate-20-minutos'">
              <div class="quick-icon-circle quick-icon-quick">⏱️</div>
              <span class="quick-icon-label">Rápidas</span>
            </div>
          </div>

          <!-- Seção: Para quem quer praticidade -->
          <section>
            <div class="section-header-row">
              <div>
                <h2 class="section-title">Para quem quer praticidade</h2>
                <p class="page-subtitle">Prontas em até 10 minutos para o dia a dia.</p>
              </div>
              <a href="#/category/ate-20-minutos" class="section-link">Ver todas →</a>
            </div>
            <div class="recipes-grid">
              ${quickRecipes.map(r => UI.renderRecipeCard(r)).join('')}
            </div>
          </section>

          <!-- Seção: Ricas em Proteína -->
          <section>
            <div class="section-header-row">
              <div>
                <h2 class="section-title">Ricas em proteína</h2>
                <p class="page-subtitle">Nutrição e saciedade com muito sabor.</p>
              </div>
              <a href="#/category/ricas-em-proteina" class="section-link">Ver todas →</a>
            </div>
            <div class="recipes-grid">
              ${proteinRecipes.map(r => UI.renderRecipeCard(r)).join('')}
            </div>
          </section>

          <!-- Seção: Doces & Sobremesas Equilibradas -->
          <section>
            <div class="section-header-row">
              <div>
                <h2 class="section-title">Doces funcionais</h2>
                <p class="page-subtitle">Para saborear sem sair do foco.</p>
              </div>
              <a href="#/category/doces" class="section-link">Ver doces →</a>
            </div>
            <div class="recipes-grid">
              ${sweetRecipes.map(r => UI.renderRecipeCard(r)).join('')}
            </div>
          </section>
        </div>
      `;
    }

    // ==========================================
    // TELA 2: BUSCA (SEARCH)
    // ==========================================
    renderSearchView() {
      const popularTags = [
        { id: '', label: 'Todas' },
        { id: 'banana', label: '🍌 Banana' },
        { id: 'chocolate', label: '🍫 Chocolate' },
        { id: 'frango', label: '🍗 Frango' },
        { id: 'proteína', label: '⚡ Proteína' },
        { id: 'rápido', label: '⏱️ Rápido' },
        { id: 'sem forno', label: '🍳 Sem forno' },
        { id: 'poucos ingredientes', label: '✨ Poucos ingredientes' }
      ];

      return `
        <div class="search-view animate-fade-in">
          <div class="search-header-box">
            <h1 class="page-title">Explorar Receitas</h1>
            <p class="page-subtitle">Busque por nome, categoria ou qualquer ingrediente que você tem na despensa.</p>
          </div>

          <div class="search-bar-wrapper">
            <div class="search-bar-input-box">
              <span class="search-bar-icon">${UI.icons.search}</span>
              <input 
                type="text" 
                id="search-recipe-input" 
                class="search-bar-input" 
                placeholder="Digite banana, cacau, aveia, frango..." 
                autocomplete="off"
              />
              <button 
                id="search-clear-btn" 
                class="search-clear-btn" 
                style="display: ${this.searchQuery ? 'inline-flex' : 'none'};"
                title="Limpar busca"
              >
                ✕
              </button>
            </div>
          </div>

          <div class="search-tags-row">
            ${popularTags.map(tag => `
              <button 
                class="filter-tag-btn ${this.activeSearchTag === tag.id ? 'active' : ''}" 
                onclick="window.fitoraApp.handleSearchTagFilter('${tag.id}')"
              >
                ${tag.label}
              </button>
            `).join('')}
          </div>

          <div id="search-results-container">
            ${this.getFilteredSearchResultsHtml()}
          </div>
        </div>
      `;
    }

    handleSearchTagFilter(tagId) {
      this.activeSearchTag = tagId;
      this.render();
    }

    getFilteredSearchResultsHtml() {
      const q = this.searchQuery.trim().toLowerCase();
      const tag = this.activeSearchTag.toLowerCase();

      let filtered = this.recipes.filter(recipe => {
        const matchText = !q || (
          recipe.name.toLowerCase().includes(q) ||
          recipe.category.toLowerCase().includes(q) ||
          recipe.description.toLowerCase().includes(q) ||
          recipe.ingredients.some(ing => ing.toLowerCase().includes(q)) ||
          recipe.tags.some(t => t.toLowerCase().includes(q))
        );

        const matchTag = !tag || (
          recipe.tags.some(t => t.toLowerCase() === tag) ||
          recipe.ingredients.some(ing => ing.toLowerCase().includes(tag)) ||
          recipe.name.toLowerCase().includes(tag)
        );

        return matchText && matchTag;
      });

      if (filtered.length === 0) {
        return UI.renderEmptyState({
          icon: UI.icons.search,
          title: 'Nenhuma receita encontrada',
          description: `Não encontramos receitas para "${this.searchQuery || this.activeSearchTag}". Tente buscar por ingredientes simples como "banana", "aveia", "frango" ou "cacau".`,
          buttonText: 'Ver todas as receitas',
          buttonAction: `window.fitoraApp.searchQuery=''; window.fitoraApp.activeSearchTag=''; window.fitoraApp.render();`
        });
      }

      return `
        <div class="search-results-meta">
          <span>${filtered.length} ${filtered.length === 1 ? 'receita encontrada' : 'receitas encontradas'}</span>
          ${this.searchQuery ? `<span>Termo: "${this.searchQuery}"</span>` : ''}
        </div>
        <div class="recipes-grid" style="margin-top: var(--space-md);">
          ${filtered.map(r => UI.renderRecipeCard(r)).join('')}
        </div>
      `;
    }

    updateSearchResults() {
      const container = document.getElementById('search-results-container');
      if (container) {
        container.innerHTML = this.getFilteredSearchResultsHtml();
      }
    }

    // ==========================================
    // TELA 3: FAVORITAS (FAVORITES)
    // ==========================================
    renderFavoritesView() {
      const favIds = Storage.getFavorites();
      const favRecipes = this.recipes.filter(r => favIds.includes(r.id));

      return `
        <div class="favorites-view animate-fade-in">
          <div class="home-greeting-box">
            <h1 class="page-title">Suas Favoritas</h1>
            <p class="page-subtitle">Acesse suas receitas salvas rapidamente, direto no seu dispositivo.</p>
          </div>

          ${favRecipes.length === 0 ? UI.renderEmptyState({
            icon: UI.icons.heart,
            title: 'Você ainda não salvou receitas',
            description: 'Toque no ícone de coração em qualquer receita para salvá-la aqui e ter acesso fácil sempre que for cozinhar.',
            buttonText: 'Explorar receitas',
            buttonAction: `location.hash='#/'`
          }) : `
            <div class="search-results-meta">
              <span>${favRecipes.length} ${favRecipes.length === 1 ? 'receita salva' : 'receitas salvas'}</span>
            </div>
            <div class="recipes-grid">
              ${favRecipes.map(r => UI.renderRecipeCard(r)).join('')}
            </div>
          `}
        </div>
      `;
    }

    // ==========================================
    // TELA: RECEITAS FEITAS (COOKED / CONQUISTAS)
    // ==========================================
    renderCookedView() {
      const cookedIds = Storage.getCooked();
      const cookedRecipes = this.recipes.filter(r => cookedIds.includes(r.id));
      const totalCount = cookedRecipes.length;
      const percent = Math.min(100, Math.round((totalCount / this.recipes.length) * 100));

      let chefTitle = 'Iniciante Saudável 🥗';
      let chefMotivation = 'Prepare sua primeira receita e comece sua jornada culinária FITORA!';

      if (totalCount >= 20) {
        chefTitle = 'Lenda Gastronômica FITORA 👑';
        chefMotivation = 'Impressionante! Você domina a arte da culinária saudável e prática.';
      } else if (totalCount >= 10) {
        chefTitle = 'Mestre da Praticidade 🌟';
        chefMotivation = 'Você já preparou diversas opções equilibradas e saborosas!';
      } else if (totalCount >= 5) {
        chefTitle = 'Chef Fit em Ação 🥑';
        chefMotivation = 'Você está construindo um hábito alimentar incrível dia após dia.';
      } else if (totalCount >= 1) {
        chefTitle = 'Aventureiro na Cozinha 🍳';
        chefMotivation = 'Excelente começo! Continue explorando novos sabores e preparos.';
      }

      return `
        <div class="cooked-view animate-fade-in">
          <div class="home-greeting-box">
            <h1 class="page-title">Receitas Feitas</h1>
            <p class="page-subtitle">Seu diário culinário de conquistas e pratos já preparados.</p>
          </div>

          <!-- Card de Nível do Chef / Conquistas -->
          <div class="chef-level-card">
            <div class="chef-level-header">
              <div>
                <span class="chef-badge-pill">
                  ${UI.icons.trophy}
                  <span>${chefTitle}</span>
                </span>
                <p style="margin-top: 6px; font-size: 0.92rem; color: var(--color-text-muted);">${chefMotivation}</p>
              </div>
              <div class="chef-counter-text">
                <span style="font-size: 1.8rem; color: #10B981; font-weight: 900;">${totalCount}</span>
                <span style="font-size: 0.95rem; color: var(--color-text-muted);">/ ${this.recipes.length} feitas</span>
              </div>
            </div>

            <div class="chef-progress-track">
              <div class="chef-progress-fill" style="width: ${percent}%;"></div>
            </div>

            <div class="chef-progress-meta">
              <span>Progresso da Coleção: ${percent}%</span>
              <span>${totalCount === 1 ? '1 receita concluída' : `${totalCount} receitas concluídas`}</span>
            </div>
          </div>

          ${totalCount === 0 ? UI.renderEmptyState({
            icon: UI.icons.chef,
            title: 'Você ainda não marcou receitas feitas',
            description: 'Depois de preparar qualquer receita, toque no botão "Marcar como Feita" ou conclua os passos no "Modo Cozinha" para registrar sua conquista aqui!',
            buttonText: 'Explorar receitas para cozinhar',
            buttonAction: `location.hash='#/'`
          }) : `
            <div class="search-results-meta">
              <span>${totalCount} ${totalCount === 1 ? 'receita preparada' : 'receitas preparadas'} por você</span>
            </div>
            <div class="recipes-grid">
              ${cookedRecipes.map(r => UI.renderRecipeCard(r)).join('')}
            </div>
          `}
        </div>
      `;
    }

    // ==========================================
    // TELA 4: CATEGORIA ESPECÍFICA
    // ==========================================
    renderCategoryView(categoryId) {
      const cat = this.categories.find(c => c.id === categoryId);
      if (!cat) {
        return this.renderNotFoundView();
      }

      let filtered = [];
      if (categoryId === 'ricas-em-proteina') {
        filtered = this.recipes.filter(r => r.tags.includes('proteína'));
      } else if (categoryId === 'ate-20-minutos') {
        filtered = this.recipes.filter(r => r.tags.includes('até 20 minutos'));
      } else {
        filtered = this.recipes.filter(r => r.category.toLowerCase() === cat.name.toLowerCase());
      }

      return `
        <div class="category-view animate-fade-in">
          <div class="recipe-detail-header-bar">
            <button class="back-btn" onclick="history.back()">
              ${UI.icons.arrowLeft} Voltar
            </button>
          </div>

          <div class="category-banner">
            <div>
              <span class="recipe-card-category">Categoria FITORA</span>
              <h1 class="category-banner-title">
                <span style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(107, 125, 98, 0.18); color: var(--color-primary);">${UI.categoryIcons[cat.id] || UI.categoryIcons['todas']}</span>
                <span>${cat.name}</span>
              </h1>
            </div>
            <span style="font-weight: 800; font-size: 1.15rem; color: var(--color-primary);">
              ${filtered.length} receitas
            </span>
          </div>

          ${UI.renderCategoriesSection(this.categories, cat.id)}

          <div class="recipes-grid" style="margin-top: var(--space-md);">
            ${filtered.map(r => UI.renderRecipeCard(r)).join('')}
          </div>
        </div>
      `;
    }

    // ==========================================
    // TELA 5: DETALHES DA RECEITA (INSPIRADA NA REFERÊNCIA)
    // ==========================================
    renderRecipeDetailView(recipeId) {
      const recipe = this.recipes.find(r => r.id === Number(recipeId));
      if (!recipe) {
        return this.renderNotFoundView();
      }

      const factor = this.currentServingFactor || 1;
      const related = this.recipes
        .filter(r => r.category === recipe.category && r.id !== recipe.id)
        .slice(0, 3);

      return `
        <article class="recipe-detail-wrapper animate-fade-in">
          <!-- Botão Voltar -->
          <div class="recipe-detail-header-bar">
            <button class="back-btn" onclick="history.back()">
              ${UI.icons.arrowLeft} Voltar
            </button>
          </div>

          <!-- Imagem Topo Imersiva com Botão Flutuante de Favorito -->
          <div class="recipe-hero-image-wrap">
            <img 
              src="${recipe.image}" 
              alt="${recipe.name}" 
              class="recipe-hero-img" 
              loading="eager"
              onerror="this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80'"
            />
            <div class="recipe-hero-fav-float">
              ${UI.renderFavoriteButton(recipe.id)}
            </div>
          </div>

          <!-- Folha Branca de Conteúdo (Sheet da Referência) -->
          <div class="recipe-detail-sheet">
            <div class="recipe-title-row">
              <div>
                <span class="recipe-card-category">${recipe.category}</span>
                <h1 class="recipe-detail-title">${recipe.name}</h1>
              </div>
            </div>
            <p class="recipe-detail-desc">${recipe.description}</p>

            <!-- Toolbar de Ação Gastronômica -->
            <div class="recipe-action-toolbar">
              <button class="kitchen-mode-trigger-btn" onclick="window.fitoraApp.openKitchenMode(${recipe.id})">
                ${UI.icons.chef}
                <span>Modo Cozinha (Mãos na Massa)</span>
              </button>

              <button 
                type="button" 
                class="cooked-toggle-btn ${Storage.isCooked(recipe.id) ? 'is-cooked' : ''}" 
                id="detail-cooked-btn"
                data-cooked-id="${recipe.id}"
                onclick="window.fitoraApp.toggleCooked(${recipe.id}, event)"
                title="${Storage.isCooked(recipe.id) ? 'Clique para desmarcar' : 'Marcar como feita'}"
              >
                ${UI.icons.checkCircle}
                <span>${Storage.isCooked(recipe.id) ? 'Feita por mim! ✨' : 'Marcar como Feita ✅'}</span>
              </button>
            </div>

            <!-- Tabela de Macronutrientes por Porção -->
            <div>
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.06em;">Informação Nutricional Estimada</span>
              <div class="recipe-macros-grid">
                <div class="macro-box macro-box-kcal">
                  <span class="macro-val" id="macro-val-kcal">${Math.round(recipe.calories * factor)} kcal</span>
                  <span class="macro-label">Calorias</span>
                </div>
                <div class="macro-box macro-box-prot">
                  <span class="macro-val" id="macro-val-prot">${Math.round(recipe.protein * factor)}g</span>
                  <span class="macro-label">Proteínas</span>
                </div>
                <div class="macro-box macro-box-carb">
                  <span class="macro-val" id="macro-val-carb">${Math.round(recipe.carbs * factor)}g</span>
                  <span class="macro-label">Carboidratos</span>
                </div>
                <div class="macro-box macro-box-fat">
                  <span class="macro-val" id="macro-val-fat">${Math.round(recipe.fat * factor)}g</span>
                  <span class="macro-label">Gorduras</span>
                </div>
              </div>
            </div>

            <!-- Três Pílulas de Métricas (Tempo • Dificuldade • Rendimento) -->
            <div class="recipe-metric-pills-row">
              <span class="metric-pill">⏱️ ${recipe.time}</span>
              <span class="metric-pill">📈 ${recipe.difficulty}</span>
              <span class="metric-pill">🍽️ ${recipe.servings}</span>
            </div>

            ${recipe.videoUrl ? `
              <div>
                <a href="${recipe.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="align-self: flex-start;">
                  ${UI.icons.play} Assistir ao vídeo da receita
                </a>
              </div>
            ` : ''}

            <!-- Seção de Ingredientes com Calculadora de Porções -->
            <section class="ingredients-section">
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                <h2 class="section-title">Ingredientes</h2>

                <!-- Seletor de Porções -->
                <div class="servings-selector-bar">
                  <span class="servings-label">
                    ${UI.icons.servings}
                    <span>Porções:</span>
                  </span>
                  <div class="servings-btn-group">
                    <button class="serving-btn ${factor === 1 ? 'active' : ''}" data-factor="1" onclick="window.fitoraApp.setServingFactor(1)">1x</button>
                    <button class="serving-btn ${factor === 2 ? 'active' : ''}" data-factor="2" onclick="window.fitoraApp.setServingFactor(2)">2x</button>
                    <button class="serving-btn ${factor === 3 ? 'active' : ''}" data-factor="3" onclick="window.fitoraApp.setServingFactor(3)">3x</button>
                    <button class="serving-btn ${factor === 4 ? 'active' : ''}" data-factor="4" onclick="window.fitoraApp.setServingFactor(4)">4x</button>
                  </div>
                </div>
              </div>

              <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `
                  <li class="ingredient-item">
                    <span class="ingredient-bullet"></span>
                    <span class="ingredient-text">${scaleIngredient(ing, factor)}</span>
                  </li>
                `).join('')}
              </ul>
            </section>

            <!-- Cronômetro de Cozinha Integrado -->
            <section class="kitchen-timer-card">
              <div class="kitchen-timer-top">
                <span class="kitchen-timer-title">
                  ${UI.icons.timer}
                  <span>Cronômetro de Cozinha</span>
                </span>
                <span class="timer-digits" id="timer-digits">00:00</span>
              </div>
              <div class="timer-controls-row">
                <button class="timer-preset-btn" onclick="window.fitoraApp.setTimerPreset(2)">+2 min</button>
                <button class="timer-preset-btn" onclick="window.fitoraApp.setTimerPreset(5)">+5 min</button>
                <button class="timer-preset-btn" onclick="window.fitoraApp.setTimerPreset(10)">+10 min</button>
                <button class="timer-preset-btn" onclick="window.fitoraApp.setTimerPreset(15)">+15 min</button>
                <button class="timer-preset-btn timer-reset-btn" onclick="window.fitoraApp.resetKitchenTimer()">Zerar</button>
                <button class="timer-action-btn timer-start-btn" id="timer-start-btn" onclick="window.fitoraApp.toggleKitchenTimer()">
                  Iniciar
                </button>
              </div>
            </section>

            <!-- Modo de Preparo Interativo (Clicável como Ingredientes) -->
            <section class="prep-steps-section">
              <div class="prep-steps-header">
                <h2 class="section-title">Modo de preparo</h2>
                <span class="prep-steps-hint">Toque para marcar como concluído</span>
              </div>
              <div class="prep-steps-list">
                ${recipe.steps.map((step, idx) => {
                  const stepNum = String(idx + 1).padStart(2, '0');
                  return `
                    <div class="step-card" onclick="this.classList.toggle('checked')">
                      <span class="step-number">
                        <span class="step-number-text">${stepNum}</span>
                        <svg viewBox="0 0 24 24" class="step-check-icon" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <p class="step-instruction">${step}</p>
                    </div>
                  `;
                }).join('')}
              </div>
            </section>

            <!-- Dica FITORA Refinada -->
            ${recipe.tip ? `
              <div class="tip-card">
                <div class="tip-header">
                  ${UI.icons.sparkle}
                  <span>Dica FITORA</span>
                </div>
                <p class="tip-content">${recipe.tip}</p>
              </div>
            ` : ''}

            <!-- Substituições -->
            ${recipe.substitutions ? `
              <div class="substitutions-card">
                <div class="substitutions-header">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
                  <span>Possíveis substituições</span>
                </div>
                <p class="substitutions-content">${recipe.substitutions}</p>
              </div>
            ` : ''}

            <!-- Tags -->
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${recipe.tags.map(t => `
                <span class="filter-tag-btn" onclick="location.hash='#/search'; window.fitoraApp.handleSearchTagFilter('${t}')">
                  #${t}
                </span>
              `).join('')}
            </div>

            <!-- Você Também Pode Gostar -->
            ${related.length > 0 ? `
              <div style="padding-top: var(--space-xl); border-top: 1px solid var(--color-border);">
                <h3 class="section-title" style="margin-bottom: var(--space-md);">Você também pode gostar</h3>
                <div class="recipes-grid">
                  ${related.map(r => UI.renderRecipeCard(r)).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </article>
      `;
    }

    // ==========================================
    // TELA 6: MAIS (ABOUT FITORA)
    // ==========================================
    renderMoreView() {
      return `
        <div class="more-view animate-fade-in">
          <!-- Bônus Exclusivos de Membro -->
          <section class="bonus-hub-card">
            <div>
              <span class="about-badge" style="background: #FFF3EB; color: #D9531E;">🎁 Presentes de Lançamento</span>
              <h2 class="bonus-hub-title" style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; margin: 6px 0 8px;">Seus Bônus Exclusivos</h2>
              <p class="about-text" style="font-size: 0.95rem; margin-bottom: var(--space-md);">
                Você tem acesso vitalício a estes 2 guias práticos inclusos na sua conta FITORA:
              </p>
            </div>
            <div class="bonus-hub-grid">
              <a href="#/bonus/substituicoes" class="bonus-item-card">
                <span class="bonus-card-emoji">🥑</span>
                <div>
                  <h4>Guia de Substituições</h4>
                  <p>Saiba o que trocar quando faltar algum ingrediente sem estragar os macros.</p>
                  <span class="bonus-link-text">Abrir Guia →</span>
                </div>
              </a>
              <a href="#/bonus/compras" class="bonus-item-card">
                <span class="bonus-card-emoji">🛒</span>
                <div>
                  <h4>Lista de Compras Econômica</h4>
                  <p>Checklist interativo da semana com itens coringas para economizar na feira.</p>
                  <span class="bonus-link-text">Abrir Checklist →</span>
                </div>
              </a>
            </div>
          </section>

          <section class="about-card">
            <span class="about-badge">Biblioteca Digital</span>
            <h1 class="about-title">FITORA</h1>
            <p style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); line-height: 1.4;">
              "Receitas que cabem na sua rotina."
            </p>
            <p class="about-text">
              O FITORA nasceu com o propósito de descomplicar a alimentação equilibrada. Acreditamos que comer bem não precisa envolver ingredientes inacessíveis, horas na cozinha ou dietas restritivas e sem sabor.
            </p>
            <p class="about-text">
              Aqui você tem em mãos uma seleção cuidadosamente elaborada de receitas práticas, saborosas e funcionais, desenhadas para você preparar em poucos minutos e desfrutar todos os dias.
            </p>
          </section>

          <section class="pwa-instruction-card">
            <h2 class="pwa-instruction-title">
              📲 Como usar como aplicativo no celular
            </h2>
            <p class="about-text" style="font-size: 0.95rem;">
              Você pode fixar o FITORA na tela inicial do seu celular para abrir com um toque:
            </p>
            <div class="pwa-steps-list">
              <div class="pwa-step-item">
                <span class="pwa-step-icon">1</span>
                <div><strong>No iPhone (Safari):</strong> Toque no botão de Compartilhar e selecione <em>"Adicionar à Tela de Início"</em>.</div>
              </div>
              <div class="pwa-step-item">
                <span class="pwa-step-icon">2</span>
                <div><strong>No Android (Chrome):</strong> Toque nos três pontinhos e selecione <em>"Instalar aplicativo"</em> ou <em>"Adicionar à tela inicial"</em>.</div>
              </div>
              <div class="pwa-step-item">
                <span class="pwa-step-icon">3</span>
                <div>Pronto! O ícone do FITORA ficará salvo na sua tela sem ocupar memória pesada.</div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="section-title" style="margin-bottom: var(--space-md);">Dúvidas frequentes</h2>
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">Preciso de internet para acessar?</h3>
                <p class="faq-answer">Você pode abrir o link no seu navegador a qualquer momento. Seus favoritos e configurações ficam salvos automaticamente no seu aparelho.</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">Como funcionam os favoritos?</h3>
                <p class="faq-answer">Basta tocar no coração de qualquer receita. Ela é armazenada localmente na memória do seu navegador com total privacidade.</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">Como funciona a calculadora de porções?</h3>
                <p class="faq-answer">Na tela de cada receita, selecione 1x, 2x, 3x ou 4x. Os ingredientes e valores nutricionais são recalculados instantaneamente para a sua necessidade.</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">O que é o Modo Cozinha?</h3>
                <p class="faq-answer">É uma tela com texto gigante e passo a passo focado para você cozinhar com o celular apoiado no balcão sem precisar tocar na tela a toda hora.</p>
              </div>
            </div>
          </section>

          <footer style="text-align: center; padding: var(--space-xl) 0; color: var(--color-text-muted); font-size: 0.85rem;">
            <p><strong>FITORA</strong> • Biblioteca Digital de Receitas</p>
            <p style="margin-top: 4px;">Edição Exclusiva para Compradores • Versão 2.0 Premium</p>
          </footer>
        </div>
      `;
    }

    // ==========================================
    // TELA DEDICADA DE BÔNUS (#/bonus)
    // ==========================================
    renderBonusView(subtab = 'substituicoes') {
      const activeTab = (subtab === 'compras') ? 'compras' : 'substituicoes';
      const checkedGroceries = Storage.getGroceryList();
      
      let totalGroceryItems = 0;
      GROCERY_CATEGORIES.forEach(cat => totalGroceryItems += cat.items.length);
      const checkedCount = checkedGroceries.length;
      const progressPercent = totalGroceryItems > 0 ? Math.round((checkedCount / totalGroceryItems) * 100) : 0;

      return `
        <div class="bonus-view animate-fade-in">
          <div class="bonus-header">
            <span class="bonus-header-badge">🎁 Presentes Exclusivos FITORA</span>
            <h1 class="bonus-header-title">Bônus de Lançamento</h1>
            <p class="page-subtitle" style="margin-bottom: 24px;">
              Materiais desenvolvidos para você economizar tempo no supermercado e nunca travar ao cozinhar.
            </p>

            <div class="bonus-nav-tabs">
              <button 
                type="button" 
                class="bonus-nav-btn ${activeTab === 'substituicoes' ? 'active' : ''}" 
                onclick="location.hash='#/bonus/substituicoes'"
              >
                <span>🥑</span> Substituições
              </button>
              <button 
                type="button" 
                class="bonus-nav-btn ${activeTab === 'compras' ? 'active' : ''}" 
                onclick="location.hash='#/bonus/compras'"
              >
                <span>🛒</span> Lista de Compras
              </button>
            </div>
          </div>

          ${activeTab === 'substituicoes' ? `
            <!-- BÔNUS 1: GUIA DE SUBSTITUIÇÕES -->
            <div class="subs-search-box">
              <svg class="subs-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
              <input 
                type="text" 
                id="subs-search-input" 
                class="subs-search-input" 
                placeholder="Pesquisar ingrediente (ex: farinha, ovo, açúcar, frango...)"
              >
            </div>

            <div class="subs-grid" id="subs-cards-grid">
              ${SUBSTITUTIONS_DATA.map(sub => `
                <div class="sub-card" data-sub-id="${sub.id}" data-category="${sub.category}" data-search="${(sub.original + ' ' + sub.substitutes.map(s => s.name).join(' ')).toLowerCase()}">
                  <div class="sub-card-header">
                    <h3 class="sub-card-original">${sub.original}</h3>
                    <span class="sub-card-cat">${sub.categoryLabel}</span>
                  </div>
                  <div class="sub-options-list">
                    ${sub.substitutes.map(s => `
                      <div class="sub-option-item">
                        <div class="sub-option-title">
                          <span>${s.name}</span>
                          <span class="sub-option-ratio">${s.ratio}</span>
                        </div>
                        <p class="sub-option-benefit">${s.benefit}</p>
                      </div>
                    `).join('')}
                  </div>
                  <div class="sub-card-tip">
                    <span>💡</span>
                    <div><strong>Dica do Chef:</strong> ${sub.chefTip}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <!-- BÔNUS 2: LISTA DE COMPRAS ECONÔMICA -->
            <div class="grocery-progress-box">
              <div class="grocery-progress-header">
                <span>🛒 Progresso no Mercado: <strong id="grocery-progress-text">${checkedCount} de ${totalGroceryItems} itens (${progressPercent}%)</strong></span>
                <button type="button" id="grocery-clear-btn" class="grocery-clear-btn" onclick="window.fitoraApp.clearGroceryList()">Limpar tudo</button>
              </div>
              <div class="grocery-progress-bar-bg">
                <div class="grocery-progress-bar-fill" id="grocery-progress-bar" style="width: ${progressPercent}%;"></div>
              </div>
              <p style="font-size: 0.8rem; color: var(--color-text-muted);">
                💡 <em>Toque no item para marcar como comprado. Fica salvo automaticamente no seu celular!</em>
              </p>
            </div>

            <div class="grocery-sections-list">
              ${GROCERY_CATEGORIES.map(cat => `
                <div class="grocery-cat-card">
                  <h3 class="grocery-cat-title">${cat.name}</h3>
                  <p class="grocery-cat-desc">${cat.description}</p>
                  <ul class="grocery-items-list">
                    ${cat.items.map(item => {
                      const isChecked = checkedGroceries.includes(item.id);
                      return `
                        <li 
                          class="grocery-item-row ${isChecked ? 'is-checked' : ''}" 
                          data-item-id="${item.id}"
                          onclick="window.fitoraApp.toggleGroceryItem('${item.id}')"
                        >
                          <div class="grocery-checkbox">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="${isChecked ? '' : 'display:none;'}">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </div>
                          <div class="grocery-item-details">
                            <div class="grocery-item-name">${item.name}</div>
                            <div class="grocery-item-note">${item.note}</div>
                          </div>
                          <span class="grocery-item-qty">${item.qty}</span>
                        </li>
                      `;
                    }).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    }

    toggleGroceryItem(id) {
      const isChecked = Storage.toggleGroceryItem(id);
      const row = document.querySelector(`.grocery-item-row[data-item-id="${id}"]`);
      if (row) {
        row.classList.toggle('is-checked', isChecked);
        const svg = row.querySelector('.grocery-checkbox svg');
        if (svg) svg.style.display = isChecked ? 'block' : 'none';
      }
      this.updateGroceryProgress();
    }

    clearGroceryList() {
      Storage.clearGroceryList();
      document.querySelectorAll('.grocery-item-row').forEach(row => {
        row.classList.remove('is-checked');
        const svg = row.querySelector('.grocery-checkbox svg');
        if (svg) svg.style.display = 'none';
      });
      this.updateGroceryProgress();
      UI.showToast('Lista de compras reiniciada!');
    }

    updateGroceryProgress() {
      const checked = Storage.getGroceryList();
      let total = 0;
      GROCERY_CATEGORIES.forEach(c => total += c.items.length);
      const count = checked.length;
      const percent = total > 0 ? Math.round((count / total) * 100) : 0;

      const bar = document.getElementById('grocery-progress-bar');
      const text = document.getElementById('grocery-progress-text');
      if (bar) bar.style.width = percent + '%';
      if (text) text.textContent = `${count} de ${total} itens (${percent}%)`;
    }

    renderNotFoundView() {
      return UI.renderEmptyState({
        icon: UI.icons.search,
        title: 'Receita não encontrada',
        description: 'A página ou receita que você tentou acessar não está disponível.',
        buttonText: 'Voltar para o Início',
        buttonAction: `location.hash='#/'`
      });
    }
  }

  // Inicialização
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.fitoraApp = new FitoraApp();
    });
  } else {
    window.fitoraApp = new FitoraApp();
  }
})();
