// Cviceni Vstup a vystup


// Ockovani
const name = prompt('Zadejte sve jmeno:');
const vek =  Number(prompt('Zadejte svuj vek:'));

const vypisUzivatele = name + ', vek:' + vek;

document.body.innerHTML += '<h2>' + vypisUzivatele + '</h2>';



//Vyplata jako stranka
const hodinovaSazba = Number(prompt('Kolik berete na hodinu v korunach?'));
// const pocetHodin = 8;
const pocetHodin = Number(prompt('Kolik hodin denne pracujete?'))
// const pocetPracovnichDni = 21;
const pocetPracovnichDni = Number(prompt('Kolik dni v mesici pracujete?'))

const hrubaMzda = hodinovaSazba * pocetHodin * pocetPracovnichDni;


document.body.innerHTML += '<h2>' +  hrubaMzda + '</h2>'


/* Cviceni Objekty */

// Realitka
const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };


  const dispoziceBytu = apartment.disposition;
  const najemBezPoplatku = apartment.price.rent;
  const vymeraBytu = apartment.area.floorage;
  const jednotkaVymeraBytu = apartment.area.units;
  const { city, district } = apartment;

  apartment.status = 'taken';
  const status = apartment.status;

  document.body.innerHTML += 'Dispozice bytu je: ' + dispoziceBytu + '<br>';
  document.body.innerHTML += 'Najem bez poplatku je: ' + najemBezPoplatku + '<br>';
  document.body.innerHTML += 'Vymera bytu je: ' + vymeraBytu + jednotkaVymeraBytu + '<br>';
  document.body.innerHTML += 'Mesto: ' + city + '<br>';
  document.body.innerHTML += 'Mestska cast ' + district + '<br>';
  document.body.innerHTML += 'Status bytu je ' + status + '<br>';

// Knihovna
const kniha = {
    autor: 'Jan Neruda',
    nazev: 'Kam s nim',
    stran: 250,
    spoluautori: {
        spoluautor_prvni: 'Bozena Nemcova',
        spoluautor_druhy: 'Jara Cimrman'
    },
    vydano: 2050,
    ISBN: 123456789,
}

// Ockovani - objekty
//const name = prompt('Jmeno:');
//const age = Number(prompt('Vek:'));


const person = {
    name: prompt('Jmeno:'),
    age: Number(prompt('Vek:')),
}

document.body.innerHTML = 'Ockovany ' + person.name + ' ma ' + person.age + ' let';



//Formatovac data

//const day = Number(prompt('Zadejte den:'));
//const month = Number(prompt('Zadejte mesic:'));
//const year = Number(prompt('Zadejte rok:'));



const dateObject = {
  day: Number(prompt('Zadejte den:')),
  month: Number(prompt('Zadejte mesic:')),
  year: Number(prompt('Zadejte rok:')),
};

const date = (dateObject) => {
    return `
        <p class="date">
            <span class="day">${dateObject.day}</span>.<span class="month">${dateObject.month}</span>.<span class="year">${dateObject.year}</span>
        </p>
    `
}

//document.body.innerHTML = '<h2>' + day +'.'+ month + '.' + year + '</h2>';
document.body.innerHTML += date(dateObject);


// Prevod z Fahrenheita na stupne Celsia
const F = Number(prompt("Zadej stupne Fahrenheita:"));

const C = 5*(F - 32) / 9;

document.body.innerHTML += C;



// Letenka
const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};

const startDestination = flight.cityFrom;
const finalDestination = flight.cityTo;

const hand_height = flight.baglimit.hand_height;
const hand_length = flight.baglimit.hand_length;
const hand_width =  flight.baglimit.hand_width;

const secondBagPriceCZK = Math.ceil(flight.bags_price[2] * flight.conversion.EUR);



document.body.innerHTML += 'Ledadlo leti z ' + startDestination + ' do ' + finalDestination + '<br>';
document.body.innerHTML += 'Maximalni rozmery zavazadla jsou ' + hand_height + 'x' +  hand_length + 'x' + hand_width + ' cm' + '<br>';
document.body.innerHTML += 'Druhe zavazadlo bude stat: ' + secondBagPriceCZK + ' CZK ' + '<br>';