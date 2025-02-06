interface StorageItem<T> {
  value: T;
  timestamp: number;
  expiry?: number;
}

export const createStorageService = (prefix: string = '') => {
  const getKey = (key: string): string => `${prefix}${key}`;

  const set = <T>(key: string, value: T, expiry?: number): void => {
    const item: StorageItem<T> = {
      value,
      timestamp: Date.now(),
      expiry,
    };

    try {
      localStorage.setItem(getKey(key), JSON.stringify(item));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const get = <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(getKey(key));
      if (!item) return null;

      const parsedItem: StorageItem<T> = JSON.parse(item);

      if (
        parsedItem.expiry &&
        Date.now() - parsedItem.timestamp > parsedItem.expiry
      ) {
        remove(key);
        return null;
      }

      return parsedItem.value;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  };

  const remove = (key: string): void => {
    try {
      localStorage.removeItem(getKey(key));
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };

  const clear = (): void => {
    try {
      Object.keys(localStorage)
        .filter((key) => key.startsWith(prefix))
        .forEach((key) => localStorage.removeItem(key));
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };

  return {
    set,
    get,
    remove,
    clear,
  };
};

export const storage = createStorageService();
