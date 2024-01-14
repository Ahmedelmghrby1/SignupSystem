

var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var login_btn = document.getElementById("login_btn") 
var login_list = [];
if (localStorage.getItem("users") != null) {
    login_list = JSON.parse(localStorage.getItem("users"));
  }
  
  //for check inputs is empty or not
function isEmpty() {

    if (signinEmail.value == "" || signinPassword.value == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (var i = 0; i < login_list.length; i++) {
        if (login_list[i].email.toLowerCase() === signinEmail.value.toLowerCase() && login_list[i].password.toLowerCase() === signinPassword.value.toLowerCase() ) {
            localStorage.setItem("setionusername" , login_list[i].name)
            return true
        }
    }
}

function signIn() {
    if (isEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
     
    if(isEmailExist()){
       login_btn.addEventListener("click" ,function(){
        window.open('home.html', '_self');


       } )
    }
    else {
        document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    }
}
