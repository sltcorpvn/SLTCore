/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 * @author      : Yen Truong
 */
module.exports = function(req, res, next) {
    // User is allowed, proceed to the next policy, 
    // or if this is the last policy, the controller
    // Sockets
    console.log("sessionAuth line 14");
    if(req.isSocket){
        console.log("sessionAuth line 15");
        if(req.session && req.session.passport && req.session.passport.user){
            console.log("sessionAuth line 17");
            //Use this:
            // Initialize Passport
            sails.config.passport.initialize()(req, res, function () {
                console.log("sessionAuth line 21");
                // Use the built-in sessions
                sails.config.passport.session()(req, res, function () {
                    console.log("sessionAuth line 24");
                    console.log("user session:"+req.user);
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
    }else if (req.session.authenticated) {
        console.log("sessionAuth line 41");
        return next();
    }else{
        console.log("sessionAuth line 44");
        // User is not allowed
        // (default res.forbidden() behavior can be overridden in `config/403.js`)
        return res.redirect(sails.config.sltconfig.url.front.login);
    }

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  ///if (req.session.authenticated) {
  ///  return next();
  ///}

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  ///return res.forbidden('You are not permitted to perform this action.');
};
