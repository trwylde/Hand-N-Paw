$(document).ready(function() {

  console.log("ready");
  $("#zipsub").on("click", function(event) {
    event.preventDefault();
    var zipcode =  $("#shelter-zip-code").val().trim();

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

      $.ajax({
        // url: "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?key=" + devkey + "&location=" + zipcode + "&format=json",
        url: "/api/getshelter/" + zipcode,
        method: "GET",
        success: function(data, status) {
          console.log(data.petfinder.shelters.shelter);
          console.log(data);
            var shelters =  data.petfinder.shelters.shelter;
            console.log(shelters.length);

              for (var i = 0; i < 10; i++) {

                if(shelters[i].phone.$t == undefined) {
                  var noPhone = `<div class="shelterWrapper text-center">
                  <h4 class="shelter-name">${shelters[i].name.$t}</h4>
                    <h5 class="shelter-location">${shelters[i].city.$t}, ${shelters[i].state.$t}, ${shelters[i].zip.$t}</h5>
                    <br>
                    <h6><div class="shelter-info">Phone Number Not Available    |    Email: <a href="mailto:${shelters[i].email.$t}">${shelters[i].email.$t}</a></div></h6>
                    </div>
                    <hr>`;
                  
                  $("#shelterResults").append(noPhone);
                }
                else {
                var place = `<div class="shelterWrapper text-center">
                  <h4 class="shelter-name">${shelters[i].name.$t}</h4>
                    <h5 class="shelter-location">${shelters[i].city.$t}, ${shelters[i].state.$t}, ${shelters[i].zip.$t}</h5>
                    <br>
                    <h6><div class="shelter-info">Phone: ${shelters[i].phone.$t}    |    Email: <a href="mailto:${shelters[i].email.$t}">${shelters[i].email.$t}</a></div></h6>
                    </div>
                    <hr>`;
                  
                  $("#shelterResults").append(place);
              }
              }
                console.log(shelters[0].name.$t);
            },
          })
          $("#shelter-zip-code").val("");
        }
        else {
          alert("Please enter a zip code");
        }
      });
}); //Closes Document Ready        
