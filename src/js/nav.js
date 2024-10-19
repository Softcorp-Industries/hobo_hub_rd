//  alert("hello world");

const navMenu = document.querySelector(".navMenu");
const navList = document.querySelector(".navList");
const darkMode = document.getElementById("darkMode")
let navMenu_open = false;

document.addEventListener('DOMContentLoaded', () => {
  navMenu.addEventListener('click', () => {
    if (!navMenu_open) {
      navMenu.classList.add("navOpen");
      navList.classList.add("navOpen");
      darkMode.classList.add("darkModeShow");
      navMenu_open = true;
    } else {
      navMenu.classList.remove("navOpen");
      navList.classList.remove("navOpen");
      darkMode.classList.remove("darkModeShow");
      navMenu_open = false;
    }
  })
})

