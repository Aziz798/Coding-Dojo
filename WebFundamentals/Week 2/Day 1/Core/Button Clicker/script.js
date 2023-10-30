function login() {
    var btn = document.getElementById("login")
    if (btn.innerHTML == 'Login') {
        btn.innerHTML = 'Logout !'
    }else{
        btn.innerHTML = 'Login'
    }
}
function remove(){
    var button=document.getElementById('def');
    button.remove();
}
