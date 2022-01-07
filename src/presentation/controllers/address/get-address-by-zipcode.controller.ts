import { IGetAddressByZipCodeService } from '@/application/address/use-cases';
import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';
import { IRequest, NextFunction, Response } from '@/infrastructure/app/core';

import { BaseController } from '../base.controller';

class GetAddressByZipCodeController extends BaseController {
  constructor(
    private readonly getAddressByZipCodeService: IGetAddressByZipCodeService,
  ) {
    super('/address');
  }

  public handle = async (
    request: IRequest,
    response: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { params } = request;
      const zipCode = params.zipCode;

      const addressData = await this.getAddressByZipCodeService.findByZipCode(
        zipCode as string,
      );

      const responseData = new HttpSuccessResponseDTO(addressData);

      response.status(responseData.httpStatus).send(responseData);
    } catch (error) {
      next(error);
    }
  };
}

export { GetAddressByZipCodeController };
