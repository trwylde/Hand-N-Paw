var breeds = require("../models/breeds.js");

module.exports = function(app) {
  // // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  app.get("/api/survey", function(req, res) {
    // console.log(req.body);
    console.log(req.query);
    // breeds.selectBreed(req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,function(data) {
    breeds.selectBreed(req.query.q1,req.query.q2,req.query.q3,req.query.q4,req.query.q5,function(data) {    
      var hbsObject = {
        breeds: data
      };
      console.log(hbsObject);
      res.json(hbsObject);
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
