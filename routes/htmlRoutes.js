// var db = require("../models");
var path = require("path");

module.exports = function(app) {

  // Handlebar Routes
  app.get("/survey", function(req, res) {
    res.render("surveyBreeds");
  });

  app.get("/newsletter", function(req, res) {
    res.render("newsletter");
  });

  // HTML Routes

  app.get("/petfind", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/pet-find.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/welcome.html"));
  });

  app.get("/shelters", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/shelters.html"));
  });

  // Error page render

  app.get("*", function(req, res) {
    res.send("404 - Page Not Found");
  });
};
