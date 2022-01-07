import { GetAddressByZipCodeService } from '@/application/address/use-cases';
import { ViaCepApiAdapter } from '@/infrastructure/address/adapters';
import { ViaCepApiService } from '@/infrastructure/address/services';
import { HttpRequestService } from '@/infrastructure/http-client/services';
import { GetAddressByZipCodeController } from '@/presentation/controllers/address';

import { Route } from './route';

class AddressRoutes extends Route {
  private readonly getAddressByZipCodeController: GetAddressByZipCodeController;
  constructor() {
    super();

    this.getAddressByZipCodeController = new GetAddressByZipCodeController(
      new GetAddressByZipCodeService(
        new ViaCepApiAdapter(new ViaCepApiService(new HttpRequestService())),
      ),
    );

    this.init();
  }

  init = () => {
    const basePath = this.getAddressByZipCodeController.getPath();
    this.router.all(basePath);
    this.router.get(
      `${basePath}/:zipCode`,
      this.getAddressByZipCodeController.handle,
    );
  };
}

export { AddressRoutes };
