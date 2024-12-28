import { getLoggerConfig } from '@oversoft/logging';
import build from './app';

const server = await build({
  logger: getLoggerConfig(),
  printRoutes: true,
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
