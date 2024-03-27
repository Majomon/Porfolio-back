const routerProducts = require("express").Router();

const handlerGetAllProducts = require("../handler/handlerGetAllProducts");

routerProducts.get("/", handlerGetAllProducts);

module.exports = routerProducts;
