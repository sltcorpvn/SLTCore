/**
 * Create at 14/10/2017
 * @author :: Yen Truong
 */

var passport  = require('passport'),
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
            return done(null, false, {message: err}); 
        }
        if (!user) {
            return done(null, false, { message: 'User is not exist!' });
        }

        bcrypt.compare(password, user.password, function (err, res) {
            if (!res){
                return done(null, false, {
                    message: 'Invalid Password!'
                });
            }
            
            var returnUser = {
                _id: user._id,
                username: user.username,
                email: user.email,
                created_date: new Date(Date.now())
            };
            return done(null, returnUser);
        });
    });
}
));

module.exports = {
    init: function(app){
        app.use(passport.initialize());
        app.use(passport.session());
    }
}
