import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("DashBoard");
    }

    async getHtml(){
        return `
     <div class="image-container">
        <img src="/static/img/toshayo.jpg" alt="background-image">
    </div>

    <div id="product-display" class="product-display">
        <h2>Our Products</h2>
        <div class="product-container">
            <div class="product-card">
                <img src="/static/products_img/harsh.jpg" alt="Product 1">
                <h3>Product 1</h3>
                <p>$19.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="/static/products_img/hoodie.jpg" alt="Product 2">
                <h3>Product 2</h3>
                <p>$29.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="/static/products_img/t-shirt1.jpg" alt="Product 3">
                <h3>Product 3</h3>
                <p>$39.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="/static/products_img/t-shirt3.jpg" alt="Product 4">
                <h3>Product 4</h3>
                <p>$49.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="/static/products_img/toyota.jpg" alt="Product 5">
                <h3>Product 5</h3>
                <p>$12.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="/static/products_img/t-shirt2.jpg" alt="Product 6">
                <h3>Product 6</h3>
                <p>$13.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="/static/products_img/pants1.jpg" alt="Product 7">
                <h3>Product 7</h3>
                <p>$13.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="/static/products_img/pants2.jpg" alt="Product 8">
                <h3>Product 8</h3>
                <p>$13.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src="/static/products_img/pants3.jpg" alt="Product 9">
                <h3>Product 9</h3>
                <p>$13.99</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
    </div>



        
        `;
    }
}