export let allCurrency = [];
let currentRate = 1;
let currentCurrency = "USD";
const countryList = document.getElementById("country");
const url =
  "https://v6.exchangerate-api.com/v6/ff1d93c25b679f694ebe5a1c/latest/USD";

export async function fetchCurrency() {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

fetchCurrency().then((data) => {
  allCurrency = data.conversion_rates;
  console.log(allCurrency);
});

export function setCurrentRate(rate, currency) {
  currentRate = rate;
  currentCurrency = currency;
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
