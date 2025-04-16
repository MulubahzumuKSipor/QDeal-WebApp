const menuToggleButton = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Function to toggle sidebar visibility
menuToggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});
