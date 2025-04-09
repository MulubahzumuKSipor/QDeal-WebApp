let currentPage = 1;
let itemsPerPage = 7;
let allProducts = [];

const url = 'https://dummyjson.com/products?limit=200&skip=0'; 

export async function fetchProducts() {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json();
  }
  
  fetchProducts().then(data => {
    allProducts = data.products;
    console.log(data);
    renderProducts(data.products);
    renderPagination();
    productsPerPage();
  });

export function renderProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <img src="${product.thumbnail}" alt="${product.title}">
        `;
        productList.appendChild(productItem);
    });
}

function productsPerPage() {

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paiginatedproducts = allProducts.slice(start, end);
    renderProducts(paiginatedproducts);
}

export function renderPagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = ''; // Clear existing pagination

    const totalPages = Math.ceil(allProducts.length / itemsPerPage);
    const pageButtons = new Set();

    pageButtons.add(1);
    pageButtons.add(totalPages);

    pageButtons.add(currentPage);
    if (currentPage + 1 < totalPages) pageButtons.add(currentPage + 1);
    if (currentPage + 2 < totalPages) pageButtons.add(currentPage + 2);

    if (currentPage - 1 > 1) pageButtons.add(currentPage - 1);

    const sortedPages = [...pageButtons].sort((a, b) => a - b);

    let lastRendered = 0;

    sortedPages.forEach((page) => { 
        if (page - lastRendered > 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.className = 'ellipsis';
            pagination.appendChild(ellipsis);
        }
        const pageButton = document.createElement('button');
        pageButton.textContent = page === currentPage ? `${page}` : page;  
        pageButton.className = 'page-button';
        if (page === currentPage) {  
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            currentPage = page;  
            productsPerPage();
            renderPagination();
        });
        pagination.appendChild(pageButton);
        lastRendered = page;  
    });
}
