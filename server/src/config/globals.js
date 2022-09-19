import createLoggerService from '../services/logger.service';

const is_production = process.env.NODE_ENV === 'production';

const logger = createLoggerService({
  file_output: {
    error: 'logs/error.log',
    warn: 'logs/warn.log',
    info: is_production && 'logs/info.log'
  }
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
