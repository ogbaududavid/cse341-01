var express = require("express");

var app = express();

app.use("/", require("./routes"))

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})