import { AddressDTO } from '../dtos';

interface IAddressFinder {
  findByZipCode: (zipCode: string) => Promise<AddressDTO>;
}

export { IAddressFinder };
