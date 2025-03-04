// Close the form and back to index.ntml
const closeButton = document.querySelector(".form__close");
if (closeButton) {
  closeButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

// Add the Event Listener for Login Button and go to registration.html
const loginButton = document.getElementById("loginButton");
if (loginButton) {
  loginButton.addEventListener("click", function () {
    window.location.href = "registration.html";
  });
}
