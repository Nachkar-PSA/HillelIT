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

// Add the Event Listener for hover active class to the menu items
document.querySelectorAll(".list__item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(".list__item")
      .forEach((el) => el.classList.remove("active")); // Remove active class from all items
    item.classList.add("active"); // Add active class to the hovered item
  });

  // item.addEventListener("mouseleave", () => {
  //   item.classList.remove("active"); // Remove active class when mouse leaves
  // });
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".list__item")
      .forEach((el) => el.classList.remove("active")); // Reset active
    item.classList.add("active"); // Fixed active class on click
  });
});

document.querySelectorAll(".list__by-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(".list__by-item")
      .forEach((el) => el.classList.remove("active")); // Remove active class from all items
    item.classList.add("active"); // Add active class to the hovered item
  });

  item.addEventListener("click", () => {
    document
      .querySelectorAll(".list__by-item")
      .forEach((el) => el.classList.remove("active")); // Reset active
    item.classList.add("active"); // Fixed active class on click
  });
});

// Add the Event Listener for hover active class to the menu items//
document.querySelectorAll(".menu__item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(".menu__item")
      .forEach((el) => el.classList.remove("active")); // Remove active class from all items
    item.classList.add("active"); // Add active class to the hovered item
  });

  item.addEventListener("click", () => {
    document
      .querySelectorAll(".menu__item")
      .forEach((el) => el.classList.remove("active")); // Reset active
    item.classList.add("active"); // Fixed active class on click
  });
});
