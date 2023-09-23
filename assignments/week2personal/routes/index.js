const routes = require("express").Router();

const myControllers = require("../controllers")

routes.get("/contacts", myControllers.getContacts)

module.exports = routes
