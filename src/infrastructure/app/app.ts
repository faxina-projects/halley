import helmet from 'helmet';

import { ErrorMiddleware } from '../middlewares';
import {
  Application,
  IRequest,
  json,
  NextFunction,
  Response,
  ServerApp,
  urlencoded,
} from './core';
import { AddressRoutes } from './routes';

function loggerMiddleware(
  request: IRequest,
  _response: Response,
  next: NextFunction,
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

class App {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.app = ServerApp();
    this.port = port;
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
  }

  private initMiddlewares = (): void => {
    this.app.use(helmet());
    this.app.use(loggerMiddleware);
    this.app.use(urlencoded({ extended: true }));

    this.app.use(json());
  };

  private initErrorHandling = (): void => {
    const errorMiddleware = new ErrorMiddleware();

    // const endpointNotImplementedMiddleware =
    //   container.get<IEndpointNotImplementedMiddleware>(
    //     TYPES.EndpointNotImplementedMiddleware,
    //   );

    // this.app.use(endpointNotImplementedMiddleware.process);
    this.app.use(errorMiddleware.handle);
  };

  private initRoutes = (): void => {
    this.app.use('/', new AddressRoutes().router);
  };

  public listen = async (): Promise<void> => {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  };
}

export { App };
