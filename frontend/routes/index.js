const controllers = require("../controllers/index");
const route = require("express").Router();
route.get("/route3", controllers.route1);
route.get("/route4", controllers.route2);

module.exports = route;
