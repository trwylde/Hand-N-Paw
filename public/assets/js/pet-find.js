$(document).ready(function() {
  var devkey = "c2557dfbaaf18789923aa6e8aa40ced3"

  $("#submitDogSearch").on("click",  function(event) {
    event.preventDefault();
    $("#search-results").empty();

    var size = $("#size").val().trim();
    var age = $("#age").val().trim();
    var zip = $("#zipCode").val().trim();
    var gender = $("#gender").val().trim();

    function validateZip() {
      var isValid = true;
      $(".validate").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }
    if (validateZip() == true) {

    $.ajax( {
      // url: "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=" + devkey + "&animal=dog&location=" + zip + "&sex=" + gender + "&size=" + size + "&age=" + age + "&format=json",
      url: "/api/getdogs/" + zip + "/" + size + "/" + age + "/" + gender,
      method: "GET",
      success: function(data, status) {
        console.log(data);
        var dogs = data.petfinder.pets;
        console.log(data.petfinder.pets.pet);

        for (var i = 0; i < 8; i++) {
          console.log(dogs.pet[i]);
          console.log(dogs.pet[i].name.$t);

          if (dogs.pet[i].breeds.breed.$t == undefined) {
            var breedMix =
            `<div class="card pet-card border-info bg-secondary">
            <img class="img-thumbnail" src="${dogs.pet[i].media.photos.photo[3].$t}" alt="Card image cap">
            <div class="card-body text-white text-center">
              <h4 class="dog-name" class="card-title">${dogs.pet[i].name.$t}</h5>
              <h5 class="dog-age">${dogs.pet[i].age.$t}</h5>
              <h5 class="dog-gender">${dogs.pet[i].sex.$t}</h5>
              <h5 class="dog-breed">${dogs.pet[i].breeds.breed[0].$t} & ${dogs.pet[i].breeds.breed[1].$t}</h5>
              <h5 class="dog-contact">Call ${dogs.pet[i].contact.phone.$t} for more information about ${dogs.pet[i].name.$t}<h5>
            </div>`;

          $("#search-results").append(breedMix);
          }
          else {
          var dogInfo = 
            `<div class="card pet-card border-info bg-secondary">
              <img class="img-thumbnail" src="${dogs.pet[i].media.photos.photo[3].$t}" alt="Card image cap">
              <div class="card-body text-white text-center">
                <h4 class="dog-name" class="card-title">${dogs.pet[i].name.$t}</h5>
                <h5 class="dog-age">${dogs.pet[i].age.$t}</h5>
                <h5 class="dog-gender">${dogs.pet[i].sex.$t}</h5>
                <h5 class="dog-breed">${dogs.pet[i].breeds.breed.$t}</h5>
                <h5 class="dog-contact">Call ${dogs.pet[i].contact.phone.$t} for more information about ${dogs.pet[i].name.$t}<h5>
              </div>`;

            $("#search-results").append(dogInfo);
          }
        }
        
      },
    })
      $("#gender").val("");
      $("#size").val("");
      $("#age").val("");
      $("#zipCode").val(""); 
    }
    else {
      alert("Please enter a zip code");
    }
  })
}); 