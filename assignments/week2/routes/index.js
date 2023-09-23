const routes = require("express").Router()

const myRouterControllers = require("../controllers")

routes.get("/professional", myRouterControllers.getData)

module.exports = routes
