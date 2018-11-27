// var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/survey", function(req, res) {
    // res.send("surveyBreeds.html");
    // res.sendFile(path.join(__dirname, "../public/surveyBreeds.html"));
    // console.log("this is hell");
    // res.send("hello");
    res.render("surveyBreeds");
  });

  app.get("/newsletter", function(req, res) {

    res.render("newsletter");
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.send("404 - Page Not Found");
  });
};
