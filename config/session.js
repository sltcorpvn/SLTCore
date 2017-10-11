/**
 * Session Configuration
 * (sails.config.session)
 *
 * Sails session integration leans heavily on the great work already done by
 * Express, but also unifies Socket.io with the Connect session store. It uses
 * Connect's cookie parser to normalize configuration differences between Express
 * and Socket.io and hooks into Sails' middleware interpreter to allow you to access
 * and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For more information on configuring the session, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.session.html
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
    secret        : 'sltcore secret',
    cookieName    : "sltcore",
    duration      : 30 * 60 * 1000,
    activeDuration: 30 * 60 * 1000,

  /***************************************************************************
  *                                                                          *
  * Set the session cookie expire time The maxAge is set by milliseconds,    *
  * the example below is for 24 hours                                        *
  *                                                                          *
  ***************************************************************************/

    cookie: {
        domain    : "core.sltcorp.lc",
        path      : "/",
        maxAge    : 24 * 60 * 60 * 1000,
        expire    : new Date(Date.now() + 1800000),
        httpOnly  : true,
        secure    : false,  
        ephemeral : false,              
    },

    routesDisabled: ['GET /js/*', 'GET /styles/*', 'GET /images/*'],

  /***************************************************************************
  *                                                                          *
  * Uncomment the following lines to set up a MongoDB session store that can *
  * be shared across multiple Sails.js servers.                              *
  *                                                                          *
  * Requires connect-mongo (https://www.npmjs.com/package/connect-mongo)     *
  * Use version 0.8.2 with Node version <= 0.12                              *
  * Use the latest version with Node >= 4.0                                  *
  * user, password and port optional                                         *
  * $>npm install connect-mongo                                              *
  ***************************************************************************/

     adapter: "mongo",
     username: '',
     password: '',
     host: 'localhost',
     port: 27017,
     db: 'localSRPSystem',
    //url: 'mongodb://localhost:27017/localSRPSystem/sessions', 
    //saveUninitialized: true,

  /***************************************************************************
  *                                                                          *
  * Optional Values:                                                         *
  *                                                                          *
  * See https://github.com/kcbanner/connect-mongo for more                   *
  * information about connect-mongo options.                                 *
  *                                                                          *
  * See http://bit.ly/mongooptions for more information about options        *
  * available in `mongoOptions`                                              *
  *                                                                          *
  ***************************************************************************/

    collection: 'sessions',
    //stringify: true,
    //auto_reconnect: false,
    //ssl: false
};
