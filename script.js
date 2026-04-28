const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

function openMenu() {
  nav.style.right = "0";
  overlay.style.display = "block";
}

function closeMenu() {
  nav.style.right = "-300px";
  overlay.style.display = "none";
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
