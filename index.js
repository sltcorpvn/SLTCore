/**
 * Created on 22/09/2017.
 */
process.chdir(__dirname); 

/* Attempt to import `sails`. */

var sails;
try {
  sails = require('sails');
} catch (e) {
  console.error('To run an app using `node app.js`, you usually need to have a version of `sails` installed in the same directory as your app.');
  console.error('To do that, run `npm install sails`');
  console.error('');
  console.error('Alternatively, if you have sails installed globally (i.e. you did `npm install -g sails`), you can use `sails lift`.');
  console.error('When you run `sails lift`, your app will still use a local `./node_modules/sails` dependency if it exists,');
  console.error('but if it doesn\'t, the app will run with the global sails instead!');
  return;
}

/* Try to get `rc` dependency (for loading `.sailsrc` files). */
var rc;
try {
  rc = require('rc');
} catch (e0) {
  try {
    rc = require('sails/node_modules/rc');
  } catch (e1) {
    console.error('Could not find dependency: `rc`.');
    console.error('Your `.sailsrc` file(s) will be ignored.');
    console.error('To resolve this, run:');
    console.error('npm install rc --save');
    rc = function () { return {}; };
  }
}

/* Start server */
sails.lift( rc('sails') );

/*
global.__base = __dirname + '/';

var ENV       = process.env.MODE_ENV || 'local';
var config    = require(__base + 'config/env/' + ENV);
var url       = require(__base + 'config/routers');
config        = Object.assign(config, url);
config        = Object.freeze(config);

var express   = require('express');
var http      = require('http');
var path      = require('path');
var fs        = require('fs');
var session   = require('client-sessions');
var bodyParser = require('body-parser');
var mongoose  = require('mongoose');
var i18n      = require("i18n");
i18n.configure({
    locales: ['vi', 'en'],
    directory: __base + 'config/locales',
    defaultLocale: "vi",
    cookie: "sltlang",
    queryParameter: "",
    autoReload: true
});

mongoose.connect(config.db.type + "://" + config.db.server + "/" + config.db.name);


var app = express();

app.set('views', __base + 'views');
app.set('view engine', 'pug');

var sesOPT = config.session;
var host = config.http.host;
var port = config.http.port;

if (ENV === 'production' || ENV === 'development' || ENV === 'staging'){
    sesOPT.cookie.secure = true;
}

app.use(session(sesOPT));

app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(i18n.init);
*/

/* dynamically include routes in controllers folder */
/*fs.readdirSync('./controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        route = require('./controllers/' + file);
        route.controller(app, config, fs);
    }
});

var server = http.createServer(app);
var svrOPT = {
    headers: {connection: 'keep-alive'},
    agent  : false,
    port   : port,
    host   : host,
    exclusive: true
};
server.timeout = 0;
process.on('uncaughtException', function(err) {
    console.log('process.on handler');
    console.log(err);
});
server.listen(port, host, function(err){
    console.log("Express server listening on port " + host + ':' + port);
});
*/
