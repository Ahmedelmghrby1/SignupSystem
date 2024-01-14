var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var userlist = [];
if (localStorage.getItem("users") != null) {
    userlist = JSON.parse(localStorage.getItem("users"));
  }

  //for check inputs is empty or not
function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (var i = 0; i < userlist.length; i++) {
        if (userlist[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
 var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }

    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        userlist.push(signUp)
        localStorage.setItem('users', JSON.stringify(userlist))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

    }
}

    