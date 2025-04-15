
export function setClick(selector, callback) {
qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
});
qs(selector).addEventListener("click", callback);
}

export async function loadFooter() {
const footerTemplate = await loadTemplate("../partials/footer.html");
const footerElement = document.querySelector("#footer");
renderWithTemplate(footerTemplate, footerElement);
}

function currencyConverter(price) {
    
    
}
  