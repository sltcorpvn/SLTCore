db.createCollection("counters", { capped : true, size : 2880, max : 5000 } );
db.counters.insert({"_id": "user_id", "seq": 1});
db.createCollection("users", { capped : true, size : 5242880, max : 10000 } );
// bcrypt: 123456
db.users.insert([
{"_id":1,"username":"sltadmin","password":"$2y$10$jYyIQaTl43Xo3gSOd6JDA.hiIZlBinEmayy/NsEuqXMUe71zgs0dO","salt":"123abc456d","first_name":"Admin","last_name":"Supper","code":"","dob":"2017-10-03T14:41:53+07:00","phone":"0919514241","mail":"truthblue82@gmail.com","skype":"yentth-abtel","last_login":"","is_ldap":0,"valid_to":null, type: 3}
]);

db.createCollection("sessions", { capped : true, size : 2880, max : 5000 } )
