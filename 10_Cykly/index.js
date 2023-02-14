// Pocitani pomoci WHILE
/*
console.log('Prvni WHILE cyklus')

let x = 0;

while(x <= 100) {
    console.log(x);
    x += 1;
};

console.log('Druhy WHILE cyklus')
let i = 2;

while( i <= 100) {
    console.log(i);
    i += 2;
};

console.log('Treti WHILE cyklus')
let n = 100;

while( n >= 0) {
    console.log(n);
    n -= 2;
};
*/

// Pocitani pomoci FOR
/*
for (let x = 0; x <= 100; x +=1) {
    console.log(x);
}

console.log('Tohle je DRUHY for cyklus')
for (let i = 2; i <= 100; i += 2 ) {
    console.log(i);
}


console.log('Tohle je TRETI for cyklus')
for (let n = 100; n >= 0; n-= 2) {
    console.log(n)
}
*/

// Uzivatele

/*const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'ja', 'misa'];

let i = 0

for(users[i]; i < users.length; i += 1 ) {

    if (users[i].length <= 4) {
        console.log(users[i] + '@gmail.com');
    };
};*/

//Pohyby na uctu

/*const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];

let zustatek = 0;

for(let n = 0; n < amounts.length; n += 1) {
    zustatek += amounts[n];
};

console.log(zustatek);

let n = 0;
let zustatek = 0;

while(zustatek >= 0) {
    zustatek += amounts[n];
    n += 1;
}

console.log(`Zůstatek se poprvé dostal do záporné hodnoty ${zustatek} po transakci číslo ${n}.`)*/

// Nakupni seznam



/* Cykly s forEach */

// 1. Jednoduche pole s forEach

/*
const shoppingList = [
    'mouka',
    'máslo',
    'cukr',
    'jablka',
    'skořice',
    'mléko',
    'cibule',
];

shoppingList.forEach((shoppingItem) => {
    if ((shoppingItem.length % 2) === 0) {
        console.log(shoppingItem.toUpperCase());
    }
});

let shoppingListString = '';

shoppingList.forEach((shoppingItem) => {
    shoppingListString += shoppingItem;
})

console.log(shoppingListString);

//2. DOM elementy a forEach

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph) => {
    paragraph.style.color = 'red';
})
*/

// Doporucene ulozky na doma

// 3. Cekani na sestku

const roll = () => {
    return Math.ceil(Math.random() * 6);
  };
  
  let counter = 1;
  let rolledNumber = roll();
  while (rolledNumber !== 6) {
    console.log(`Hodilo se cislo ${rolledNumber}`);
    rolledNumber = roll();
    counter += 1;
  }
  
  console.log(`Šestka se hodila na ${counter}. pokus`);


/*
// 4. Male algoritmy

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];


// a. vsechna cisla
numbers.forEach((number) => {
    console.log(number);
});

// b. druha mocnina
numbers.forEach((number) => {
    console.log(Math.sqrt(number));
})


// c. Jen zaporna cisla
numbers.forEach((number) => {
    if (number < 0) {
        console.log(number);
    }
})

// d. Absolutni hodnota cisel
numbers.forEach((number) => {
    if (number < 0) {
        console.log(-1 * number);
    } else {
        console.log(number)
    };
})


// e. Suda cisla
numbers.forEach((number) => {
    if ((number % 2) === 0) {
        console.log(number);
    };
})

// f. Absolutni hodnota delitelna tremi

numbers.forEach((number) => {
    if (number < 0 ) {
        number * (-1);
    }

    if ((number % 3) === 0){
        console.log(number);
    }
})

console.log('S funkci abs():') 
numbers.forEach((number) => {
    if (Math.abs(number) % 3 === 0) {
      console.log(number);
    }
});


// g. Jak daleko je kazde cislo v seznamu od cisla 5

console.log("reseni s indexOf:")
numbers.forEach((number) => {
    console.log(numbers.indexOf(5) - numbers.indexOf(number));
});

// h. Druhe mocniny vzdalenost9 vsech cisel od cisla 5


// i. Spocitejte zaporna cisla v seznamu
let pocet = 0;

numbers.forEach((number) => {
    if (number < 0) {
        pocet += 1;
    }
});
console.log(pocet);

// j. Spocitejte soucet vsech cisel v poli 

let soucet = 0;

numbers.forEach((number) => {
    soucet += number;
})

console.log(soucet);

// k. Prumer vsech cisel v poli

let soucetVsechCisel = 0;
let pocetCiselVPoli = numbers.length;

numbers.forEach((number) => {
    soucetVsechCisel += number;
})

const prumer = soucetVsechCisel/pocetCiselVPoli;

console.log(prumer);

// l. Soucet vsech kladnych cisel v poli

let soucetKladnychCisel = 0;

numbers.forEach((number) => {
    if (number > 0) {
        soucetKladnychCisel += number;
    }
});

console.log(soucetKladnychCisel);
*/