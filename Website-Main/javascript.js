let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".ulNavBar");
  if (window.scrollY > lastScrollY && window.scrollY > 50) {

    navbar.classList.add("scrolled");
  } else if (window.scrollY < lastScrollY) {

    navbar.classList.remove("scrolled");
  }
  
  lastScrollY = window.scrollY;
});
