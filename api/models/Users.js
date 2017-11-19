/*
* Create on 23/09/2017
* Users model
*/
var bcrypt = require('bcryptjs');

module.exports = {
    autoPK: false,
    schema: true,
    adapter: 'mongo',
    attributes: {
        _id: { type: 'integer', autoIncrement: true, primaryKey: true, unique: true},
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
        type: { type: 'integer', default: 1}, /* 1: user, 2: enterprise admin, 3: supper admin (for all) */
        valid_to: { type: 'date', default: null},
        created_date: { type: 'date', default: null},
        created_user: { type: 'integer'},
        updated_date: { type: 'date', default: null},
        updated_user: { type: 'integer'},

        passports : { collection: 'Passport', via: 'user' },
        
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
        Counters.native(function(err, col){
            if(err) next(err);
            else{
                col.findAndModify(
                    {_id: user_id},
                    [['_id', 'asc']],
                    {$inc: {num: 1}},
                    {new: true, upsert: true},
                    function(err, data){
                        cb(err, data.value.num);
                });
            }
        });
    },
    beforeUpdate: function(user, cb){
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(user.password, salt, function(err, hash){
                if (err){
                    console.log(err);
                    cb(err);
                }else{
                    user.password = hash;
                    user.salt = salt;
                    cb();
                }
            });
        });
    }
};
