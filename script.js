function genshape() {
  
  let userInput = prompt("Please enter a number");
  while (isNaN(userInput) || userInput === "") {
    userInput = prompt("Invalid input. Please enter a valid number:");
  }

  let number = parseInt(userInput);
  let output = "Number inputted: " + number + "<br> <br>";
  document.write(output)

  if (number % 2 == 0) {
    i = number;

    while (i >= 1) {
      for (j=0; j < i; j++) {
        document.write(i + " ");
      }
      document.write("<br>");
      i--;
    }
  }

  else {
    i = number;

    while (i >= 1) {
      for (j=0; j < number; j++) {
        document.write(i + " ");
      }
      document.write("<br>");
      i--;
    }
  }
}