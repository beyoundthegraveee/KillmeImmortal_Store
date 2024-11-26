document.addEventListener("DOMContentLoaded", () => {

const loginForm = document.getElementById("login-form");
const userName = document.getElementById('username');
const userPassword = document.getElementById('password');
const login_error = document.getElementById('username-error');
const password_error = document.getElementById('password-error');

loginForm.addEventListener('submit', e => {
    let loginErrors = validateLogin(userName.value);

    let passwordErrors = validatePassword(userPassword.value);

    if(loginErrors.length > 0){
        e.preventDefault();
        login_error.innerText  = loginErrors.join(". ")
    }
    if(passwordErrors.length > 0){
        e.preventDefault();
        password_error.innerText  = passwordErrors.join(". ")
    }

});

function validateLogin(login_input){
    let errors = [];

    if (login_input.trim() === '') {
        errors.push("Login is required.")
        userName.parentElement.classList.add('incorrect');
    }

    if(login_input.length < 8 || login_input.length > 30){
        errors.push("Login must have at least 8 characters and must be shorter than 30 characters.")
        userName.parentElement.classList.add('incorrect')
    }
    return errors;
}

function validatePassword(password_input){
    let errors = [];
    if (password_input.trim() === '') {
        errors.push("Password is required.")
        userPassword.parentElement.classList.add('incorrect');
    }

    if(password.length < 12){
        errors.push('Password must have at least 12 characters')
        userPassword.parentElement.classList.add('incorrect')
    }
    return errors;

}


const inputs = [userName, userPassword];
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect');
            if (input === userName) {
                login_error.innerText = '';
            }
            if (input === userPassword) {
                password_error.innerText = '';
            }
        }
    });
});
});