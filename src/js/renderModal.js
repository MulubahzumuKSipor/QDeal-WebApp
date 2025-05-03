import { fetchServices } from "./service-data";

const services = document.querySelector("#services");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");

const modalCloseButton = document.querySelector("#close");
const serviceTitle = document.querySelector("#serviceTitle");
const serviceDescription = document.querySelector("#serviceDescription");
const serviceBenefits = document.querySelector("#serviceBenefits");
const servicePrice = document.querySelector("#servicePrice");
const serviceBtn = document.querySelector("#serviceBtn");

let servicesFetched = [];

async function renderServices() {
  servicesFetched = await fetchServices();
  servicesFetched.forEach((service, index) => {
    const serviceDiv = document.createElement("div");
    serviceDiv.classList.add("services_item");
    serviceDiv.innerHTML = `
    <h3>${service.name}</h3>
    <p>${service.shortDescription}</p>
    <button onclick="openModal(${index})">Learn More</button>
  `;
    services.appendChild(serviceDiv);
  });
}

export function openModal(serviceIndex) {
  const service = servicesFetched[serviceIndex];
  serviceTitle.textContent = service.name;
  serviceDescription.textContent = service.description;

  serviceBenefits.innerHTML = "";
  service.benefits.forEach((benefit) => {
    const li = document.createElement("li");
    li.textContent = benefit;
    serviceBenefits.appendChild(li);
  });

  servicePrice.innerHTML = "";
  service.pricing.forEach((price) => {
    servicePrice.innerHTML += `<p>${price.tier}: $${price.price}</p>`;
  });
  serviceBtn.setAttribute("href", service.url);

  modal.classList.remove("hidden");
}

window.openModal = openModal;

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.add("hidden");
  }
});

renderServices();
