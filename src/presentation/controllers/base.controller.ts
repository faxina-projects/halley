import { IRequest, NextFunction, Response } from '@/infrastructure/app/core';

abstract class BaseController {
  constructor(protected readonly path: string) {}

  protected abstract handle: (
    request: IRequest,
    response: Response,
    next: NextFunction,
  ) => Promise<void>;

  public getPath(): string {
    return this.path;
  }
}

export { BaseController };
