let btnYes = document.getElementById("btn-yes");
let btnNo = document.getElementById("btn-no");

btnYes.addEventListener("onclick", communicateYes);
btnNo.addEventListener("onclick", communicateNo);

function communicateYes() {
  document.getElementById("answer").innerText =
    "Amazing, sign up with the button below!!";
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
