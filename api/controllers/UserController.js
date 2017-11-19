/**
 * UserController
 * Created on 03/10/2017.
 * @Description :: server side user
 */

module.exports = {
    getProfile: function(req, res){
        res.render("user/profile", {user: req.user});
    }
};