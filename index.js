const navToggle = document.querySelector(".nav-toggle")
const navmenu = document.querySelector(".nav-ul_visible")
navToggle.addEventListener("click", () => {
    navmenu.classList.toggle("nav-ul_visible")
})