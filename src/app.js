const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Rutas
const routerEmail = require("./routes/email.routes");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/resendEmail", routerEmail);

module.exports = app;
