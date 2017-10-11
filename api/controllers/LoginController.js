/**
 * LoginController
 * Created on 22/09/2017.
 * @Description :: server side login
 */
//var bcrypt = require('bcryptjs');
var passport = require('passport');

module.exports = {
    /** render login view */
    showLogin: function(req, res){
        // var sess = req.sltcore;
        // var backURL = sails.config.sltconfig.url.front.user.profile;
        // if(sess && sess.backURL)
        //     backURL = sess.backURL;

        res.render('commons/login');
    },

    ajaxLogin: function(req, res){
        var backURL = sails.config.sltconfig.url.front.user.profile;
        if(req.session && req.session.backURL)
            backURL = req.session.backURL;
        //else req.session.backURL = backURL;

        var username = req.body.username ? req.body.username : "";
        var password = req.body.password ? req.body.password : "";

        passport.authenticate('local', function(err, user) {
            console.log("err:"+err);
            if(err){
                console.log("line 41");
                return res.json({status: 0, err: err});
            }
            if (!user) {
                console.log("line 45");
                return res.json({
                    status: 0,
                    err: "User is not exist!"
                });
            }
            console.log("backURL:"+backURL);
            req.logIn(user, function(err) {
                console.log("line 52");
                console.log("err 50:"+err);
                if (err) {
                    console.log("line 54");
                    return res.json({status: 0, err: err});
                }
                //req.session.messages = "Login successfull!";
                req.session.authenticated = true;
                //req.authenticated = true;
                return res.json({
                    status: 1,
                    backURL: backURL
                });
            });

        })(req, res);
        /*var username = req.body.username ? req.body.username : "";
        var password = req.body.password ? req.body.password : "";

        if(!username || !password){
            return res.json({status: 0, err: "Username or Password is empty!"});
        }else{
            var sess = "";
            if(req.session)
                sess = req.session;
                
            var backURL = sails.config.sltconfig.url.front.user.profile;
            if(sess && sess.backURL)
                backURL = sess.backURL;
            else sess.backURL = backURL;    

            var curDate = Utils.genDBDate(); 
            Users.findOne({$and:[
                                {$or: [{valid_to: null}, {valid_to: {$gte: curDate}}]
                            },
                            {username: username}
                            ]})
                .then((user) => {
                    if(!user){
                        res.json({status: 0, err: "User is not exist!"});
                    }else{
                        bcrypt.compare(password, user.password).then(function(rs){
                            if(!rs){
                                res.json({status: 0, err: "Password's wrong!"});
                            }else{
                                req.session.userId  = user._id;
                                res.json({status: 1, backURL: backURL});
                            }
                        });
                    }
                })
                .catch((err) => res.json({status: 0, err: err})); 
        }*/
    },

    logout: function(req, res){
        req.logout();
        res.redirect(sails.config.sltconfig.url.front.login);
        /*var sess = req.sltcore;
        if(sess && sess.user){
            var backURL = sess.backURL;
            req.sltcore.reset();
            sess.backURL = backURL;
            res.redirect(sails.config.sltconfig.url.front.login);
        }*/
    }
};

