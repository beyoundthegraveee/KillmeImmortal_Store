import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Login");
    }

    async getHtml(){
        return `
        <div class="login-bg">
            <div class="login-container">
                <h1>Login</h1>
                <form id="login-form" action="/user/login" method="POST">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required>
                        <div id="username-error" class="error-message"></div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required>
                        <div id="password-error" class="error-message"></div>
                    </div>
                    <button type="submit" class="login-button">Log In</button>
                </form>
                <p>Don't have an account? <a href="/register" data-link>Sign up here</a></p>
            </div>
        </div>
        `;
    }
}