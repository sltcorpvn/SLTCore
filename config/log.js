/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 */
var winston = require('winston');
var customLogger = new winston.Logger();
/* A console transport logging debug and above.*/
customLogger.add(winston.transports.Console, {
    level: 'debug',
    colorize: true
    //filename: 'logs/debug.log',
    //json: true
});

/* A file based transport logging only errors formatted as json.*/
customLogger.add(winston.transports.File, {
    level: 'error',
    filename: 'logs/error.log',
    json: true
});

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/
    /* Pass in our custom logger, and pass all log levels through. */
    custom: customLogger,
    level: 'silly',
    /* Disable captain's log so it doesn't prefix or stringify our meta data. */
    inspect: false
};
