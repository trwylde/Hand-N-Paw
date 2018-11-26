

$(document).ready(function(){
  $('select').formSelect();
  $('.modal').modal();


$("#submit").on("click", function() {
  event.preventDefault();

  var q1 = $("#q1").val();
  var q2 = $("#q2").val();
  var q3 = $("#q3").val();
  var q4 = $("#q4").val();
  var q5 = $("#q5").val();
  console.log(q1, q2, q3, q4, q5);

  $.ajax({
    type: "GET",
    url: "/api/survey",
    data: {q1:q1, q2:q2, q3:q3, q4:q4, q5:q5}
  })
  .done(function( data) {
    console.log(data);
  });

});

});