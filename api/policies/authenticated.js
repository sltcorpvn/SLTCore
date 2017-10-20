/**
* Allow any authenticated user.
* Create at 17/10/2017
* @author :: Yen Truong
*/
module.exports = function(req, res, next){
    if(req.isSocket){
        if(req.session && req.session.passport && req.session.passport.user){
            //Use this:
            // Initialize Passport
            sails.config.passport.initialize()(req, res, function () {
                // Use the built-in sessions
                sails.config.passport.session()(req, res, function () {
                    // Make the user available throughout the frontend
                    //res.locals.user = req.user;
                    //the user should be deserialized by passport now;
                    next();
                });
            });
            //Or this if you dont care about deserializing the user:
            //req.user = req.session.passport.user;
            //return next();
        } else{
            //res.json(401);
            return res.redirect(sails.config.sltconfig.url.front.login);
        }
    }else if (req.isAuthenticated()){
        return next();
    }else{
        //return res.send(403, { message: 'Not Authorized' });
        return res.redirect(sails.config.sltconfig.url.front.login);
    }
}