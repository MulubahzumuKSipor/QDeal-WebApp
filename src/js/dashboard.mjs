import { fetchProducts } from "./product-list.mjs";


const dashStats = document.querySelector('#stats');
const dashRates = document.querySelector('#rates');
const dashTopics = document.querySelector('#interest');
const nameList = document.querySelector('#category');
const dashFilter = document.querySelector('#filter');

let amountActive = 25
let totalConnect = 100

let totalProducts = 0;

// Rates variables
let startingRate = 20; 
let currentRate = 70;
let rateGain = currentRate - startingRate;

let previousTimeSpent = 0; // Initialize previous time spent to 0

let startTime = Date.now();  // Capture the start time when the page loads

fetchProducts().then(data => {
  totalProducts = data.products.length;
  console.log(data);
});

window.addEventListener('beforeunload', function() {
  let timeSpent = Date.now() - startTime;  // Calculate time spent
  localStorage.setItem('timeSpent', timeSpent);  // Store time spent in localStorage
});

// When the user visits again, show them how much time they spent previously
window.addEventListener('load', function() {
  let storedTimeSpent = localStorage.getItem('timeSpent');
  if (storedTimeSpent) {
    previousTimeSpent = parseInt(storedTimeSpent);  
  }

  renderDashboard(); 
});

async function renderDashboard(){
  dashTopics.innerHTML = displayTopics();
  dashStats.innerHTML = displayStats();
  dashRates.innerHTML = displayRates();
  await displayCategory();
  displayPriceRange();

}

function displayStats(){
  const stats = `
  <div class="card">Active Users<br /><span>${amountActive}/${totalConnect}</span></div>
        <div class="card">Products Bought<br /><span>${totalProducts}</span></div>
        <div class="card">Last Session Length<br /><span>${(previousTimeSpent/1000).toFixed(2)} seconds</span></div>
        `;
  return stats;
}

function displayRates(){
  const stats = `
  <div class="card">Starting Sales Rate<br /><span>${startingRate}%</span></div>
        <div class="card">Current Sales Rate<br /><span>${currentRate}%</span></div>
        <div class="card">Sales Rate Gain<br /><span>${rateGain}%</span></div>
        `;
  return stats;
}

function displayTopics(){
  const topics = `
  <div class="column">
          <h2>Most Interested</h2>
          <div class="list-item">
            Covid Protocols <span class="badge">95% Correct</span>
          </div>
          <div class="list-item">
            Cyber Security Basics <span class="badge">92% Correct</span>
          </div>
          <div class="list-item">
            Social Media Policies <span class="badge">89% Correct</span>
          </div>
        </div>
        <div class="column">
          <h2>Least Interested</h2>
          <div class="list-item">
            Food Safety <span class="badge red">74% Correct</span>
          </div>
          <div class="list-item">
            Compliance Basics <span class="badge red">52% Correct</span>
          </div>
          <div class="list-item">
            Company Networking <span class="badge red">36% Correct</span>
          </div>
        </div>
        `;
  return topics;
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

  data.products.forEach(item => {
    if (!uniqueCategories.has(item.category)) {
      uniqueCategories.add(item.category);

      const option = document.createElement('option');
      option.textContent = item.category;
      option.value = item.category;
      nameList.appendChild(option);
    }
  });
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


renderDashboard();

