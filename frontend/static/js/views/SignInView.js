import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Login");
    }

    async getHtml(){
        return `
        <script type="module" src="static/js/validation.js" defer></script>
        <div class="login-bg">
            <div class="login-container">
                <h1>Login</h1>
                <form id="login-form">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required>
                    </div>
                    <button type="submit" class="login-button">Log In</button>
                </form>
                <p>Don't have an account? <a href="/register" data-link>Sign up here</a></p>
            </div>
        </div>
        `;
    }
}