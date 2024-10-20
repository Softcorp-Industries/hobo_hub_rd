//  alert("dark mode working");

const darkModeBtn = document.getElementById("darkMode-btn");
const darkModeBg = document.getElementById('darkModeBg');

let darkModeSt2 = localStorage.getItem("darkModeSt2");

let darkModeOn = false;

const enableDarkMode = () => {
  document.body.setAttribute("data-darkMode", "darkMode");
  darkModeBtn.style.backgroundImage = "url(/assets/icons/darkMode-day.webp)"
  darkModeBtn.classList.add("darkModeAnim");
  darkModeBtn.classList.remove("darkModeAnimRev");
  darkModeBtn.parentElement.nextElementSibling.innerHTML = "Light Mode";
  darkModeBg.style.backgroundImage = "none";
  darkModeBg.classList.add("darkModeBg");
  localStorage.setItem("darkModeSt2", "enabled");
};

const disableDarkMode = () => {
  document.body.setAttribute("data-darkMode", "light");
  darkModeBtn.style.backgroundImage = "url(/assets/icons/darkMode-icon.png)"
  darkModeBtn.classList.add("darkModeAnimRev");
  darkModeBtn.classList.remove("darkModeAnim");
  darkModeBtn.parentElement.nextElementSibling.innerHTML = "Dark Mode";
  darkModeBg.style.backgroundImage = "url(/assets/blogImages/clouds_72634.jpg)"
  darkModeBg.classList.remove("darkModeBg");
  localStorage.setItem("darkModeSt2", "disabled");
};

if (darkModeSt2 === "enabled") {
  enableDarkMode();
}

function darkModeActive() {
  document.addEventListener("DOMContentLoaded", () => {
    darkModeBtn.addEventListener("click", () => {
      darkModeSt2 = localStorage.getItem("darkModeSt2");
      if (darkModeSt2 !== "enabled" && !darkModeOn) {

        enableDarkMode();
        trans();
        darkModeOn = true;
      } else {
        disableDarkMode();
        trans();
        darkModeOn = false;
      }
    });
  });
}

darkModeActive();

let trans = () => {
  document.body.classList.add("transition");
  window.setTimeout(() => {
    document.body.classList.remove("transition");
  }, 1000);
};