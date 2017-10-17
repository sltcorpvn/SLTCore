/**
* Allow any authenticated user.
* Create at 17/10/2017
* @author :: Yen Truong
*/
module.exports = function(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }else{
        //return res.send(403, { message: 'Not Authorized' });
        return res.redirect(sails.config.sltconfig.url.front.login);
    }
}