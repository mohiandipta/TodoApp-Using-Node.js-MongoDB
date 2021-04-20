const express = require("express");

const app = express();

// dedicating a port number and telling express app to listen to that port.
app.listen(3000, () => console.log("server up and running"));

// Using Get method for non-confidential information to show in the web browser
app.get('/', (req, res) => {
    res.render('todo.ejs');
});


app.set("view engine", "ejs");

// adding css
app.use("/static", express.static("public"));