var username = localStorage.getItem('setionusername')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}

function logout() {
    localStorage.removeItem('setionusername')
}