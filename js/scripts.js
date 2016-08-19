$("#form").submit(function(event) {
  event.preventDefault();
  $("#output").empty();

  var input = parseInt($("input#numberInput").val());
  console.log(input)
  var numbers = []

  var counter = function(targetNum){
    for (i=1; i <= targetNum; i++) {
      if ((i % 15) === 0) {
        $("#output").append("Ping Pong! ")
      }
      else if ((i % 3) === 0) {
        $("#output").append("ping, ");
      }
      else if ((i % 5) === 0) {
        $("#output").append("pong, ")
      }
      else {
        $("#output").append(i + ", ");
      }
    }
  }

  setInterval(counter(input), 10000)

});
