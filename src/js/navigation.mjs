const hamburger = document.getElementById("hamburger");
const menuContainer = document.getElementById("menu-container");
const toggleBtn = document.querySelector("#menu-toggle");
const sidebar = document.querySelector(".sidebar");
const body = document.body;

hamburger.addEventListener("click", () => {
  menuContainer.style.display =
    menuContainer.style.display === "flex" ? "none" : "flex";
  menuContainer.style.flexDirection = "column";
});

toggleBtn.addEventListener("click", () => {
  console.log("Toggle button clicked");
  sidebar.classList.toggle("show");
  body.classList.toggle("sidebar-open");
});
