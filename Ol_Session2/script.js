const element = document.getElementById("box");
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.personAge = age;
  this.eyeColor = eye;
}

function createNewElement(event) {
  event.preventDefault();

  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const personAge = document.getElementById("age").value;
  const eyeColor = document.getElementById("eye").value;
  const newPerson = new Person(firstName, lastName, personAge, eyeColor);

  element.innerHTML = `<p>${newPerson.firstName}</p>
    <p>${newPerson.lastName}</p>
    <p>${newPerson.personAge}</p>
    <p>${newPerson.eyeColor}</p>`;
  console.log(createNewElement);
}
