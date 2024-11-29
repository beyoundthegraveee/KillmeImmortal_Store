import AbstractView from "./AbstractView.js";
import { getProductsByCategory } from '/static/js/productService.js';
export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Outerwear");
    }

    async getHtml() {
        const products = await getProductsByCategory('outerwear');
        
        let productsHtml = '';
        products.forEach(product => {
            productsHtml += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            `;
        });

        return `
            <div class="image-container">
                <img src="/static/img/toshayo.jpg" alt="background-image">
            </div>
    
            <div id="product-display" class="product-display">
                <h2>Outerwear</h2>
                <div class="product-container">
                    ${productsHtml}
                </div>
            </div>
        `;
    }
}