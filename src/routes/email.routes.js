const routerEmails = require("express").Router();

const handlerEmail = require("../handler/handlerEmail");

routerEmails.get("/", (req, res) => {
  res.status(200).json("Hola");
});

routerEmails.post("/", handlerEmail);

module.exports = routerEmails;
