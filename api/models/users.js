/*
* Create on 23/09/2017
*/
var mongoose      = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
var utils         = require(__base + "resources/js/utils");

var Schema = mongoose.Schema;
var users = new Schema({
    _id: Number,
    username: {type: String, index: true, unique: true},
    password: {
        type: String,
        default: null
    },
    first_name: String,
    last_name: String,
    code: {type: String, index: true},
    dob: { type: Date, default: Date.now }, //mm/dd/yyyy
    email: String,
    phone: String,
    skype: String,
    last_login: {type: Date, default: Date.now},
    is_ldap: Number,
    valid_to: {type: Date, default: null},
    created_user: Number,
    created_date: {type: Date, default: null},
    updated_user: Number,
    updated_date: {type: Date, default: Date.now}
},{_id: false});

users.plugin(AutoIncrement,{ inc_field: '_id', disable_hooks: false});
mongoose.model('users', users);