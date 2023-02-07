/* Prace s retezci */

// 1. Vlastnosti a metody

const title = 'Posledni Mohykan';

console.log(title.length);
console.log(title.toUpperCase());
console.log(title.slice(0, 5));
console.log(title.slice(title.length - 5, title.length));

// 2. Emaily

 const email = prompt('Zadejte emailovou adresu:');

const atIndex = email.indexOf('@');
const userName = email.slice(0, atIndex);
const domain = email.slice(atIndex);


const parsedEmail = {
    userName: userName,
    domain: domain,
}

document.body.innerHTML = `
    <p>uzivatelske jmeno je ${parsedEmail.userName} a domena: ${parsedEmail.domain}</p>
`

// 3. Dorucovani

const street = prompt('Zadejte ulici:');
const streetNumber = Number(prompt('Zadejte cislo popisne:'));
const city = prompt('Zadejte mesto:');
const postalCode = Number(prompt('Zadejte PSC:'));

const address =
    `<div class='address'>
        <p>${street} ${streetNumber}</p>
        <p>${postalCode} ${city}</p>
    </div>
    `   

document.body.innerHTML = address; 


/* Podminky */


// 1. registrace na ockovani

const jmeno = prompt("Zadejte jmeno:");
const vek = Number(prompt("Kolik vam je?"));
const heslo = prompt("Zadejte heslo:");

if (vek >= 65) {
    document.body.innerHTML += "Vas vek je v poradku, pokracujte.<br>";
} else {
    document.body.innerHTML +="Sorry, na ockovani si jeste musis pockat.<br>";
}

if (heslo.length < 8) {
    document.body.innerHTML += "Koukej si vymyslet poradne dlouhy heslo!<br>";
}


// 2. Cena vstupenky

const age = Number(prompt("Kolik je ti let?"));

let plnaCena = 12;

if (age <= 6) {
    plnaCena = 0 * plnaCena;
    document.body.innerHTML = `"Divadlo te bude stat ${plnaCena} euro."`;
} else if (age <= 26) {
    plnaCena = 0.65 * plnaCena;
    document.body.innerHTML = `"Divadlo te bude stat ${plnaCena} euro."`;
} else if (age >= 27 && age <= 64) {
    document.body.innerHTML = `"Divadlo te bude stat ${plnaCena} euro."`;
} else  {
    plnaCena = 0.50 * plnaCena;
    document.body.innerHTML = `"Divadlo te bude stat ${plnaCena} euro."`;
};