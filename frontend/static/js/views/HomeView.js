import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Home");
    }

    async getHtml(){
        return `
        <div class="image-container">
        <img src="static/img/toshayo.jpg" alt="background-image">
    </div>

    <section id="product-display" class="product-display">
        <h2>Our Products</h2>
        <div class="product-container">
            <div class="product-card">
                <img src="static/products_img/cap.jpg" alt="Product 1">
                <h3>Product 1</h3>
                <p>$19.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="static/products_img/hoodie.jpg" alt="Product 2">
                <h3>Product 2</h3>
                <p>$29.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="static/products_img/jacket.jpg" alt="Product 3">
                <h3>Product 3</h3>
                <p>$39.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="static/products_img/pants.png" alt="Product 4">
                <h3>Product 4</h3>
                <p>$49.99</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </section>
        
        `;
    }
}