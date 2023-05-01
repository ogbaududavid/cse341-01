//express will be used to connect to a server
var express = require("express");
var app = express();

const contorllers = require("./controllers/test");
app.get("/", contorllers.route1);
app.get("/route2", contorllers.route2)

const port = 3000;

app.listen(process.env.port || port)
console.log(`server is running on port ${process.env.port || port}`)