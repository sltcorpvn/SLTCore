/**
 * LoginController
 * Created on 22/09/2017.
 * @Description :: server side login
 */

var passport = require('passport');

module.exports = {
    
    showLogin: function(req, res){
        res.render('commons/login');
    },

    ajaxLogin: function(req, res){
        var backURL = sails.config.sltconfig.url.front.user.profile;

        var username = req.body.username ? req.body.username : "";
        var password = req.body.password ? req.body.password : "";

        passport.authenticate('local', function(err, user) {
            if(err){
                return res.json({status: 0, err: err});
            }
            if(!user) {
                return res.json({
                    status: 0,
                    err: "User is not exist!"
                });
            }
            req.logIn(user, function(err) {
                if (err) {
                    return res.json({status: 0, err: err});
                }

                return res.json({
                    status: 1,
                    backURL: backURL
                });
            });

        })(req, res);
    },

    logout: function(req, res){
        req.logout();
        res.redirect(sails.config.sltconfig.url.front.login);
    }
};

