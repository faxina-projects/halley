type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

type HttpRequestConfig = {
  url?: string;
  method?: Method;
  baseURL?: string;
  headers?: any;
  params?: any;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  httpsAgent?: any;
};

type HttpRequestResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: HttpRequestConfig;
  request?: any;
};

type HttpRequestError<T = any> = Error & {
  config: HttpRequestConfig;
  code?: string;
  request?: any;
  response?: HttpRequestResponse<T>;
  toJSON: () => Record<string, unknown>;
};

interface IHttpRequestService {
  execute: <T>(config: HttpRequestConfig) => Promise<HttpRequestResponse<T>>;
}

export {
  IHttpRequestService,
  HttpRequestConfig,
  HttpRequestResponse,
  HttpRequestError,
};
