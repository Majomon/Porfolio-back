const routerEmails = require("express").Router();

const handlerEmail = require("../handler/handlerEmail");

routerEmails.get("/", (req, res) => {
  res.status(200).json(email);
});

routerEmails.post("/", handlerEmail);

module.exports = routerEmails;
