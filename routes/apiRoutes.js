var breeds = require("../models/breeds.js");
var request = require("request");

module.exports = function(app) {
  // // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });
  app.get("/api/getshelter/:zipcode", function(req, res) {
    var devkey = process.env.PETFINDER_KEY;
    var zipcode = req.params.zipcode;
    request("http://api.petfinder.com/shelter.find?key=" + devkey + "&location=" + zipcode + "&format=json", function(error, response, body){
    res.json(JSON.parse(body));
    });
  });

  app.get("/api/getdogs/:zipcode/:size/:age/:gender", function(req, res) {
    var devkey = process.env.PETFINDER_KEY;
    var zipcode = req.params.zipcode;
    var size = req.params.size;
    var age = req.params.age;
    var gender = req.params.gender;
    request("http://api.petfinder.com/pet.find?key=" + devkey + "&animal=dog&location=" + zipcode + "&sex=" + gender + "&age=" + age + "&size=" + size + "&format=json", function(error, response, body){
    res.json(JSON.parse(body));
    });
  });


  // Create a new example
  app.get("/api/survey", function(req, res) {
    // console.log(req.body);
    //console.log(req.query);
     //breeds.selectBreed(req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,function(data) {
     breeds.selectBreed(req.query.q1,req.query.q2,req.query.q3,req.query.q4,req.query.q5,req.query.q6,req.query.q7,req.query.q8,function(data) {    
      if(data[0]){
      console.log(data[0].id);
      res.json({id: data[0].id});
      // return data;
     }
    });
  });

  app.get("/breed/:id", function(req, res) {
    breeds.selectWhere(req.params.id, function(data) {
      console.log("in route");
      console.log(data[0]);
      res.render("displaybreedMatch", {breeds: data[0]});
    });
  });

  app.post("/api/newsletter", function(req, res) {
    // breeds.selectWhere(req.params.id, function(data) {
      console.log("Inserting into database : "+req.body.email);
      breeds.create(["email"],[req.body.email]);
      // console.log(data[0]);
      // res.render("displaybreedMatch", {breeds: data[0]});
    // });
  });
  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
