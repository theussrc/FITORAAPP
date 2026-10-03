# FITORA — "Receitas que cabem na sua rotina."

O **FITORA** é uma biblioteca digital premium de receitas práticas, saborosas e equilibradas com foco em receitas fitness e fáceis de preparar no dia a dia.

---

## ✨ Características do Projeto

- **Mobile-First & Responsivo**: Projetado sob medida para smartphones (barra inferior nativa), tablets (grid equilibrado) e desktop (navegação limpa no topo).
- **Sem Autenticação ou Barreiras**: O comprador acessa diretamente pelo link no navegador, sem cadastros, sem login e sem atritos.
- **Favoritos com LocalStorage**: As receitas favoritas são salvas diretamente no dispositivo do usuário e atualizadas instantaneamente.
- **Busca Instantânea**: Pesquise por nome, categoria ou ingredientes (ex: buscando *"banana"* ou *"frango"*, o app filtra receitas que contêm o termo em qualquer parte dos ingredientes ou preparo).
- **Experiência de Cozinha Otimizada**:
  - Imagens gastronômicas de alta qualidade
  - Ingredientes com checklist interativo (toque para riscar o que já usou)
  - Modo de preparo em etapas numeradas grandes (`01`, `02`, `03`...)
  - **Dica FITORA** exclusiva para cada receita
  - Campo de **Possíveis substituições**
  - Botão opcional para **Assistir ao vídeo** (quando houver `videoUrl`)
- **PWA Ready**: O usuário pode salvar como app diretamente na tela inicial do iPhone (Safari) ou Android (Chrome).

---

## 🎨 Identidade Visual e Design

- **Fundo Principal**: `#F7F6F2` (linho acolhedor)
- **Texto Principal**: `#171717` (carvão escuro)
- **Verde Principal**: `#6B7D62` (verde oliva suave)
- **Verde Claro**: `#DCE4D7` (sálvia delicado)
- **Branco**: `#FFFFFF` (superfície pura dos cards)
- **Cinza Secundário**: `#8A8A84`
- **Tipografia**: **Manrope** (principal) e **Fraunces** (títulos especiais e destaques editoriais)

---

## 📂 Estrutura do Código

```text
FITORA/
├── index.html              # Estrutura semântica SPA, SEO e PWA
├── manifest.json           # Manifesto PWA para instalação no celular
├── css/
│   ├── variables.css       # Tokens de design (cores, tipografia, sombras, raios)
│   ├── base.css            # Reset, tipografia fluida e animações
│   ├── components.css      # Componentes (Cards, Botões, Header, Nav, Steps, Dica FITORA)
│   └── pages.css           # Layouts das telas (Início, Busca, Favoritas, Categoria, Receita, Mais)
└── js/
    ├── recipes-data.js     # Banco de dados centralizado com as 50 receitas completas
    ├── storage.js          # Módulo reativo de favoritos com localStorage
    ├── ui.js               # Renderizadores e microinterações
    ├── app.js              # Aplicação e roteador SPA modular
    └── fitora-bundle.js    # Bundle universal (garante abertura via servidor ou duplo clique direto)
```

---

## 🍳 As 50 Receitas Iniciais Cadastradas

1. **Café da Manhã (1 a 10)**:
   - Panqueca de banana e aveia
   - Panqueca de cacau
   - Panqueca de maçã e canela
   - Overnight oats de banana
   - Overnight oats de chocolate
   - Mingau cremoso de aveia
   - Omelete de queijo e tomate
   - Ovos mexidos cremosos
   - Tapioca com frango e queijo
   - Pão de queijo de frigideira

2. **Doces (11 a 20)**:
   - Brownie de banana e cacau
   - Brownie de aveia e chocolate
   - Cookie de aveia e chocolate
   - Cookie de banana
   - Brigadeiro de cacau
   - Trufa de chocolate e aveia
   - Barrinha caseira de aveia
   - Bolinho de chocolate de caneca
   - Muffin de banana e canela
   - Muffin de chocolate

3. **Sobremesas (21 a 30)**:
   - Mousse de chocolate com iogurte
   - Mousse de maracujá
   - Creme de morango com iogurte
   - Morango com chocolate
   - Cheesecake no pote
   - Pavê de chocolate
   - Banoffee no pote
   - Pudim de iogurte
   - Sorvete caseiro de banana
   - Frozen yogurt de frutas vermelhas

4. **Lanches (31 a 38)**:
   - Sanduíche natural de frango
   - Wrap de frango
   - Wrap de carne
   - Crepioca de frango
   - Crepioca de queijo
   - Pizza de frigideira
   - Pão de aveia na frigideira
   - Bolinho salgado de frango

5. **Almoço & Jantar (39 a 45)**:
   - Frango cremoso com milho
   - Frango grelhado com legumes
   - Strogonoff de frango
   - Macarrão cremoso com frango
   - Arroz cremoso com frango
   - Escondidinho de frango
   - Bowl de frango, arroz e legumes

6. **Bebidas (46 a 50)**:
   - Smoothie de banana e morango
   - Vitamina de banana e aveia
   - Smoothie de chocolate e banana
   - Café gelado cremoso
   - Chocolate quente cremoso

---

## 🚀 Como Executar

Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Safari, Edge, Firefox) ou hospedá-lo em qualquer serviço estático (Vercel, Netlify, Cloudflare Pages, GitHub Pages ou servidor próprio).
