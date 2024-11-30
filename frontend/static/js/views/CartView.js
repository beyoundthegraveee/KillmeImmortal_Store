import AbstractView from "./AbstractView.js";
import { getCart } from '/static/js/cartService.js';
let cart = [];
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Cart");
    }

    async getHtml() {
        cart = await getCart();

        let cartItemsHtml = '';
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            cartItemsHtml += `
                <div class="cart-item">
                    <p>Product ID: ${item.id}</p>
                    <p>Quantity: ${item.totalamount}</p>
                    <p>Total Price: $${item.totalprice.toFixed(2)}</p>
                </div>
            `;
            totalItems += item.totalamount;
            totalPrice += item.totalprice;
        });

        return `
            <div class="cart-view">
                <div class="cart-container">
                    <h1>Shopping Cart</h1>
                    <div class="cart-items" id="cart-items">
                        ${cartItemsHtml}
                    </div>
                    <div class="cart-summary">
                        <h2>Summary</h2>
                        <p>Total items: <span id="total-items">${totalItems}</span></p>
                        <p>Total price: <span id="total-price">$${totalPrice.toFixed(2)}</span></p>
                    </div>
                </div>
            </div>
        `;
    }
}