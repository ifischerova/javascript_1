/* Cviceni Knihovny */

// 1. Zakladni validace
/*
const email = prompt('Zadejte emailovou adresu:')

const elem = document.querySelector("#msg");

if (validator.isEmail(email) === true) {
    elem.innerHTML = "E-mail v pořádku";
    elem.classList.add('msg--valid')
} else {
    elem.innerHTML = "Neplatný email";
    elem.classList.add('msg--invalid');
};
*/

/* Cviceni funkce */

// 1. Obsah elipsy

const pi = Math.PI;

const ellipseArea = (width,  height, pi) => {
    return width / 2 * height / 2 * pi
}

console.log(ellipseArea(2,2,pi));

// 2. Maximum ze dvou cisel
/*
const prvniCislo = Number(prompt("Prvni cislo:"));
const druheCislo = Number(prompt("Druhe cislo:"));


const max2 = (prvniCislo, druheCislo) => {
    if (prvniCislo === druheCislo) {
        return "Cisla se rovnaji";
    } else if (prvniCislo > druheCislo) {
        return prvniCislo;
    } else {
        return druheCislo;
    }
};

console.log(max2(prvniCislo, druheCislo));
*/

// 3. Kontrola DIČ

const inputStr = prompt('Zadejte DIC:');

const prefix = inputStr.slice(0,2);

const digits = inputStr.slice(2);

const isDIC = (inputStr, prefix, digits) => {
    if (inputStr.length < 11 || inputStr >= 12){
        return false;
    }

    if (prefix !== 'CZ') {
        return false;
    }

    if (!validator.isInt(digits)) {
        return false;
    }
    
    return true;
};

console.log(isDIC(inputStr, prefix, digits));