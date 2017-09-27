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
    },

    login: function(req, res){
        var username = req.body.username;
        var password = req.body.password;
        
        var sess = req.sltcore;
        var backURL = sails.config.sltconfig.url.front.user.profile;
        if(sess && sess.backURL){
            backURL = sess.backURL;
        }
    }
};

