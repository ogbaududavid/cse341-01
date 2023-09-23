var express = require("express");
var app = express();

app.use("/", require("./routes"));

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})