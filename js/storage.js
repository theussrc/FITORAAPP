/**
 * FITORA - Gerenciador de Armazenamento Local (Favoritos, Receitas Feitas & Tema)
 */

const FAVORITES_KEY = 'fitora_favorites_v1';
const COOKED_KEY = 'fitora_cooked_v1';
const THEME_KEY = 'fitora_theme_preference';

export const Storage = {
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

    // Dispara evento customizado para sincronização global
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
