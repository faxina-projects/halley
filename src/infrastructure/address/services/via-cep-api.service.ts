import { HttpStatus } from '@/application/shared/http/configs';
import { HttpBaseException } from '@/application/shared/http/exceptions';

import { IHttpRequestService } from '../../http-client/services';
import { ViaCepAddressDTO } from '../dtos';
import {
  ViaCepGetAddressByZipCodeException,
  ViaCepInvalidZipCodeException,
  ViaCepZipCodeNotFoundException,
} from '../exceptions';
import { IViaCepApiService } from './via-cep-api.service.interface';

class ViaCepApiService implements IViaCepApiService {
  private readonly baseUrl = 'https://viacep.com.br/ws';

  constructor(private readonly httpRequestService: IHttpRequestService) {}

  getByZipCode = async (zipCode: string): Promise<ViaCepAddressDTO> => {
    try {
      const response = await this.httpRequestService.execute<ViaCepAddressDTO>({
        baseURL: this.baseUrl,
        url: `${zipCode}/json`,
      });

      const { data } = response;

      if (data.erro) {
        throw new ViaCepZipCodeNotFoundException(zipCode);
      }

      return response.data;
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }

      const status = error?.response?.status;
      if (status === HttpStatus.BAD_REQUEST) {
        throw new ViaCepInvalidZipCodeException(error, zipCode);
      }
      throw new ViaCepGetAddressByZipCodeException(error.message, error, {
        zipCode,
      });
    }
  };
}

export { ViaCepApiService };
