import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Register");
    }

    async getHtml() {
        return `
        <script type="module" src="static/js/validationRegister.js" defer></script>
        <div class="login-bg">
            <div class="register-container">
                <h1>Sign Up</h1>
                <form id="register-form">
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
}