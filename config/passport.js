module.exports.passport = {
    local: {
      strategy: require('passport-local').Strategy
    },
  
    basic: {
      strategy: require('passport-http').BasicStrategy,
      protocol: 'basic'
    },
}    
/*var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcryptjs'),
Utils = require('../api/services/Utils'),
curDate = Utils.genDBDate(); 


passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    User.findOne({$and:[
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