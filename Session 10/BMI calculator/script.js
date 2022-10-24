let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let calculateButton = document.getElementById("calculate");
let result = document.getElementById("result");
let statement = document.getElementById("result-statement");
var BMI, height, weight;

function calcBMI() {
  height = heightInput.value;
  weight = weightInput.value;
  BMI = weight / height ** 2;
  result.innerText = BMI;

  if (BMI < 18.5) {
    statement.innerText = "Your BMI falls within the underweight range";
  } else if (BMI > 18.5 && BMI < 24.9) {
    statement.innerText =
      "Your BMI falls within the normal or healthy weight range";
  } else if (BMI > 25 && BMI < 29.9) {
    statement.innerText = "Your BMI falls within the overweight range";
  } else {
    statement.innerText = "Your BMI falls within the obese range";
  }
}
