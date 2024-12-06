import pino from 'pino';

export const getLoggerConfig = () => ({
  redact: [
    'req.headers.authorization',
    'req.headers["x-forwarded-authorization"]',
  ],
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});
