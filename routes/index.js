const route = require("express").Router();
const controllers = require("../controllers/test");
route.get("/", controllers.route1);
route.get("/route2", controllers.route2)

module.exports = route;