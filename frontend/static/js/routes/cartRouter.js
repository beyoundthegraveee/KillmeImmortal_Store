const express = require("express");
const cartController = require('../controllers/cartController.js');
const cartRouter = express.Router();

cartRouter.post("/addToCart", cartController.addToCart);

module.exports = cartRouter;