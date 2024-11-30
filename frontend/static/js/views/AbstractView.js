export default class AbstractView {
    constructor(){

    }
    setTitle(title){
        document.title = title;
    }

    async getHtml(){
        return "";
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
            this.showSuccessModal();
        })
        .catch(error => {
            console.error('Error adding product to cart:', error);
        });
    }

    showSuccessModal() {
        const modalHtml = `
            <div id="success-modal" class="modal">
                <div class="modal-content">
                    <span class="close-btn">&times;</span>
                    <h2>Product added to cart!</h2>
                    <p>Your product has been successfully added to the cart.</p>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = document.getElementById('success-modal');
        modal.style.display = "block";
        const closeButton = document.querySelector(".close-btn");
        closeButton.addEventListener('click', () => {
            modal.style.display = "none";
            modal.remove();
        });
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
                modal.remove();
            }
        });
    }

    showShipmentModal() {
        const modalHtml = `
            <div id="shipment-modal" class="modal">
                <div class="modal-content">
                    <span class="close-btn">&times;</span>
                    <h2>Your items have been shipped!</h2>
                    <p>Your items have been sent to your local address.</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = document.getElementById('shipment-modal');
        modal.style.display = "block";
        const closeButton = document.querySelector(".close-btn");
        closeButton.addEventListener('click', () => {
            modal.style.display = "none";
            modal.remove();
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
                modal.remove();
            }
        });
    }

}