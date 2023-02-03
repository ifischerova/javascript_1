document.body.innerHTML = '<h1>ahoj</h1>';

//Nahodna cisla

document.body.innerHTML =  Math.random();


// Prevod meny
const wageInEUR = 20;
const wageInCZK = '<h1>Mzda v korunach je:' + Math.round(20 * 26.58) + '</h1>';

document.body.innerHTML = wageInCZK;



//Ultramaraton
const start = 15;
const delkaZavodu = 22;
const format = 24;

const konec = (start + delkaZavodu) % format;
document.body.innerHTML = 'Zavod dokonci v ' + konec + ' hodin.'  ;