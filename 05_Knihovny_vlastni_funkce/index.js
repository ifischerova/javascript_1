/* Cviceni Knihovny */

// 1. Zakladni validace
const email = prompt('Zadejte emailovou adresu:')

const elem = document.querySelector("#msg");

if (validator.isEmail(email) === true) {
    elem.innerHTML = "E-mail v pořádku";
    elem.classList.add('msg--valid')
} else {
    elem.innerHTML = "Neplatný email";
    elem.classList.add('msg--invalid');
};