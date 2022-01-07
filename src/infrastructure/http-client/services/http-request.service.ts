import axios from 'axios';

import {
  HttpRequestConfig,
  HttpRequestResponse,
  IHttpRequestService,
} from './http-request.service.interface';

export class HttpRequestService implements IHttpRequestService {
  execute = async <T>(
    config: HttpRequestConfig,
  ): Promise<HttpRequestResponse<T>> => {
    return await axios(config);
  };
}
