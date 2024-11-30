import AbstractView from "./AbstractView.js";
import { getAllProducts } from '/static/js/productService.js';
let products = [];
export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("DashBoard");
    }

    async getHtml() {
        products = await getAllProducts();
        let productsHtml = '';

        products.forEach(product => {
            productsHtml += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
        });

        return `
            <div class="image-container">
                <img src="/static/img/toshayo.jpg" alt="background-image">
            </div>
    
            <div id="product-display" class="product-display">
                <h2>Our Products</h2>
                <div class="product-container">
                    ${productsHtml}
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const productContainer = document.querySelector('.product-container');
        if (productContainer) {
            productContainer.addEventListener('click', (event) => {
                if (event.target.matches('.add-to-cart')) {
                    const productId = event.target.dataset.id;
                    const productPrice = parseFloat(event.target.dataset.price);
                    this.handleAddToCart(productId, productPrice);
                }
            });
        }
    }

    handleAddToCart(productId, productPrice) {
        const url = 'http://localhost:3000/cart/addToCart';
        const data = {
            productId: productId,
            productPrice: productPrice,
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Product successfully added to cart:', data);
        })
        .catch(error => {
            console.error('Error adding product to cart:', error);
        });
    }

}