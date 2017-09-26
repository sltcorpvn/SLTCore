/**
 * loginController
 * Created on 22/09/2017.
 * @Description :: server side login
 */
module.exports = {
    showLogin: function(req, res){
        var sess = req.sltcore;
        var backURL = sails.config.sltconfig.url.front.user.profile;
        if(sess && sess.backURL)
            backURL = sess.backURL;

        res.render('commons/login');
    }
};
//var users      = require(__base + "models/user");
/*var utils      = require(__base + "resources/js/utils");*/
//md5 = require(__dirname + '/node_modules/js-md5');
/*
var loginController = function(app, config, fs) {
};

module.exports.controller = loginController;
*/