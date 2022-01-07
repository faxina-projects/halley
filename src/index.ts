import { App } from './infrastructure/app';

(async (): Promise<void> => {
  try {
    const app = new App(3001);
    await app.listen();
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
})();

// process.on('uncaughtException', (error: NodeJS.UncaughtExceptionListener) => {
//   console.log(error);
// });

// process.on(
//   'unhandledRejection',
//   (reason: NodeJS.UnhandledRejectionListener) => {
//     console.log(reason);
//   },
// );
