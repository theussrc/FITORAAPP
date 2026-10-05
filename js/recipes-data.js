/**
 * FITORA - Banco de Dados Central de Receitas
 * Fotos gastronômicas curadas e correspondentes
 */

export const RECIPES_DATA = [
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

export const CATEGORIES_LIST = [
  { id: "cafe-da-manha", name: "Café da manhã", count: 10, icon: "☕" },
  { id: "doces", name: "Doces", count: 10, icon: "🍪" },
  { id: "sobremesas", name: "Sobremesas", count: 10, icon: "🍨" },
  { id: "lanches", name: "Lanches", count: 8, icon: "🥪" },
  { id: "almoco-jantar", name: "Almoço & jantar", count: 7, icon: "🥗" },
  { id: "bebidas", name: "Bebidas", count: 5, icon: "🥤" },
  { id: "ricas-em-proteina", name: "Ricas em proteína", count: 17, icon: "⚡" },
  { id: "ate-20-minutos", name: "Até 20 minutos", count: 44, icon: "⏱️" }
];

export const RECIPES_NUTRITION = {
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

RECIPES_DATA.forEach(r => {
  const nut = RECIPES_NUTRITION[r.id] || { calories: 210, protein: 14, carbs: 24, fat: 6 };
  r.calories = nut.calories;
  r.protein = nut.protein;
  r.carbs = nut.carbs;
  r.fat = nut.fat;
});

