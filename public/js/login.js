$(document).ready(function() {
    var loginForm = $("form.login");
    var email = $("#email").val();
    var password = $("#password").val();

    // When the form is submitted, check if there is valid email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: email.val().trim(),
            password: password.val().trim()
        };

        if(!userData.email || !userData.password) {
            return;
        }
        // Clear the form if we have a valid input and send the ajax post call function as defined below
        loginUser(userData.email, userData.password);
        $("#email").val("");
        $("#password").val("");
    });

    // post the user info to api/login route and if successful it will redirect us to the awesometimer!
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
            //if error log the error
        }).catch(function(err) {
            console.log(err);
        });
    }
});