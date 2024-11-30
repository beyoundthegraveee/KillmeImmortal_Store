const express = require("express");
const cartController = require('../controllers/cartController.js');
const cartRouter = express.Router();

cartRouter.post("/addToCart", cartController.addToCart);
cartRouter.post("/clearCart", cartController.clearCart);
cartRouter.post("/removeFromCart", cartController.removeFromCart);
module.exports = cartRouter;