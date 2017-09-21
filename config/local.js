/*
* create on 22/09/2017
*/

module.exports = Object.freeze({
    /*database config */
    db: {
        type    : "mongodb",
        server  : "IT-YenTTH:27017",
        name    : "localVRPSystem",
        options: {
            w: 1
        },
        query_logging: false,
        authentication: {
            un: null,
            pw: null,
            options: {
            }
        },
    },

    /*http config*/
    http:{
        host: "localhost",
        port: 80
    },

    /*session config*/
    session:{
        cookieName    : "sltcore",
        secret        : "SLT secret",
        duration      : 30 * 60 * 1000,
        activeDuration: 30 * 60 * 1000,
        cookie        :{
            path      : "/",
            maxAge    : 1800000,
            httpOnly  : true,
            secure    : false,
            ephemeral : false
        }
    },

    /*footer*/
    footer:{
        companyName: "Công ty cổ phần ABTel",
        copyright  : "© Copyright",
        year       : new Date().getFullYear(),
        reserv     : "All Rights Reserved."
    },

    /*title*/
    title:{
        layout     : "ABTel",
        login      : "Trang đăng nhập",
        setting    : "Trang setting",
        profile    : "Trang profile",
        user       : "Khai báo danh sách người dùng",
        menu       : "Quản lý danh mục",
        lpkcommon  : "Khai báo LPK nội bộ",
        moq        : "Khai báo moq",
        group      : "Khai báo nhóm",
        role       : "Khai báo quyền",
        e500       : "Internal server error!",
        e404       : "Page not found!"
    },

    dialog:{
        title_warning           : "Thông báo",
        db_update_error         : "Lỗi trong quá trình cập nhật dữ liệu!",
        title_delete_confirm    : "Xác nhận xóa",
        question_delete_confirm : "Bạn có chắc là muốn xóa ,this,?",
        title_information       : "Thông báo",
        db_delete_error         : "Lỗi trong quá trình xóa ,this,. Vui lòng thử lại sau!",
        db_add_error            : "Lỗi trong quá trình thêm mới dữ liệu!",
        title_edit              : "Chỉnh sửa",
        title_add               : "Thêm mới",
        invalid_error           : "Nội dung không hợp lệ!",
        db_update_success       : ",this, được cập nhật thành công!",
        db_exist_item           : "Thông tin này đã có trong dữ liệu!",
        db_add_success          : "Đã thêm ,this, thành công!",
        db_delete_success       : "Đã xóa ,this, thành công!"
    },

    error:{
        login_ldap_not_exist  : "Account does not exist in ldap server!",
        login_ldap_admin_wrong: "Admin account or password is wrong!",
        login_ldap_error      : "Password of Ldap account is wrong or account does not exist!",
        create_ldap_user      : "Can not add ldap user to db!"
    },

    /*format*/
    format:{
        dateFront    : "dd-MM-YYYY",
        dateOracle   : "YYYY-MM-dd",
        time         : "24"
    },

    /*url*/
    url:{
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

        lpkcommon: {
            lpk             : "/lpkcommon",
            list            : "/lpkcommon/list",
            add             : "/lpkcommon/add",
            update          : "/lpkcommon/save",
            delete          : "/lpkcommon/delete"
        },

        user: {
            user            : "/user",
            profile         : "/user/profile",
            save            : "/user/save", //save mysafe and other
            update          : "/user/update", //edit other user
            add             : "/user/add", //add new
            delete          : "/user/delete", //delete
            list            : "/user/list"
        },

        setting: {
            setting         : "/setting",
            add             : "/setting/add",
            list            : "/setting/list",
            save            : "/setting/save",
            delete          : "/setting/delete"
        },

        item: {
            item            : "/item",
            list            : "/item/list"
        },

        moq: {
            moq             : "/moq",
            list            : "/moq/list",
            add             : "/moq/add",
            save            : "/moq/save",
            delete          : "/moq/delete"
        },

        rating: {
            rating          : "/rating",
            list            : "/rating/list"
        },

        forecast: {
            forecast        : "/forecast",
            list            : "/forecast/list",
            add             : "/forecast/add",
            save            : "/forecast/save",
            delete          : "/forecast/delete"
        },

        warning: {
            warning         : "/warning",
            list            : "/warning/list",
            add             : "/warning/add",
            save            : "/warning/save",
            delete          : "/warning/delete"
        },

        role: {
            role            : "/user/role",
            list            : "/user/role/list",
            mapping         : "/user/role/mapping"
        },

        group: {
            group           : "/user/group",
            list            : "/user/group/list",
            add             : "/user/group/add",
            save            : "/user/group/save",
            delete          : "/user/group/delete"
        },

        //roleGroup
    }
});
