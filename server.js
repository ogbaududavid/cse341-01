//express will be used to connect to a server
var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Francisca Ogbaudu");
});

const port = 3000;

app.listen(process.env.port || port)
console.log(`server is running on port ${process.env.port || port}`)