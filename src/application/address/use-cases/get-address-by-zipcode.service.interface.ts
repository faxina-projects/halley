import { AddressDTO } from '../dtos';

interface IGetAddressByZipCodeService {
  findByZipCode: (zipCode: string) => Promise<AddressDTO>;
}

export { IGetAddressByZipCodeService };
