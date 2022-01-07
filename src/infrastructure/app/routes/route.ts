import { Router } from '@/infrastructure/app/core';

abstract class Route {
  public readonly router = Router();
}

export { Route };
