var users = {"guest@test.com":"guest"};

function checkCredentials() {
    var inputEmail = document.getElementById("inputEmail").value;
    var inputPassword = document.getElementById("inputPassword").value;

    if (users[inputEmail] == inputPassword) {
        window.open("./dashboard.html", "_self");
    }
    else {
        alert("Incorrect username or password");
    }
}