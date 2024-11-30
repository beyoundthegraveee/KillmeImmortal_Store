import AbstractView from "./AbstractView.js";
import { getCart } from '/static/js/cartService.js';
let cart = [];
let products = [];
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Cart");
    }

    async getHtml() {
        cart = await getCart();
        const response = await fetch('/static/data/Products.json');
        if (!response.ok) {
            console.error('Error loading products data');
            return '';
        }
        products = await response.json();
        let cartItemsHtml = '';
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            const product = products.find(p => p.id == item.id);
            const productName = product ? product.name : "Unknown Product";
            cartItemsHtml += `
                <div class="cart-item">
                   <p>Product: ${productName}</p>
                    <p>Quantity: ${item.totalamount}</p>
                    <p>Price: $${item.totalprice.toFixed(2)}</p>
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
                        <button id="checkout-btn" class="checkout-button">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const clearCartButton = document.getElementById('checkout-btn');
        const cartItemsElement = document.getElementById('cart-items');
        if (clearCartButton) {
            clearCartButton.addEventListener('click', async () => {
                try {
                    const response = await fetch('http://localhost:3000/cart/clearCart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    cartItemsElement.innerHTML = '';
                    document.getElementById('total-items').textContent = '0';
                    document.getElementById('total-price').textContent = '$0.00';
                    this.showShipmentModal();
                    console.log('Cart cleared successfully');
                } catch (error) {
                    console.error('Error clearing the cart:', error);
                }
            });
        }
    }
}