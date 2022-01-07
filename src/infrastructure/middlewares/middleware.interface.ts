import { HttpResponseDTO } from '@/application/shared/http/dtos';

interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponseDTO>;
}

export { Middleware };
