const toggle = document.querySelector(".toggleId");
const menu = document.querySelector("ul");

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.length > 1
    ? menu.classList.remove("displayMenu")
    : menu.classList.add("displayMenu");
});
