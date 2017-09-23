/*
* create on 22/09/2017
*/

module.exports = {
    /*database config */
    db: {
        type    : "mongodb",
        server  : "admin@sltcorp.vn:39017",
        name    : "devVRPSystem",
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
        host: "core.sltcorp.vn",
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
    }
};
