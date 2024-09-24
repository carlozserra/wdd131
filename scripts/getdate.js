
//year 
document.querySelector("#currentYear");

const today = new Date();

currentYear.innerHTML = `<span class="currentYear">
${today.getFullYear()} </span>`;

//data and time 

document.querySelector("#lastModified").innerHTML = `<span class="lastModified">
Last Modification: ${document.lastModified}</span>`;