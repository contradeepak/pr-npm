const express = require("express");
const app = express();
const path = require("path")


app.use(express.static("public"));

app.get("/", (req,res) => {
  //  res.send("Welcome to our express server")
 res.sendFile(path.join(__dirname, "index.html"))


})

app.listen(3000, () => {
    console.log("Server started on port 3000.")
})

app.get("/home", (req,res) => {
    res.send("<h2>This is our homepage</h2>")
})



app.get("/contact", (req,res) => {
    res.send("<h1>This is Contact Us PAGE</h1>")
})