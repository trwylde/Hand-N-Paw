$(document).ready(function() {
  var devkey = "c2557dfbaaf18789923aa6e8aa40ced3"

  $("#submitDogSearch").on("click",  function(event) {
    event.preventDefault();
    $("#search-results").empty();

    var size = $("#size").val().trim();
    var age = $("#age").val().trim();
    var zip = $("#zipCode").val().trim();
    var gender = $("#gender").val().trim();

    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=" + devkey + "&animal=dog&location=" + zip + "&sex=" + gender + "&size=" + size + "&age=" + age + "&format=json",
      method: "GET",
      success: function(data, status) {
        var dogs = data.petfinder.pets;
        console.log(data.petfinder.pets.pet);

        for (var i = 0; i < 8; i++) {
          console.log(dogs.pet[i]);
          console.log(dogs.pet[i].name.$t);

          var dogInfo = 
            `<div class="card pet-card border-info bg-secondary">
              <img class="img-thumbnail" src="${dogs.pet[i].media.photos.photo[3].$t}" alt="Card image cap">
              <div class="card-body text-white text-center">
                <h4 class="dog-name" class="card-title">${dogs.pet[i].name.$t}</h5>
                <h5 class="dog-age">${dogs.pet[i].age.$t}</h5>
                <h5 class="dog-gender">${dogs.pet[i].sex.$t}</h5>
                <h5 class="dog-breed">${dogs.pet[i].breeds.breed.$t}</h5>
              </div>`;
            $("#search-results").append(dogInfo);
          }
        },
      })
      
  $("#gender").val("");
  $("#size").val("");
  $("#age").val("");
  $("#zipCode").val(""); 
  })
}); 