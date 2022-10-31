let btnYes = document.getElementById("btn-yes");
let btnNo = document.getElementById("btn-no");
let form = document.getElementById("dance-form");
let log = document.getElementById("log");

btnYes.addEventListener("onclick", communicateYes);
btnNo.addEventListener("onclick", communicateNo);
form.addEventListener("submit", communicateThanks);

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

function playMusic() {
  document.getElementById("audio").play();
}

playMusic();

function stopMusic() {
  document.getElementById("audio").pause();
}

stopMusic();

let trollTalk = document.getElementById("click", play());
let trollStop = document.getElementById("click", pause());

function play() {
  document.getElementById("grumble").play();
}

function pause() {
  document.getElementById("grumble").pause();
}
play();
pause();

console.log(play);

function communicateThanks(event) {
  log.textContent = `Thanks for completing, now Cheer Up!!: Your id confirmation no: ${event.timeStamp}`;
  event.preventDefault();
}

const char = document.getElementById("character");
document.addEventListener("click", jump());

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  console.log(jump);
  setTimeout(removeJump, 300);
}
function removeJump() {
  character.classList.remove("animate");
}

const block = document.getElementById("block");
function checkDead() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    alert("Game over");
  }
}

setInterval(checkDead, 10);
