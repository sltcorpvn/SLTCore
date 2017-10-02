/*
* Create on 23/09/2017
* Users model
*/
var bcrypt = require('bcryptjs');

module.exports = {
    autoPK: false,
    schema: true,    
    attributes: {
        user_id: { type: 'integer', autoIncrement: true, primaryKey: true, unique: true},
        username: { type: 'string', index: true, unique: true},
        password: { type: 'string', minLength: 6, required: true},
        first_name: { type: 'string'},
        last_name: { type: 'string'},
        code: {type: 'string', index: true},
        dob: {type: 'date', default: Date.now}, /*mm/dd/yyyy */
        email: { type: 'string', unique: true, required: true, contains: '@'},
        phone: { type: 'string'},
        skype: { type: 'string'},
        last_login: { type: 'date', default: Date.now},
        is_ldap: { type: 'integer'},
        type: { type: 'integer', default: 1}, /* 0: user, 1: system admin, 3: supper admin (for all) */
        valid_to: { type: 'date', default: null},
        created_date: { type: 'date', default: null},
        created_user: { type: 'integer'},
        updated_date: { type: 'date', default: null},
        updated_user: { type: 'integer'},
        
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    /** 
     * This is a hook that is called evertime a user is created.  
     * It will hash the password so the password isn't stored insecurely in the database.
     * */
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                console.log(err);
                cb(err);
            } else {
                user.password = hash;
                user.salt = salt;
                cb();
            }
          });
        });
        Counters.count().exec(function(err, cnt){
            if(err) next(err);
            else{
                user['user_id'] = cnt + 1;
                cb();
            }
        });
    }
};
