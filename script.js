// Define variables
const sidebarBtn = document.querySelector(".btn");
const sidebar = document.querySelector(".sidebar");

const featureBtn = document.querySelector(".feat-btn");
const featureSubMenu = document.querySelector(".feat-show");
const featureArrow = document.querySelector(".feat-arrow");

const servicesBtn = document.querySelector(".serv-btn");
const servicesSubMenu = document.querySelector(".serv-show");
const servicesArrow = document.querySelector(".serv-arrow");

const menus = document.querySelectorAll(".sidebar ul li");

// Sidebar toggle
sidebarBtn.addEventListener("click", function () {
  this.classList.toggle("click");
  sidebar.classList.toggle("show");
});

// Feature submenu toggle
featureBtn.addEventListener("click", function () {
  featureSubMenu.classList.toggle("show");
  featureArrow.classList.toggle("rotate");
});

// Services submenu toggle
servicesBtn.addEventListener("click", function () {
  servicesSubMenu.classList.toggle("show");
  servicesArrow.classList.toggle("rotate");
});

// Menu activation toggle
for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function () {
    // Remove active class from all menus at first
    for (let i = 0; i < menus.length; i++) {
      menus[i].classList.remove("active");
    }
    this.classList.toggle("active");
  });
}
