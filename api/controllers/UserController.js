/**
 * UserController
 * Created on 03/10/2017.
 * @Description :: server side user
 */

module.exports = {
    getProfile: function(req, res){
        var sess = req.sltcore;
        var user = sess.user;

        if(sess && user){
            /*show profile of user*/
            res.render("users/profile",{user: user});
        }else{
            /*store current url for redirect after login*/
            sess.backURL = req.url;
            /*go to login page*/
            res.redirect( sails.config.sltconfig.url.front.login );
        }
    }
};