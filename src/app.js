const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routerEmail = require("./routes/email.routes");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/send-email", routerEmail);

module.exports = app;
