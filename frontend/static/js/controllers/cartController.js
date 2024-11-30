const fs = require('fs');
const path = require('path');
const Cart = require('../models/Cart');

exports.addToCart = (req, res) => {
    const { productId, productPrice } = req.body;

    const filePath = path.join(__dirname, '../../data/cart.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }
        let cart = [];
        if (data) {
            cart = JSON.parse(data);
        }
        let existingProduct = cart.find(product => product.id === productId);
        if (existingProduct) {
            existingProduct.totalamount += 1;
            existingProduct.totalprice += productPrice;
        } else {
            const newProduct = {
                id: productId,
                totalamount: 1,
                totalprice: productPrice,
            };
            cart.push(newProduct);
        }
        fs.writeFile(filePath, JSON.stringify(cart, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.status(200).json({ message: 'Product added to cart', cart });
        });
    });
};


exports.clearCart = (req, res) => {
    const filePath = path.join(__dirname, '../../data/cart.json');
    fs.writeFile(filePath, JSON.stringify([], null, 2), (err) => {
        if (err) {
            console.error('Error clearing the cart:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.status(200).json({ message: 'Cart cleared successfully' });
    });
};
