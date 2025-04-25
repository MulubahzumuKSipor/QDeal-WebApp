const footer = document.querySelector("#main-footer");
const header = document.querySelector("#main-header");
const year = new Date().getFullYear();

export function renderHeaderFooter() {
  footer.innerHTML = displayFooter();
  header.innerHTML = displayHeader();
}
function displayFooter() {
  const main_footer = `
    &copy | Mulubahzumu Kemmeh Sipor | 2025 - ${year}
  `;
  return main_footer;
}

function displayHeader() {
  const main_header = `<div class="header-content">
        <a href="../index.html"
          ><h1 class="logo">Quick<span>Deals</span></h1></a
        >
      </div>
      <a href="../cart/index.html"
        ><img src="../images/cart.svg" alt="Cart" id="cart"
      /></a>`;
  return main_header;
}

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function smartGoBack(fallbackURL = "../product-page/index.html") {
  // Check if the referrer is not the current page
  const referrer = document.referrer;
  const currentURL = window.location.href;
  if (referrer && referrer !== currentURL) {
    window.history.back();
  } else {
    window.location.href = fallbackURL;
  }
}
document.addEventListener("click", () => {
  const backButton = document.querySelector("#backButton");
  if (backButton) {
    backButton.addEventListener("click", () => smartGoBack());
  }
});
