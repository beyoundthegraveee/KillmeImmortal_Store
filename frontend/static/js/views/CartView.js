import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Cart");
    }

    async getHtml() {
        return `
            <div class="cart-view">
                    <div class="cart-container">
                        <h1>Shopping Cart</h1>
                        <div class="cart-items">
                        <!-- Cart items will be dynamically loaded here -->
                        </div>
                        <div class="cart-summary">
                            <h2>Summary</h2>
                            <p>Total items: <span id="total-items">0</span></p>
                            <p>Total price: <span id="total-price">$0.00</span></p>
                            <button id="checkout-btn" class="checkout-button">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
        `;
    }

}