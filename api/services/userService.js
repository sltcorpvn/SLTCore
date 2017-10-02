//import user from '/sqlScript/user';

var userRepo = require('../../sqlScript/user.js');

module.exports = {
    preloadData: function () {
        console.log(">>>>>>>>>>>>>>> preloading data.......");
        for (var _idx = 0; _idx < userRepo.userList.length; _idx++) {

            var __user = userRepo.userList[_idx];
            console.log(">>>>>>>>>>>>>>>>>>>> " + JSON.stringify(__user));

            Users.findOrCreate({user_id: __user.user_id}, __user).then(function (_user) {
                console.log("Contact created: " + JSON.stringify(_user));
            }).catch(function (err) {
                console.error("Error on ContactService.preloadData");
                console.error(err);
                console.error(JSON.stringify(err));
            });
        }
    }
};