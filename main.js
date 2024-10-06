// DOM elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu function
const toggleMenu = (isOpen) => {
  navLinks.classList.toggle("open", isOpen);
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
};

// Event listeners
menuBtn.addEventListener("click", () => toggleMenu(!navLinks.classList.contains("open")));
navLinks.addEventListener("click", () => toggleMenu(false));

// ScrollReveal options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal animations
const sr = ScrollReveal();

sr.reveal(".header__container h1", scrollRevealOption);
sr.reveal(".header__container p", { ...scrollRevealOption, delay: 500 });
sr.reveal(".header__container form", { ...scrollRevealOption, delay: 1000 });
sr.reveal(".feature__card", { duration: 1000, interval: 500 });
sr.reveal(".destination__card, .package__card", { ...scrollRevealOption, interval: 500 });

// Swiper initialization
new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});