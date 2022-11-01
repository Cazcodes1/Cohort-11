//Dom Elements

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//Options

const showAmPm = true;

//Show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM or PM

  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr format

  hour = hour % 12 || 12;

  //Output time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

//Add zero

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Background and Greeting

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    //morning
    document.body.style.backgroundImage = "url('./images/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "#ffe7eb";
  } else {
    //evening
    document.body.style.backgroundImage = "url('./images/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
    console.log(setBgGreet);
  }
}

// Get name

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get focus

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
// Run

showTime();
setBgGreet();
getName();
getFocus();
