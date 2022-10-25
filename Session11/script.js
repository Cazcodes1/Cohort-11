let btn = document.getElementById("btn");
let txt = document.getElementById("txt");
let ul = document.getElementById("ul");

let list = [];

btn.addEventListener("click", addValue);

function addValue() {
  let item = txt.value;

  if (list.includes(item)) {
    alert("This item is already on the list!");
  } else {
    list.push(item);
    {
      alert("Your item has been added!");
    }
  }
  txt.value = "";

  let output = "";
  for (i = 0; i < list.length; i++) {
    output += "<li>" + list[i] + "</li>";
  }
  ul.innerHTML = output;
}
