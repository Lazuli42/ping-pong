$("#form").submit(function(event) {
  event.preventDefault();
  $("#output").empty();

  var input = parseInt($("input#numberInput").val());
  console.log(input)
  var numbers = [];

  for (i=1; i <= input; i++) {
    if ((i % 15) === 0) {
      numbers.push("Ping Pong");
    }
    else if ((i % 3) === 0) {
      numbers.push("ping");
    }
    else if ((i % 5) === 0) {
      numbers.push("pong")
    }
    else {
      numbers.push(i);
    }
  }
  console.log(numbers);

  var i = 0

  var printing = setInterval(function() {
    $("#bigNumber").text(numbers[i])
    $("#output").append(numbers[i] + ", ")
    i++
    if (i >= numbers.length) {
      clearInterval(printing)
    }
  }, (5000 / numbers.length))

});
