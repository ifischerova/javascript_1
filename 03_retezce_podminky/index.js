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