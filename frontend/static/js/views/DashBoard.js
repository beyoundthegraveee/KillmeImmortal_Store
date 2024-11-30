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
            const numericPrice = parseFloat(product.price.replace('$', ''));
            productsHtml += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}"  data-price="${numericPrice}">Add to Cart</button>
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
                    if (!isNaN(productPrice)) {
                        this.handleAddToCart(productId, productPrice);
                    } else {
                        console.error('Product price is invalid:', productPrice);
                    }
                }
            });
        }
    }


}