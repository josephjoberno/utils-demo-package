
export const utils    = {
  // Vérifie si une valeur est vide (chaîne vide, tableau vide, objet vide, null ou undefined)
  isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === "string" || Array.isArray(value))
      return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
    return false;
  },

  // Trouve un élément dans un tableau basé sur un prédicat
  find<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
    return array.find(predicate);
  },

  // Trouve un élément dans un tableau par son ID
  findById<T extends { id: string | number }>(
    array: T[],
    id: string | number
  ): T | undefined {
    return array.find((item) => item.id === id);
  },

  // Groupe les éléments d'un tableau par une clé spécifique
  groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((result, currentItem) => {
      const groupKey = String(currentItem[key]);
  
      if (result[groupKey] === undefined) {
        result[groupKey] = [];
      }
  
      result[groupKey].push(currentItem);
      return result;
    }, {} as Record<string, T[]>);
  },  
  // Retire les doublons d'un tableau
  removeDuplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  },

  // Retire un élément d'un tableau par son index
  removeItem<T>(array: T[], item: T): T[] {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  },

  // Retire un élément d'un tableau par son ID
  removeItemById<T extends { id: string | number }>(
    array: T[],
    id: string | number
  ): T[] {
    return array.filter((item) => item.id !== id);
  },

  // Trie un tableau d'objets par une propriété spécifique
  sortBy<T>(array: T[], key: keyof T): T[] {
    return [...array].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  },

  // Tri un tableau d'objets par une propriété spécifique dans l'ordre inverse
  sortByDesc<T>(array: T[], key: keyof T): T[] {
    return [...array].sort((a, b) => {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    });
  },

  // Crée un délai d'attente (promesse)
  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};
