/**
 * FITORA - Componentes e Renderizadores de UI
 */
import { Storage } from './storage.js';

export const UI = {
  // Ícones SVG reutilizáveis e minimalistas
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

  // Toast feedback
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

  // Header Component
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
            <!-- Desktop Navigation -->
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

  // Bottom Navigation (Mobile)
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

  // Card de Receita seguindo a referência visual
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
