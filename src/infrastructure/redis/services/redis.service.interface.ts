interface IRedisService {
  get: (key: string) => Promise<string | undefined>;
  set: (key: string, value: string) => Promise<void>;
  del: (key: string) => Promise<void>;
  keys: (pattern: string) => Promise<string[]>;
}

export { IRedisService };
