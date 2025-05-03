const footer = document.querySelector("#main-footer");
const header = document.querySelector("#main-header");
const year = new Date().getFullYear();
const cartButton = document.querySelector("#addToCart");
const menuToggleButton = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

export function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function addToCart(product) {
  const cart = getLocalStorage("cart");
  const existingProduct = cart.find((item) => item.id === product.id);
  const quantityToAdd = product.quantity || 1;
  if (existingProduct) {
    existingProduct.quantity += quantityToAdd; // Increment the quantity of the existing product
    existingProduct.totalPrice += product.price * quantityToAdd; // Update the total price
  } else {
    cart.push(product);
  }
  setLocalStorage("cart", cart);
}

// cartButton.addEventListener("click", () => {
//   let cartItems = getLocalStorage("cart");
//   const productID = cartButton.getAttribute("data-id");
//   const product = cartItems.find((item) => item.id === productID);
//   if (product) {
//     product.quantity += 1; // Increment the quantity of the existing product
//     product.totalPrice += product.price; // Update the total price
//   } else {
//     const newProduct = {
//       id: productID,
//       quantity: 1,
//       totalPrice: product.price,
//     };
//     cartItems.push(newProduct);
//   }
//   setLocalStorage("cart", cartItems);
// });

export function renderHeaderFooter() {
  if (header) {
    header.innerHTML = displayHeader();
  }
  if (footer) {
    footer.innerHTML = displayFooter();
  }
}
function displayFooter() {
  const main_footer = `
    &copy | Mulubahzumu Kemmeh Sipor | 2025 - ${year}
  `;
  return main_footer;
}

function displayHeader() {
  const main_header = `<div class="profile">
        <div id="header-content2">
              <a href="../index.html"
                ><h1 class="logo">Quick<span>Deals</span></h1></a
              >
            </div>
        <a href="#"
          ><h3 class="userName">Welcome <span id="userName">User Name</span></h3></a
        >
      </div>
      <a href="/cart/index.html"
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
// document.addEventListener("DOMContentLoaded", () => {
//   menuToggleButton.addEventListener("click", () => {
//     sidebar.classList.toggle("visible");
//   });
// });
