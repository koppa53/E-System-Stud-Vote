
function checkAuth() {
    if (sessionStorage.hasOwnProperty('hasLoggedIn')) {
    } else {
        window.location.href = "auth-login.html"
    }
}
window.onpaint = checkAuth();

/*window.onbeforeunload = function (event) {
    return confirm('Are you sure you want to refresh?');
}*/

function logout() {
    sessionStorage.clear();
    window.location.href = "auth-login.html"
}