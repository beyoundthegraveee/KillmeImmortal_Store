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
                    <span class="remove-icon" data-id="${item.id}">
                        <img src="/static/img/delete.svg" alt="Remove item" />
                        <button class="remove-btn" data-id="${item.id}">Remove</button>
                    </span>
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
        if (cartItemsElement) {
            cartItemsElement.addEventListener('click', async (event) => {
                const target = event.target;
                if (target.classList.contains('remove-btn') || target.closest('.remove-icon')) {
                    const productId = target.dataset.id || target.closest('.remove-icon').dataset.id;
    
                    try {
                        const response = await fetch('http://localhost:3000/cart/removeFromCart', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ productId }),
                        });
                        if (response.ok) {
                            const updatedCart = await response.json();
                            console.log('Item removed successfully');
                            this.updateCartView(updatedCart, this.products);
                        } else {
                            console.error('Failed to remove product from cart');
                        }
                    } catch (error) {
                        console.error('Error removing product from cart:', error);
                    }
                }
            });
        }
    }
}