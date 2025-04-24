import { getParam } from "./utils.mjs";
import { fetchProducts } from "./product-data.mjs";

function productDetailsTemplate(product) {
  const brandDisplay = product.brand?.trim()
    ? `<h2 class="brand">${product.brand}</h2>`
    : "";
  return `
    <section class="product-detail"> <h3>${brandDisplay}</h3>
        <h2 class="divider">${product.title}</h2>
        <img
          class="divider"
          src="${product.images[0]}"
          alt="${product.title}"
          loading="lazy"
        />
        <p class="product-card__price">Price: $${product.price}</p>
        <p class="product__rating"> Ratting ${product.rating}/5</p>
        <p class="product__description">
        ${product.description}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${product.id}" class="button">Add to Cart</button>
        </div></section>`;
}

const productID = getParam("id");
console.log(productID);

fetch(`https://dummyjson.com/products/${productID}`)
  .then((response) => response.json())
  .then((product) => {
    const container = document.querySelector("#product-details");
    container.innerHTML = productDetailsTemplate(product);
  })
  .catch((error) => {
    console.error("Failed to fetch product:", error);
    document.querySelector(
      "#product-details"
    ).innerHTML = `<p>Product not found.</p>`;
  });
