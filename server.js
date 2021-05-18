require("dotenv").config;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get("/:period", function(req, res) {
    res.render("index", { century: req.params["period"] });
})
app.post("/period", function(req, res) {
    var century = req.body.century;
    console.log(century);
    res.redirect("/" + century);
})


app.listen(PORT, function() {
    console.log("Server Started");
});