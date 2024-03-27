const routerEmails = require("express").Router();

const handlerEmail = require("../handler/handlerEmail");

routerEmails.post("/", handlerEmail);

module.exports = routerEmails;
