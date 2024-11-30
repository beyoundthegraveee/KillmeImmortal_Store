const express = require("express");
const searchRouter = express.Router();

searchRouter.get('/search');

module.exports = searchRouter;