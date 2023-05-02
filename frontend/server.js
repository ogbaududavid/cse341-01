const express = require("express");
const app = express()

app.use("/", require("./routes"))

const port = 3030 

app.listen(process.env.port || port, ()=>{
    console.log("Server is running on port" + port);
})