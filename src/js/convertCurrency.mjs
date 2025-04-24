import { fetchCurrency } from "./currency-data.mjs";
import { productsPerPage, allProducts } from "./product-list.mjs";

export let allCurrency = [];
let currentRate = 1;
let currentCurrency = "USD";
const countryList = document.getElementById("country");

export function setCurrentRate(rate, currency) {
  currentRate = rate;
  currentCurrency = currency;
}

export async function updateCurrentRate(rate, currency) {
  const data = await fetchCurrency();
  try {
    if (data && data.conversion_rates) {
      allCurrency = data.conversion_rates;
      currentRate = data.conversion_rates[currency];
      currentCurrency = currency;
      setCurrentRate(currentRate, currentCurrency);
      productsPerPage(allProducts);
    }
  } catch (error) {
    console.error("Failed to update currency rates:", error);
  }
}

export async function populateCurrencyOptions() {
  countryList.innerHTML = "";
  const data = await fetchCurrency();

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select a currency";
  defaultOption.value = "";
  countryList.appendChild(defaultOption);

  const conversionRates = data.conversion_rates;

  Object.keys(conversionRates).forEach((currencyCode) => {
    const option = document.createElement("option");
    option.textContent = currencyCode;
    option.value = currencyCode;
    countryList.appendChild(option);
  });
}

export function getCurrentRate() {
  return currentRate;
}

export function getCurrentCurrency() {
  return currentCurrency;
}
populateCurrencyOptions();
