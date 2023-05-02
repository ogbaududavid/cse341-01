const controllers = require("../controllers/index");
const route = require("express").Router();
route.get("/", controllers.route1);
route.get("/route2", controllers.route2);

module.exports = route;
