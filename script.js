
const User_name = document.getElementById("User_name");
const pass = document.getElementById("pass");
const login_btn = document.getElementById("login_btn");

    window.addEventListener("DOMContentLoaded", () => {
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername) User_name.value = savedUsername;
        if (savedPassword) pass.value = savedPassword;
    });

login_btn.addEventListener("click", () => {

    const user_input = User_name.value.trim();
    const password_input = pass.value.trim();

    if(user_input && password_input) {

        localStorage.setItem("username", user_input);
        localStorage.setItem("password", password_input);

        window.location.href="main.html"

    } else {

        alert("Login failed")

    }

})