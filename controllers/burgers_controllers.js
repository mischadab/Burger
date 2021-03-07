// File to set up routes for the app.
// Also contains MySQL queries

// Require dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// GET REQUEST grab data from all the burgers from the burgers table.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerBurger = { burgers: data };
    res.render("index", burgerBurger);
  });
});

// POST REQUEST - inserting a burger into the db through user input
router.post("/insertOne", function (req, res) {
  burger.insertOne(req.body.burger_name, function (addon) {
    res.redirect("/");
  });
});

// POST REQUEST - updating if a burger has been devoured or not
router.post("/updateOne/:id", function (req, res) {
  var colVal = "id";
  var id = req.params.id;
  burger.updateOne(colVal, id, function () {
    res.redirect("/");
  });
});

module.exports = router;
