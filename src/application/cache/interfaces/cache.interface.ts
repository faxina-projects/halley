interface ICache {
  get: <T>(key: string) => Promise<T | undefined>;
  save: <T>(key: string, value: T) => Promise<T>;
  delete: (key: string) => Promise<void>;
  clear: () => Promise<void>;
}

export { ICache };
