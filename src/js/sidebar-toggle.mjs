document.addEventListener("DOMContentLoaded", () => {
  const menuToggleButton = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("visible");
  });
});
