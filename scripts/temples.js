//================================== YEAR
document.querySelector("#currentYear");

const today = new Date();

currentYear.innerHTML = `<span class="currentYear">
${today.getFullYear()} </span>`;

//=========================== DATA AND TIME

document.querySelector("#lastModified").innerHTML = `<span class="lastModified">
Last Modification: ${document.lastModified}</span>`;

//=========================== MENU 

const hamButton = document.querySelector('#btmenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});