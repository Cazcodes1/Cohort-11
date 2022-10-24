function calcBMI() {
  let bmi = null;
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  result = document.getElementById("result");

  height = height / 100;
  bmi = weight / (height * height);
  bmi = Math.round(bmi * 100) / 100;
  result.innerHTML = bmi;
}
