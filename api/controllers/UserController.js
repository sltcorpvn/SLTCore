/**
 * UserController
 * Created on 03/10/2017.
 * @Description :: server side user
 */

module.exports = {
    getProfile: function(req, res){
        //var sess = req.session.sltcore;
        //var user = sess.user;
        //if(sess && user){
            console.log("line 15 in usercontroller:"+req.user);
            /*show profile of user*/
            res.render("user/profile", {user: user});
        //}else{
        //    console.log("line 19 in usercontroller");
            /*store current url for redirect after login*/
        //    sess.backURL = req.url;
            /*go to login page*/
        //    res.redirect( sails.config.sltconfig.url.front.login );
        //}
    }
};