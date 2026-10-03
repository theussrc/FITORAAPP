# 📖 Guia de Atualização Mensal — FITORA (Novas Receitas)

Este guia foi feito para você adicionar **20 (ou mais) novas receitas por mês** ao FITORA de forma rápida, simples e sem precisar alterar nenhuma linha de HTML ou CSS.

---

## ⚡ Como Funciona o Sistema

O FITORA é 100% dinâmico:
* Ao adicionar novas receitas, o contador de receitas (**Todas (50)** ➡️ **Todas (70)**), as buscas, os filtros de categoria e a barra de conquistas na aba **Feitas** se atualizam **automaticamente**.
* Cada receita nova ganha suporte instantâneo a:
  - 🌓 Modo Claro e Escuro
  - ❤️ Sistema de Favoritas
  - 🍳 Marcação de "Feita por mim!"
  - ⚖️ Multiplicador de Porções (1x, 2x, 3x, 4x)
  - ⏱️ Cronômetro de Cozinha
  - 👨‍🍳 Modo Cozinha Passo a Passo em Tela Cheia

---

## 📝 O Modelo Padrão de Receita

Cada receita é um bloco de dados simples. Para adicionar uma nova receita, basta copiar este modelo e preencher:

```javascript
{
  id: 51, // Próximo número sequencial (51, 52, 53...)
  name: "Nome da Sua Receita",
  category: "Café da manhã", // Opções: "Café da manhã", "Almoço e jantar", "Doces", "Sobremesas", "Lanches", "Bebidas"
  description: "Uma frase atraente e saborosa descrevendo o prato.",
  image: "https://images.unsplash.com/photo-...", // Link de foto em alta definição
  time: "15 min",
  difficulty: "Fácil", // "Fácil" ou "Médio"
  servings: "2 porções",
  calories: 220, // Calorias estimadas por porção
  protein: 18,   // Proteínas (g)
  carbs: 22,     // Carboidratos (g)
  fat: 6,        // Gorduras (g)
  ingredients: [
    "2 ovos inteiros",
    "1 xícara de aveia em flocos",
    "1 colher de sopa de sementes de chia",
    "1 pitada de sal e orégano"
  ],
  steps: [
    "Em uma tigela, bata bem os ovos com os temperos.",
    "Adicione a aveia e misture até virar uma massa homogênea.",
    "Despeje em uma frigideira antiaderente levemente untada.",
    "Doure por 3 minutos de cada lado em fogo baixo e sirva quente."
  ],
  tip: "Dica opcional do chef para deixar a receita ainda mais gostosa.",
  substitutions: "Sugestões de troca de ingredientes para quem tem restrições.",
  tags: ["café da manhã", "proteína", "rápido", "até 20 minutos", "fácil", "novo"],
  videoUrl: "" // Opcional: link do YouTube ou deixe vazio ""
},
```

---

## 🚀 2 Formas Práticas de Fazer a Atualização

### Forma 1: Pedindo para a IA (Mais Rápida e Sem Esforço)
Quando chegar a hora da atualização mensal:
1. Abra o chat e diga:
   > *"Quero adicionar 20 novas receitas para a atualização deste mês. Segue a lista dos pratos: [sua lista ou ideias]. Por favor, adicione ao FITORA com todos os ingredientes, passos e fotos."*
2. A IA cuidará de estruturar, calcular os macros e inserir no código em poucos segundos.

### Forma 2: Colando Diretamente no Arquivo
1. Abra o arquivo [recipes-data.js](file:///c:/Users/010617753/Desktop/FITORA/js/recipes-data.js).
2. Vá até o final da lista `RECIPES_DATA` (após o id 50).
3. Cole as 20 novas receitas com os ids sequenciais `51` a `70`.
4. Salve o arquivo. Pronto!

---

## 📸 Dica de Ouro para Imagens
Para garantir fotos com qualidade de estúdio gastronômico:
* Use o site gratuito **[Unsplash.com](https://unsplash.com)** pesquisando em inglês (ex: *pancake, chicken wrap, salad bowl, brownie*).
* Clique com o botão direito na imagem e copie o endereço da imagem (`https://images.unsplash.com/photo-...`).
* Ou gere imagens originais com a IA do Antigravity quando desejar fotos exclusivas de receitas brasileiras (como tapioca, crepioca, coxinha fit, brigadeiro de biomassa).
