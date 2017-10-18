/**
 * HTTP Server Settings
 * (sails.config.http)
 */

var passport  = require('passport'),
LocalStrategy = require('passport-local').Strategy,
expressSession = require('express-session');

module.exports.http = {
    
    middleware: {

        passportInit    : require('passport').initialize(),
        passportSession : require('passport').session(),
    
        /***************************************************************************
         *                                                                          *
        * The order in which middleware should be run for HTTP request. (the Sails *
        * router is invoked by the "router" middleware below.)                     *
        *                                                                          *
        ***************************************************************************/
    
        order: [
            'startRequestTimer',
            'cookieParser',
            'bodyParser',
            'session',
            'passportInit',
            'passportSession',            
            'logger',
            'handleBodyParserError',
            'compress',
            'methodOverride',
            'poweredBy',
            '$custom',
            'router',
            'www',
            'favicon',
            '404',
            '500'
        ],
        $custom: function(app){
            console.log('express midleware for passport');
            require('./passport.js').init(app);
        },

        startRequestTimer: function (req, res, next){
            req._startTime = new Date();
            return next();
        },

        logger: function (req, res, next){
            req.on("end", function() {
                sails.log.silly('response time: ' + new Date() - req._startTime + 'ms');
            });
            next();
        },
    
        /****************************************************************************
        *                                                                           *
        * Example custom middleware; logs each request to the console.              *
        *                                                                           *
        ****************************************************************************/
        
        myRequestLogger: function (req, res, next) {
            console.log("Requested :: ", req.method, req.url);
            return next();
        },
    
        /***************************************************************************
        *                                                                          *
        * The body parser that will handle incoming multipart HTTP requests. By    *
        * default as of v0.10, Sails uses                                          *
        * [skipper](http://github.com/balderdashy/skipper). See                    *
        * http://www.senchalabs.org/connect/multipart.html for other options.      *
        *                                                                          *
        * Note that Sails uses an internal instance of Skipper by default; to      *
        * override it and specify more options, make sure to "npm install skipper" *
        * in your project first.  You can also specify a different body parser or  *
        * a custom function with req, res and next parameters (just like any other *
        * middleware function).                                                    *
        *                                                                          *
        ***************************************************************************/
        
        bodyParser: require('skipper')({
            strict: true,
            limit: '100mb',
            extended: true,
            maxWaitTimeBeforePassingControlToApp: 1000
        }),

        handleBodyParserError: function(req, res, next){
            next();
        },

        compress: require('compression')(),
        methodOverride: function(req, res, next){
            next();
        },
        poweredBy: function(req, res, next) {
            res.setHeader('X-Powered-By', "Smart Logistics Technology");
            next();
        },
    },
    
    /***************************************************************************
    *                                                                          *
    * The number of seconds to cache flat files on disk being served by        *
    * Express static middleware (by default, these files are in `.tmp/public`) *
    *                                                                          *
    * The HTTP static cache is only active in a 'production' environment,      *
    * since that's the only time Express will cache flat-files.                *
    *                                                                          *
    ***************************************************************************/
    
    /* cache: 86400000 */
    /* serverOptions: {
        headers: {connection: 'keep-alive'},
        agent  : false,
        host: "localhost",
        port: 443,
        path: "/",
        exclusive: true
    } 
    for ssl 
        create folder config/ssl/ to save ssl.crt and ssl.key
    */
};
    