import { loadFooter } from "./utils.mjs";

loadFooter().then(() => {
  document.getElementById("year").textContent = new Date().getFullYear();
});