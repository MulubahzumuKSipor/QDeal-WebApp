import { renderHeaderFooter } from "./utils.mjs";

renderHeaderFooter();

window.addEventListener("scroll", function () {
  const sidebar = document.getElementById("sidebar");

  // Increase sidebar height when page is scrolled down
  if (window.scrollY > 100) {
    sidebar.style.height = "100vh"; // Sidebar height when scrolling down
    sidebar.style.marginTop = "50px";
  } else {
    sidebar.style.height = "75vh"; // Sidebar height when scrolling up (shrinks from the top)
  }
});
