/* 
VRPController
Created by 03/10/2017
Hiep Nguyen
Trial 7-Days test function
*/
module.exports = {
    showVRPinfo: function(req, res){
        var sess = req.sltcore;
        var backURL = sails.config.sltconfig.url.front.user.profile;
        if(sess && sess.backURL)
            backURL = sess.backURL;
        var username = "nbhiep";
        var password = "slt!@#$%^";
       /* var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        users.find( { Username: "nbhiep", Password: "slt!@#$%^" }, function(err, result) {
            if (err) throw err;
            console.log(result.name);
            db.close();
        });
    });*/
        res.render('vrp/startpage',{
            username: "step1"
        });
    }
};