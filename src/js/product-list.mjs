let currentPage = 1;
let itemsPerPage = 8;
let allProducts = [];

const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const priceRange = document.getElementById('priceRange');
const categorySelect = document.getElementById('category');
const nameList = document.querySelector('#category');

export let totalProducts = [];

const url = 'https://dummyjson.com/products?limit=200&skip=0'; 

export async function fetchProducts() {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json();
  }
  
  fetchProducts().then(data => {
    allProducts = data.products;
    console.log(data);
    console.log(data.products.category);
    renderProducts(data.products);
    renderPagination();
    productsPerPage();
});

fetchProducts().then(data => {
    totalProducts = data.products;
    console.log(totalProducts);
  
    totalProducts.forEach(item => {
      console.log(item.category);
    });
});

async function init() {
    const data = await fetchProducts();
    allProducts = data.products;
    totalProducts = data.products;

    displayPriceRange();
    await displayCategory();

    productsPerPage(); // initial load
    renderPagination(); 
}
  

export function renderProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" class="product-image" loading="lazy" />
        <p>Price: $${product.price}</p>
        <h2>${product.title}</h2>
        
        `;
        
        productList.appendChild(productItem);
    });
}


export function productsPerPage( filteredProducts = allProducts) {

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paiginatedproducts = filteredProducts.slice(start, end);
    renderProducts(paiginatedproducts);
}

export function renderPagination(filteredProducts = allProducts) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = ''; // Clear existing pagination

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
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
            productsPerPage(filteredProducts);
            renderPagination(filteredProducts);
        });
        pagination.appendChild(pageButton);
        lastRendered = page;  
    });
}

async function displayCategory() {
    nameList.innerHTML = ''; 
    const data = await fetchProducts();
    data.products.sort();
  
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select Category';
    defaultOption.value = '';
    nameList.appendChild(defaultOption);
  
    const uniqueCategories = new Set();
  
    totalProducts.forEach(item => {
      if (!uniqueCategories.has(item.category)) {
        uniqueCategories.add(item.category);
  
        const option = document.createElement('option');
        option.textContent = item.category;
        console.log(item.category)
        option.value = item.category;
        nameList.appendChild(option);
      }
    });  
}
  
function filterAndDisplayProducts() {
    const keyword = searchInput.value.trim().toLowerCase();
    const selectedCategory = categorySelect.value;
    const selectedRange = priceRange.value;
  
    currentPage = 1; 
  
    const filtered = totalProducts.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(keyword);
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = isInPriceRange(product.price, selectedRange);
  
      return matchesSearch && matchesCategory && matchesPrice;})
      
      renderProducts(filtered);
      productsPerPage(filtered);
      renderPagination(filtered); 
      console.log(filtered);
}
  
function displayPriceRange(){
    const priceSelect = document.getElementById('priceRange');
    priceSelect.innerHTML = ''; // Clear any existing options
  
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select Price Range';
    defaultOption.value = '';
    priceSelect.appendChild(defaultOption);
  
    const priceRanges = [
      '$0 - $10',
      '$10 - $100',
      '$100 - $1000',
      '$1000 - $10000',
      '$10000+'
    ];
  
    priceRanges.forEach(range => {
      const option = document.createElement('option');
      option.textContent = range;
      option.value = range;
      priceSelect.appendChild(option);
    });
}
  
function isInPriceRange(price, range) {
    if (!range) return true; // No range selected, include all products
  
    const [min, max] = range.split(' - ').map(val => {
      if (val === '$10000+') return Infinity;
      return parseFloat(val.replace('$', ''));
    });
  
    return price >= min && (max ? price <= max : true);
}


  
  
searchButton.addEventListener('click', filterAndDisplayProducts);

searchInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') filterAndDisplayProducts();
});
categorySelect.addEventListener('change', filterAndDisplayProducts);
priceRange.addEventListener('change', filterAndDisplayProducts);


init();

