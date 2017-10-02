$(document).ready(function(){
    $("#username").focus();
    $("#login").submit(function (evt) {
        evt.preventDefault();
        if (loginValidate()) {
            jQuery.ajax({
                url: '#{url_login}',
                type: 'POST',
                dataType: "json",
                data: {username: $("#username").val(), password: $("#password").val()},
                success: function (data) {
                    if (data.status == 'fail') {
                        $(".loginmsg").html(data.err);
                        $("#username").focus();
                    } else {
                        window.location.href = data.backURL;
                    }
                }
            });
        }
    });
});
function loginValidate() {
    var user = $("#username").val();
    var pass = $("#password").val();
    if (user && pass) {
        $("#username").next().html("");
        $("#password").next().html("");
        return true;
    } else {
        if (!user) {
            $("#username").next().html("Username invalid!");
        } else {
            $("#username").next().html("");
        }
        if (!pass) {
            $("#password").next().html("Password invalid!");
        } else {
            $("#password").next().html("");
        }
        return false;
    }
}