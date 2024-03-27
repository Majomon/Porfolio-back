const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Rutas
const routerProducts = require("./routes/products.routes");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/products", routerProducts);

module.exports = app;
