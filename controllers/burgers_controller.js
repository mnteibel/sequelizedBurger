var express = require("express");

var router = express.Router();

var methodOverride = require("method-override");

var db = require("../models");


router.get("/", function(req, res) {

  res.redirect("/burgers")
  
});

router.get("/burgers", function(req, res) {

  db.burgers.findAll({}).then(function(results) {
    
    var handlebarsInsert = { burgers: results}
    res.render("index", handlebarsInsert);

  })
});


router.post("/burgers/create", function(req, res) {

  db.burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(results) {

    res.redirect("/burgers")

  })

});


router.put("/burgers/update", function(req, res) {

  db.burgers.update({
    devoured: req.body.devoured
  }, {
    where: {id : req.params.id}  
  }).then(function(results) {
    res.redirect("/burgers")
  })

})


module.exports = router
