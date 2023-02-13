// Pole v divadle

//a.
const divaciNaPredstavenich = [150, 200, 50, 2, 25];

divaciNaPredstavenich.push(250);

console.log(divaciNaPredstavenich);

//b.
const zaplnenostDivadla = [175.12, 85.15, 50.00 ];

console.log(zaplnenostDivadla);

//c.
const seznamPredstaveni = ['Skola vola', 'Hihi hahaha', 'Uz mi z toho hrabe', 'Kdy se konecne vyspim'];

const druhePredstaveni = seznamPredstaveni[1];

console.log(druhePredstaveni);

const aktualizovanySeznamPredstaveni = seznamPredstaveni.shift();

console.log(aktualizovanySeznamPredstaveni);

const recenze = [['Divadlo', 9], ['Radeji kino nez divadlo', 5], ['Kultura', 7]];

recenze.unshift(['Kultura vymrela', 10]);

console.log(recenze);