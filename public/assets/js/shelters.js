$(document).ready(function() {
  var devkey = "c2557dfbaaf18789923aa6e8aa40ced3"

  console.log("ready");
  $("#zipsub").on("click", function(event) {
    event.preventDefault();
    var zipcode =  $("#shelter-zip-code").val().trim();

      $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?key=" + devkey + "&location=" + zipcode + "&format=json",
        method: "GET",
        success: function(data, status) {
          console.log(data.petfinder.shelters.shelter);
          console.log(data);
          var shelters =  data.petfinder.shelters.shelter;
            console.log(shelters.length);
              for (var i = 0; i < 10; i++) {
                var mailToEMail = data.petfinder.shelters.shelter[i].email.$t;
                mailToEMail.href = "mailto:{mailToEMail}";
                console.log(mailToEMail);
                var place = `<div class="shelterWrapper text-center">
                  <h4 class="shelter-name">${shelters[i].name.$t}</h4>
                  <h5 class="shelter-location">${shelters[i].city.$t}, ${shelters[i].state.$t}, ${shelters[i].zip.$t}</h5>
                  <br>
                  <h6><div class="shelter-info">Phone: ${shelters[i].phone.$t}    |    Email: ${mailToEMail}</div></h6>
                  </div>
                  <hr>`;
                  
                  $("#shelterResults").append(place);
              }
                console.log(shelters[0].name.$t);
            },
          })
        });
}); //Closes Document Ready        
