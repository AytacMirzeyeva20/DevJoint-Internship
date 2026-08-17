const menubar = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-list");
const nav = document.querySelector(".nav");

menubar.addEventListener("click", function () {
    menu.classList.toggle("nav__list--active");
    nav.classList.toggle("nav--menu-open");

    const expanded = menu.classList.contains("nav__list--active");
    menubar.setAttribute("aria-expanded", expanded);
});
