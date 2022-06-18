import logger from '../services/logger.service.js';

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
