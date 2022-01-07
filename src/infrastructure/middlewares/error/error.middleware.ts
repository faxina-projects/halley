import { NextFunction, Request, Response } from 'express';

import { HttpStatus } from '@/application/shared/http/configs';
import {
  HttpBaseException,
  InternalServerErrorException,
} from '@/application/shared/http/exceptions';

import { IErrorMiddleware } from './error.middleware.interface';

export class ErrorMiddleware implements IErrorMiddleware {
  handle = (
    exception: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ): Response => {
    if (exception instanceof HttpBaseException) {
      return response
        .status(exception.httpStatus)
        .send(exception.getResponse());
    }

    return response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(new InternalServerErrorException());
  };
}
