const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("nacimiento");
const resultEl = document.getElementById("resultado");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Por favor ingrese su fecha de nacimiento");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Su edad es ${age} ${age > 1 ? "años" : "año"}.`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);
