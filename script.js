
const User_name = document.getElementById("User_name");
const pass = document.getElementById("pass");
const login_btn = document.getElementById("login_btn");

login_btn.addEventListener("click", () => {

    const user_input = User_name.value;
    const password_input = pass.value;

    if(user_input && password_input) {

        window.location.href="main.html"

    } else {

        alert("Login failed")

    }

})