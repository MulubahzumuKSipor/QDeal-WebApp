export async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}
  
export function renderWithTemplate(template, parentElement) {
parentElement.innerHTML = template;
}

export async function loadFooter() {
const footerTemplate = await loadTemplate("../partials/footer.html");
const footerElement = document.querySelector("#footer");
renderWithTemplate(footerTemplate, footerElement);
}
  