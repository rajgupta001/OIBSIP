function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;
  
  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if(imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}

window.addEventListener('scroll', scrollAppear);

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

function doesUserExist(username) {
  return users.some((user) => user.username === username);
}

function isPasswordCorrect(username, password) {
  const user = users.find((user) => user.username === username);
  return user && user.password === password;
}

function showAlert(message) {
  alert(message);
}

function displaySecuredContent() {
  const securedContent = document.getElementById("secured-content");
  securedContent.style.display = "block";
}

document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!doesUserExist(username)) {
    showAlert("Account does not exist. Please register you account.");
    register();
  } else if (isPasswordCorrect(username, password)) {
    window.location.href = "Done.html";
  } else {
    showAlert("Incorrect password. Please try again.");
  }
});

function checkPasswordMatch() {
  const createPassword = document.getElementById("create-password").value;
  const confirmPassword = document.getElementById("confirm-password");
  const passwordMatchError = document.getElementById("password-match-error");

  if (createPassword !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

document.getElementById("register").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("email").value;
  const createPassword = document.getElementById("create-password").value;
  const confirmPassword = document.getElementById("confirm-password");
  const passwordMatchError = document.getElementById("password-match-error");

  if (doesUserExist(username)) {
    showAlert("Username already exists. Please choose a different one.");
  } else if (createPassword !== confirmPassword.value) {
    passwordMatchError.textContent = "Passwords do not match. Please try again.";
  } else {
    passwordMatchError.textContent = "";

    users.push({ username, password: createPassword });
    showAlert("Registration successful. You can now log in.");
    login();
  }
});