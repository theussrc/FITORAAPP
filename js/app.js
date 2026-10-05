/**
 * FITORA - Aplicação Principal e Roteador
 */
import { RECIPES_DATA, CATEGORIES_LIST } from './recipes-data.js';
import { Storage } from './storage.js';
import { UI } from './ui.js';
import { SUBSTITUTIONS_DATA, GROCERY_CATEGORIES } from './bonus-data.js';

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

// Auxiliar de som para o timer de cozinha (Web Audio API sintética e offline)
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

    // Escuta mudanças de hash na URL
    window.addEventListener('hashchange', () => this.handleRoute());
    
    // Escuta sincronização global de favoritos
    window.addEventListener('fitora:favorites-changed', (e) => {
      this.handleFavoriteChange(e.detail);
    });

    // Escuta sincronização global de receitas feitas
    window.addEventListener('fitora:cooked-changed', (e) => {
      this.handleCookedChange(e.detail);
    });

    // Delegação de cliques para botões de favorito
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

    // Carrega rota inicial
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

  // Parseador de Rotas Hash
  parseRoute() {
    const hash = window.location.hash.slice(2) || 'home'; // remove '#/'
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

  // Atualização em tempo real de favoritos na UI
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

  // Renderizador Central
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

  // Eventos específicos por tela
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
          <p class="page-subtitle">Pesquise por nome, categoria ou qualquer ingrediente que você tem em casa.</p>
        </div>

        <!-- Campo de Busca Interativo -->
        <div class="search-bar-wrapper">
          <div class="search-bar-input-box">
            <span class="search-bar-icon">${UI.icons.search}</span>
            <input 
              type="text" 
              id="search-recipe-input" 
              class="search-bar-input" 
              placeholder="Digite um ingrediente ou receita (ex: banana, cacau, aveia)..." 
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

        <!-- Tags Populares de Filtro -->
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

        <!-- Resultados da Busca -->
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

  // Filtragem e busca avançada
  getFilteredSearchResultsHtml() {
    const q = this.searchQuery.trim().toLowerCase();
    const tag = this.activeSearchTag.toLowerCase();

    let filtered = this.recipes.filter(recipe => {
      // Filtro por texto (nome, categoria, descrição ou ingredientes)
      const matchText = !q || (
        recipe.name.toLowerCase().includes(q) ||
        recipe.category.toLowerCase().includes(q) ||
        recipe.description.toLowerCase().includes(q) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(q)) ||
        recipe.tags.some(t => t.toLowerCase().includes(q))
      );

      // Filtro por tag rápida
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

        <!-- Folha de Conteúdo (Sheet da Referência) -->
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

          <!-- Substituições quando disponíveis -->
          ${recipe.substitutions ? `
            <div class="substitutions-card">
              <div class="substitutions-header">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
                <span>Possíveis substituições</span>
              </div>
              <p class="substitutions-content">${recipe.substitutions}</p>
            </div>
          ` : ''}

          <!-- Tags da Receita -->
          <div style="margin-bottom: var(--space-2xl); display: flex; flex-wrap: wrap; gap: 6px;">
            ${recipe.tags.map(t => `
              <span class="filter-tag-btn" onclick="location.hash='#/search'; window.fitoraApp.handleSearchTagFilter('${t}')">
                #${t}
              </span>
            `).join('')}
          </div>

          <!-- Seção: Você também pode gostar -->
          ${related.length > 0 ? `
            <section style="margin-top: var(--space-2xl); padding-top: var(--space-xl); border-top: 1px solid var(--color-border);">
              <div class="section-header-row">
                <h2 class="section-title">Você também pode gostar</h2>
              </div>
              <div class="recipes-grid">
                ${related.map(r => UI.renderRecipeCard(r)).join('')}
              </div>
            </section>
          ` : ''}
        </div>
      </article>
    `;
  }

  // ==========================================
  // TELA 6: MAIS (ABOUT / GUIA FITORA)
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

        <!-- Sobre o FITORA -->
        <section class="about-card">
          <span class="about-badge">Biblioteca Digital</span>
          <h1 class="about-title">FITORA</h1>
          <p style="font-size: 1.15rem; font-weight: 600; color: var(--color-primary-hover); line-height: 1.4;">
            "Receitas que cabem na sua rotina."
          </p>
          <p class="about-text">
            O FITORA nasceu com o propósito de descomplicar a alimentação equilibrada. Acreditamos que comer bem não precisa envolver ingredientes inacessíveis, horas na cozinha ou dietas restritivas e sem sabor.
          </p>
          <p class="about-text">
            Aqui você tem em mãos uma seleção cuidadosamente elaborada de receitas práticas, saborosas e funcionais, desenhadas para você preparar em poucos minutos e desfrutar todos os dias.
          </p>
        </section>

        <!-- Como Instalar como Aplicativo (PWA / Atalho) -->
        <section class="pwa-instruction-card">
          <h2 class="pwa-instruction-title">
            📲 Como usar como aplicativo no celular
          </h2>
          <p class="about-text" style="font-size: 0.95rem;">
            Você pode fixar o FITORA na tela inicial do seu celular para abrir com um toque, exatamente como um aplicativo da App Store ou Google Play:
          </p>
          <div class="pwa-steps-list">
            <div class="pwa-step-item">
              <span class="pwa-step-icon">1</span>
              <div><strong>No iPhone (Safari):</strong> Toque no botão de Compartilhar (ícone com quadrado e seta para cima) e selecione <em>"Adicionar à Tela de Início"</em>.</div>
            </div>
            <div class="pwa-step-item">
              <span class="pwa-step-icon">2</span>
              <div><strong>No Android (Chrome):</strong> Toque nos três pontinhos no canto superior e selecione <em>"Instalar aplicativo"</em> ou <em>"Adicionar à tela inicial"</em>.</div>
            </div>
            <div class="pwa-step-item">
              <span class="pwa-step-icon">3</span>
              <div>Pronto! O ícone do FITORA ficará salvo na sua tela sem ocupar memória pesada.</div>
            </div>
          </div>
        </section>

        <!-- FAQ e Dicas de Uso -->
        <section>
          <h2 class="section-title" style="margin-bottom: var(--space-md);">Dúvidas frequentes</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3 class="faq-question">Preciso de internet para acessar?</h3>
              <p class="faq-answer">Você pode abrir o link no seu navegador a qualquer momento. Seus favoritos ficam salvos automaticamente no seu aparelho mesmo se você fechar a janela.</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Como funcionam os favoritos?</h3>
              <p class="faq-answer">Basta tocar no coração de qualquer receita. Ela é armazenada localmente na memória do seu navegador (localStorage) com privacidade absoluta e sem necessidade de senhas.</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Posso fazer substituições de ingredientes?</h3>
              <p class="faq-answer">Sim! Cada receita possui um campo exclusivo com sugestões de substituições inteligentes e dicas práticas da cozinha FITORA.</p>
            </div>
          </div>
        </section>

        <!-- Rodapé do Produto -->
        <footer style="text-align: center; padding: var(--space-xl) 0; color: var(--color-text-muted); font-size: 0.85rem;">
          <p><strong>FITORA</strong> • Biblioteca Digital de Receitas</p>
          <p style="margin-top: 4px;">Edição Exclusiva para Compradores • Versão 1.0</p>
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

  // Tela 404 / Não Encontrada
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

// Inicializa a aplicação
window.addEventListener('DOMContentLoaded', () => {
  window.fitoraApp = new FitoraApp();
});
