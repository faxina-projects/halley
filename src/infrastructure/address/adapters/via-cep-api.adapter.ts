import { AddressDTO } from '@/application/address/dtos';
import { IAddressFinder } from '@/application/address/interfaces';
import { HttpBaseException } from '@/application/shared/http/exceptions';

import { ViaCepGetAddressByZipCodeException } from '../exceptions';
import { IViaCepApiService } from '../services';

export class ViaCepApiAdapter implements IAddressFinder {
  constructor(private readonly viaCepApiService: IViaCepApiService) {}

  findByZipCode = async (zipCode: string): Promise<AddressDTO> => {
    try {
      const viaCepAddressData = await this.viaCepApiService.getByZipCode(
        zipCode,
      );

      const {
        cep,
        logradouro,
        complemento,
        bairro,
        localidade,
        uf,
        ibge,
        gia,
        ddd,
        siafi,
      } = viaCepAddressData;

      return AddressDTO.builder({
        zipCode: cep,
        street: logradouro,
        address2: complemento,
        neighborhood: bairro,
        city: localidade,
        state: uf,
        ibge,
        gia,
        ddd,
        siafi,
      });
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }

      throw new ViaCepGetAddressByZipCodeException(error.message, error, {
        zipCode,
      });
    }
  };
}
