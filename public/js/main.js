const toggleThemeBtns = document.querySelectorAll(".toggle-theme");


toggleThemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})




const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const overlay = document.querySelector(".overlay");

navOpenBtn.addEventListener("click", () => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay-visible");
})


function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay-visible");
}

navCloseBtn.addEventListener("click", closeNav)
overlay.addEventListener("click", closeNav)