import { AddressDTO } from '../dtos';
import { IAddressFinder } from '../interfaces';
import { IGetAddressByZipCodeService } from './get-address-by-zipcode.service.interface';

class GetAddressByZipCodeService implements IGetAddressByZipCodeService {
  constructor(private readonly addressFinder: IAddressFinder) {}

  findByZipCode = (zipCode: string): Promise<AddressDTO> => {
    return this.addressFinder.findByZipCode(zipCode);
  };
}

export { GetAddressByZipCodeService };
