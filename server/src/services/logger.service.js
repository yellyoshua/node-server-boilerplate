import {createLogger, format, transports} from 'winston';

export default function createLoggerService (options = {}) {
  const {file_output = {}} = options;

  const logger_transports = {
    info: file_output.info
      ? new transports.File({filename: file_output.error, level: 'info'})
      : new transports.Console({level: 'info'}),
    warn: file_output.warn
      ? new transports.File({filename: file_output.warn, level: 'warn'})
      : new transports.Console({level: 'warn'}),
    error: file_output.error
      ? new transports.File({filename: file_output.error, level: 'error'})
      : new transports.Console({level: 'error'})
  };

  return createLogger({
    level: 'info',
    format: format.combine(
      format.colorize(),
      format.simple()
    ),
    transports: [
      logger_transports.info,
      logger_transports.warn,
      logger_transports.error
    ],
    exitOnError: false
  });
}
