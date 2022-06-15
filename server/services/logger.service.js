import {createLogger, format, transports} from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      ),
      level: 'debug'

    }),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new transports.File({
      filename: 'logs/info.log',
      level: 'info'
    }),
    new transports.File({
      filename: 'logs/warn.log',
      level: 'warn'
    })
  ],
  exitOnError: false
});


global.logger = {
  info (message, obj) {
    logger.log('info', message, {
      obj
    });
  },
  debug (message, obj) {
    logger.log('debug', message, {
      obj
    });
  },
  error (message, obj) {
    logger.log('error', message, {
      obj
    });
  }
};
