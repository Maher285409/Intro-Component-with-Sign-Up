const form = document.getElementById("signup-form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInput(firstName, "First Name cannot be empty");
  checkInput(lastName, "Last Name cannot be empty");
  checkEmail(email);
  checkInput(password, "Password cannot be empty");
});

function checkInput(input, message) {
  const error = input.nextElementSibling;

  if (input.value.trim() === "") {
    error.innerText = message;
    error.style.display = "block";
    input.classList.add("error-border");
  } else {
    error.style.display = "none";
    input.classList.remove("error-border");
  }
}

function checkEmail(input) {
  const error = input.nextElementSibling;
  const emailValue = input.value.trim();

  if (emailValue === "" || !emailValue.includes("@")) {
    error.style.display = "block";
    input.classList.add("error-border");
  } else {
    error.style.display = "none";
    input.classList.remove("error-border");
  }
}
