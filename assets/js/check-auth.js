
function checkAuth() {
    if (sessionStorage.hasOwnProperty('User ID') && sessionStorage.hasOwnProperty('College') && sessionStorage.hasOwnProperty('Token')) {
    } else {
        window.location.href = "auth-login.html"
    }
}
window.onpaint = checkAuth();

function logout() {
    sessionStorage.clear();
    window.location.href = "auth-login.html"
}