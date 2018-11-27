$(document).ready(function(){
  $("select").formSelect();
  $(".modal").modal();

  $("#newslettersubmit").on("click", function(event) {

  $.ajax({
    method: "POST",
    url: "api/newsletter",
    data: { email: $("#emailfield").val() }
  })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  });

$("#submit").on("click", function(event) {
    event.preventDefault();
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
    var q4 = $("#q4").val();
    var q5 = $("#q5").val();
    var q6 = $("#q6").val();
    var q7 = $("#q7").val();
    var q8 = $("#q8").val();
    
    
    $.ajax("api/survey", {
      type: "GET",
      data: {q1:q1, q2:q2, q3:q3, q4:q4, q5:q5, q6:q6, q7:q7, q8:q8}
    }).then(
      function(data) {
        console.log(data);
        window.location.href = "/breed/"+data.id;
       
      }
    );



  });
});
