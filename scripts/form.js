const products = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];
//======================= OPTIONS
function populateSelect(products) {
  // Seleciona o elemento <select> pelo id
  const selectElement = document.getElementById("productName");

  products.forEach(product => {
    let option = document.createElement("option");
    option.textContent = product.name;
    option.value = product.id;
    selectElement.appendChild(option);
  });
}

window.onload = function () {
  populateSelect(products)
}

document.getElementById('productReviewForm').addEventListener('submit', function(event) {
  // Impede a submissão padrão do formulário
  event.preventDefault();

  // Adiciona um parâmetro ao redirecionar
  const actionUrl = this.action + '?newReview=true';
  window.location.href = actionUrl;
});

//================================== LAST MODIFIED
//======YEAR
document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `<span class="currentYear">
${today.getFullYear()} </span>`;
//==========DATA AND TIME
document.querySelector("#lastModified").innerHTML = `<span class="lastModified">
Last Modification: ${document.lastModified}</span>`;