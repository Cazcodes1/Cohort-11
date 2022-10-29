let btnYes = document.getElementById("btn-yes");
let btnNo = document.getElementById("btn-no");

btnYes.addEventListener("onclick", communicateYes);
btnNo.addEventListener("onclick", communicateNo);

function communicateYes() {
  document.getElementById("answer").innerText = "Amazing, let's get started!!";
  document.getElementById("stay-btn").style.display = "block, center";
  document.getElementById("leave-btn").style.display = "none";
  document.getElementById("answer2").innerText = "";
}

function communicateNo() {
  document.getElementById("answer2").innerText =
    "Go away your miserable little troll, your'e barred!!";
  document.getElementById("leave-btn").style.display = "block, center";
  document.getElementById;
  document.getElementById("stay-btn").style.display = "none";
  document.getElementById("answer").innerText = "";
}

let btnOn = document.getElementById("click", playMusic());
let btnOff = document.getElementById("click", pauseMusic());
let volumeChange = document.getElementById("volume-bar");

let volume = 5;

function playMusic() {
  document.getElementById("audio").play();
}

playMusic();

function stopMusic() {
  document.getElementById("audio").pause();
}

stopMusic();

function changeVolume() {
  volumeChange.addEventListener("input", (e) => {
    audio.volume = e.volumeChange.value / 10;
  });
}

changeVolume();
