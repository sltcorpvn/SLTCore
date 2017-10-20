$(document).ready(function(){
    $("#username").focus();
    $("#login").submit(function (evt) {
        evt.preventDefault();
        if (loginValidate()) {
            $.ajax({
                url: '#{sails.config.sltconfig.url.front.login}',
                type: 'POST',
                dataType: "json",
                crossDomain: true,
                //headers: {'X-CSRF-TOKEN': "asdfhaifhaihfah"},
                xhrFields: { withCredentials: true },
                data: {username: $("#username").val(), password: $("#password").val()},
                before: function(){
                    //loading image here
                },
                success: function (data) {
                    console.log(data.status);
                    console.log(data.backURL);
                    if (data.status === 0) {
                        $(".loginmsg").html(data.err);
                        $("#username").focus();
                    } else {
                        window.location.href = data.backURL;
                    }
                },
                complete: function(){
                    //hide loading image
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
            $("#username").next().html('#{__("login_username_invalid")}');
        } else {
            $("#username").next().html("");
        }
        if (!pass) {
            $("#password").next().html('#{__("login_password_invalid")}');;
        } else {
            $("#password").next().html("");
        }
        return false;
    }
}