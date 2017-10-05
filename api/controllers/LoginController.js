/**
 * LoginController
 * Created on 22/09/2017.
 * @Description :: server side login
 */
var bcrypt = require('bcryptjs');
module.exports = {
    showLogin: function(req, res){
        var sess = req.sltcore;
        var backURL = sails.config.sltconfig.url.front.user.profile;
        if(sess && sess.backURL)
            backURL = sess.backURL;

        res.render('commons/login');
    },

    ajaxLogin: function(req, res){
        var username = req.body.username ? req.body.username : "";
        var password = req.body.password ? req.body.password : "";

        if(!username || !password){
            return res.send({status: 0, err: "Username or Password is empty!"});
        }else{
            var sess = req.sltcore;
            var backURL = sails.config.sltconfig.url.front.user.profile;
            if(sess && sess.backURL)
                backURL = sess.backURL;

            var curDate = Utils.genDBDate(); 
            Users.findOne({$and:[
                                    {$or: [{valid_to: null}, {valid_to: {$gt: curDate}}
                                ]
                            },
                            {username: username}
                            ]})
                 .then((user) => {
                     if(!user){
                         res.send({status: 0, err: "User is not exist!"});
                     }else{
                        bcrypt.compare(password, user.password).then(function(rs){
                            if(!rs){
                                res.send({status: 0, err: "Password's wrong!"});
                            }else{
                                /* store user obj */
                                sess.user = user;
                                res.send({status: 1, backURL: backURL});
                            }
                        });
                     }
                 })
                 .catch((err) => res.send({status: 0, err: err})); 
        }
    },

    logout: function(req, res){
        var sess = req.sltcore;
        if(sess && sess.user){
            var backURL = sess.backURL;
            req.sltcore.reset();
            sess.backURL = backURL;
            res.redirect(sails.config.sltconfig.url.front.login);
        }
    }
};

