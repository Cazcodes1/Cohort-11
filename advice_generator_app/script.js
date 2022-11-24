const button = document.getElementById("btn");
const id = document.getElementById("id");
const adviceDisplayed = document.getElementById("statement");

button.addEventListener("click", displayId);

function displayId() {
  fetch("https://api.adviceslip.com/advice")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      id.innerHTML = data.slip.id;
      adviceDisplayed.innerHTML = data.slip.advice;
    })
    .catch(function (err) {
      return err.message;
    });
}
