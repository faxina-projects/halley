import { GetAddressByZipCodeService } from '@/application/address/use-cases';
import { CacheService } from '@/application/cache/use-case';
import { ViaCepApiAdapter } from '@/infrastructure/address/adapters';
import { ViaCepApiService } from '@/infrastructure/address/services';
import { HttpRequestService } from '@/infrastructure/http-client/services';
import { RedisAdapter } from '@/infrastructure/redis/adapters';
import { RedisService } from '@/infrastructure/redis/services';
import { GetAddressByZipCodeController } from '@/presentation/controllers/address';

import { Route } from './route';

class AddressRoutes extends Route {
  private readonly getAddressByZipCodeController: GetAddressByZipCodeController;
  constructor() {
    super();
    const httpRequestService = new HttpRequestService();
    const viaCepApiService = new ViaCepApiService(httpRequestService);
    const viaCepApiAdapter = new ViaCepApiAdapter(viaCepApiService);
    const redisService = new RedisService();
    const redisAdapter = new RedisAdapter(redisService);
    const cacheService = new CacheService(redisAdapter);
    const getAddressByZipCodeService = new GetAddressByZipCodeService(
      viaCepApiAdapter,
      cacheService,
    );

    this.getAddressByZipCodeController = new GetAddressByZipCodeController(
      getAddressByZipCodeService,
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
