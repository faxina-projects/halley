import { NextFunction, Request, Response } from 'express';

export interface IErrorMiddleware {
  handle: (
    exception: Error,
    request: Request,
    response: Response,
    _next: NextFunction,
  ) => void;
}
