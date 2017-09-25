/*
* create on 23/09/2017
*/
module.exports.sltconfig = {
    url: {
        front: {
            home                : "/",
            login               : "/login",
            logout              : "/logout",

            menu: {
                menu            : "/menu",
                list            : "/menu/list",
                edit            : "/menu/edit",
                add             : "/menu/add",
                delete          : "/menu/delete"
            },

            user: {
                profile         : "/user/profile",
                edit            : "/user/edit",
                save            : "/user/save"
            },

            setting: {
                setting         : "/setting",
                add             : "/setting/add",
                list            : "/setting/list",
                save            : "/setting/save",
                delete          : "/setting/delete"
            }

        },
        back: {
            home                : "/management",
            login               : "/management/login",
            logout              : "/management/logout",

            user: {
                user            : "/management/user",  // user management page
                edit            : "/management/user/edit",
                save            : "/management/user/save", //save mysafe and other
                update          : "/management/user/update", //edit other user
                add             : "/management/user/add", //add new
                delete          : "/management/user/delete", //delete
                list            : "/management/user/list"  //get list user
            },

            role: {
                role            : "/management/user/role",
                list            : "/management/user/role/list",
                mapping         : "/management/user/role/mapping"
            },

            group: {
                group           : "/management/user/group",
                list            : "/management/user/group/list",
                add             : "/management/user/group/add",
                save            : "/management/user/group/save",
                delete          : "/management/user/group/delete"
            }
        }
    }
};