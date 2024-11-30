import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    
    constructor() {
        super();
        this.setTitle("Register");
    }

    async getHtml() {
        return `
        <div class="register-bg">
            <div class="register-container">
                <h1>Sign Up</h1>
                <form id="register-form" action="/user/register" method="POST">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Create a username" required>
                        <div id="username-error" class="error-message"></div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Write an email" required>
                        <div id="email-error" class="error-message"></div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Create a password" required>
                        <div id="password-error" class="error-message"></div>
                    </div>
                    <button type="submit" class="register-button">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login" data-link>Log in here</a></p>
            </div>
        </div>
    `;
    }

    addEventListeners() {
        const form = document.getElementById("register-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let isValid = true;
            const username = document.getElementById("username");
            const usernameError = document.getElementById("username-error");
            if (username.value.length < 8) {
                usernameError.textContent = "Username must be at least 8 characters long";
                usernameError.style.visibility = "visible";
                usernameError.style.color = "red";
                isValid = false;
            } else {
                usernameError.style.visibility = "hidden";
            }

            const password = document.getElementById("password");
            const passwordError = document.getElementById("password-error");
            if (password.value.length < 10) {
                passwordError.textContent = "Password must be at least 10 characters long";
                passwordError.style.visibility = "visible"; 
                passwordError.style.color = "red";
                isValid = false;
            } else {
                passwordError.style.visibility = "hidden";
            }
            if (isValid) {
                form.submit();
            }
        });
    }
    
}