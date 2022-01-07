import { ViaCepAddressDTO } from '../dtos';

interface IViaCepApiService {
  getByZipCode: (zipCode: string) => Promise<ViaCepAddressDTO>;
}

export { IViaCepApiService };
