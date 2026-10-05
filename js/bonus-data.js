/**
 * FITORA - Dados dos Bônus Exclusivos
 * Bônus 1: Guia de Substituições Inteligentes
 * Bônus 2: Lista de Compras Econômica da Semana
 */

export const SUBSTITUTIONS_DATA = [
  // Farinhas e Carboidratos
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

  // Proteínas
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

  // Laticínios e Gorduras
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

  // Adoçantes e Doces
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

export const GROCERY_CATEGORIES = [
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
