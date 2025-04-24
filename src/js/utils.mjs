const footer = document.querySelector("#main-footer");
const year = new Date().getFullYear();

export function renderFooter() {
  footer.innerHTML = displayFooter();
}
function displayFooter() {
  const main_footer = `
    &copy | Mulubahzumu Kemmeh Sipor | 2025 - ${year}
  `;
  return main_footer;
}

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}
