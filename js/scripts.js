function pingPong(input) {
  $("#output").empty();
  var output = [];
  pingPongs = 0;
  pings = 0;
  pongs = 0;

  if (input <= 0) {
    alert("You must enter a positive, whole number.");
    $('#numberInput').val("");
  } else {
    for (i=1; i <= input; i++) {
      if ((i % 15) === 0) {
        output.push("<b><i>Ping Pong</i></b>");
        pingPongs++;
        pings++;
        pongs++;
      }
      else if ((i % 3) === 0) {
        output.push("<b>ping</b>");
        pings++;
      }
      else if ((i % 5) === 0) {
        output.push("<b>pong</b>")
        pongs++;
      }
      else {
        output.push(i);
      }
    }
    console.log(output);

    var i = 0

    var printing = setInterval(function() {
      $("#bigNumber").text(i)
      $("#output").append(output[i] + ", ")
      i++
      if (i >= output.length) {
        $("#bigNumber").text(i++)
        $(".pings").text(pings);
        $(".pongs").text(pongs);
        $(".pingPongs").text(pingPongs);
        clearInterval(printing)
      }
    }, (3000 / output.length))
  }
}

$("#form").submit(function(event) {
  event.preventDefault();

  var input = parseInt($("input#numberInput").val());

  pingPong(input);

});
