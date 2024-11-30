const fs = require('fs');
const path = require('path');
const Cart = require('../models/Cart');

// Функция для добавления товара в корзину
exports.addToCart = (req, res) => {
    const { productId, productPrice } = req.body;

    const filePath = path.join(__dirname, '../../data/cart.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Инициализация корзины
        let cart = [];
        if (data) {
            cart = JSON.parse(data);
        }

        // Проверяем, есть ли товар уже в корзине
        let existingProduct = cart.find(product => product.id === productId);
        if (existingProduct) {
            // Если товар есть, обновляем количество и цену
            existingProduct.totalamount += 1;
            existingProduct.totalprice += productPrice;
        } else {
            // Если товара нет, создаем новый элемент
            const newProduct = {
                id: productId,
                totalamount: 1,
                totalprice: productPrice,
            };
            cart.push(newProduct);
        }

        // Записываем обновленные данные в файл
        fs.writeFile(filePath, JSON.stringify(cart, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.status(200).json({ message: 'Product added to cart', cart });
        });
    });
};
