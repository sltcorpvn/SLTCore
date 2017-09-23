/**
 * Created on 22/09/2017.
 */
process.chdir(__dirname); ///

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(i18n.init);

/* dynamically include routes in controllers folder */
fs.readdirSync('./controllers').forEach(function (file) {
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

