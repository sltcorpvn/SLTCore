/**
 * UserController
 * Created on 03/10/2017.
 * @Description :: server side user
 */

module.exports = {
    createTmp: function(req, res){
        var userRepo = require('../../sqlScript/user.js');
        for (var _idx = 0; _idx < userRepo.userList.length; _idx++) {
            
            var __user = userRepo.userList[_idx];
            console.log(">>>>>>>>>>>>>>>>>>>> " + JSON.stringify(__user));

            Users.findOrCreate({user_id: __user.user_id}, __user).then(function (_user) {
                console.log("Contact created: " + JSON.stringify(_user));
            }).catch(function (err) {
                console.error("Error on UserService.preloadData");
                console.error(err);
                console.error(JSON.stringify(err));
            });
        }
    }
};