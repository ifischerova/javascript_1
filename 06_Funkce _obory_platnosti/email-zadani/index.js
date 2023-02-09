/* Procvicovani funkci */

// 1. E-mail, pozdravy
// 2. Email, telo
console.log('funguju');

//const jmeno = prompt('Hod mi sem jmeno:')


const goodbye = (name) => {
    return "Nashledanou" + name;
};

const fillSubject = (subject) => {
    document.querySelector('.email__subject').textContent = `${subject}`;
}


const fillBody = (body, name) => {
    bodyElm = document.querySelector('.email__body');
    bodyElm.innerHTML = body;
    const closingElm = document.querySelector('email__closing');
    closingElm.textContent = goodbye(name)
}

// 3 Prevod meny

const convertToCZK = (amount, currency) => {
    let convRate;

    if (currency === 'EUR') {
        convRate = 24.47;
    } else if ( currency === 'GBP') {
        convRate = 28.09;
    } else if ( currency === 'USD') {
        convRate = 24.81;
    } else if ( currency === 'BTC') {
        convRate = 478637;
    } else {
        return null
    }
    
    return Math.round(amount * convRate);

};

console.log(convertToCZK(35, 'j'));

/* Doporucene ulozky na doma */ 

const wage = Number(prompt());

const hours = Number(prompt());

const days = Number(prompt());

const salary = (wage, hours, days) => {
    return Math.round(wage * hours * days);
}

const amount = salary(wage, hours, days);

const taxed = (amount, tax) => {

    return 'Po zdaneni dostanes '+ amount * ((100 - tax) / 100) + ' CZK';
}

console.log(taxed(amount, 15));

/* Kalkulacka */

const number1 = Number(prompt('Zadej prvni cislo'));
const operation = prompt('Zadej operaci');
const number2 = Number(prompt('Zadej druhe cislo'));

const calculate = (number1, operation, number2) => {
    if (operation === '+') {
        return number1 + number2;
    } else if (operation === '-') {
        return number1 - number2;
    } else if (operation === '/') {
        return number1 / number2;
    } else if (operation === '*') {
        return number1 * number2;
    } else {
        return 'Zadali jste neplatnou operaci.'
    }
};

console.log(calculate(number1, operation, number2 ));