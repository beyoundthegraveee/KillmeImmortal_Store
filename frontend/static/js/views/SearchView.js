import AbstractView from "./AbstractView.js";
import { getAllProducts } from '/static/js/productService.js';

let products = [];

export default class SearchView extends AbstractView {
    constructor() {
        super();
        this.setTitle("Search Products");
    }

    async getHtml() {
        products = await getAllProducts();
        const searchQuery = new URLSearchParams(window.location.search).get('q') || '';
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        let productsHtml = '';

        filteredProducts.forEach(product => {
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
            <div class="search-container">
                <h2>Search Results</h2>
                <div class="product-container">
                    ${productsHtml || '<p>No products found.</p>'}
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
