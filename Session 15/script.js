let equalPressed = 0;
//Refer all buttons excluding C
let buttonInput = document.querySelectorAll(".input-button");
//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

//Access each class using forEach
buttonInput.forEach((calcButton) => {
  calcButton.addEventListener("click", () => {
    if (equalPressed == 1) {
      input.value = "";
      equalPressed = 0;
    }
    //display value of each button
    input.value += calcButton.value;
  });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
  equalPressed = 1;
  let inpVal = input.value;
  let solution = eval(inpVal);
  //True for natural numbers
  //false for decimals
  if (Number.isInteger(solution)) {
    input.value = solution;
  } else {
    input.value = solution.toFixed(2);
  }
  //Clear Whole Input
  clear.addEventListener("click", () => {
    input.value = "";
  });
});
