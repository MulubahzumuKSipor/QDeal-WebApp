function convertToJSON(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error("Failed to fetch products");
}

const url = "https://dummyjson.com/products?limit=200&skip=0";
export async function fetchProducts() {
  return fetch(url)
    .then((res) => convertToJSON(res))
    .then((data) => {
      console.log(data);
      return data;
    });
}

export async function fetchProductById(id) {
  const productUrl = await fetchProducts();
  const product = productUrl.products.find((item) => item.id === id);
  return product;
}
