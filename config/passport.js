/**
 * Create at 14/10/2017
 * @author :: Yen Truong
 */

var passport  = require('passport'),
LocalStrategy = require('passport-local').Strategy;
module.exports = {
    http: {
        customMiddleware: function(app){
            console.log('express midleware for passport');
            app.use(passport.initialize());
            app.use(passport.session());
        }
    }
};

/*  
var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcryptjs'),
Utils = require('../api/services/Utils'),
curDate = Utils.genDBDate(); 


passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    Users.findOne({$and:[
                      {$or: [{valid_to: null}, {valid_to: {$gte: curDate}}]
                      },
                      {username: username}
                      ]} , function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function(username, password, done) {
        console.log("current date:"+curDate);
        if(!username || !password){
            return done(null, false, {message: "Username or Password is empty!"});
        }
        Users.findOne({$and:[
                        {$or: [{valid_to: null}, {valid_to: {$gte: curDate}}]},
                        {username: username}
                    ]}, function (err, user) {
            if (err) {
                console.log("passport err (33)");
                return done(null, false, {message: err}); 
            }
            if (!user) {
                console.log("passport no user (38)");
                return done(null, false, { message: 'User is not exist!' });
            }

            bcrypt.compare(password, user.password, function (err, res) {
                if (!res){
                    console.log("passport line 43");
                    return done(null, false, {
                        message: 'Invalid Password!'
                    });
                }
                console.log("passport line 48");
                
                var returnUser = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    created_date: user.created_date
                };
                return done(null, returnUser);
            });
        });
    }
));
*/