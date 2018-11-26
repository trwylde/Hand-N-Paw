// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var breeds = {
  selectBreed: function(size, outdoor_space, child_safe, sociable, multi_animal_safe,cb) {
    orm.selectBreed(size, outdoor_space, child_safe, sociable, multi_animal_safe, function(res) {
      cb(res);
    });
  }
  // // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create("cats", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update: function(objColVals, condition, cb) {
  //   orm.update("cats", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = breeds;
