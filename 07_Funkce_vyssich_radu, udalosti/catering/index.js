const justFood = (people) => {
    const cena = pocetLidi * 1000;
    return cena;
    ///return `Catering od Just Food pro ${people} lidi stoji ${ cena }.`
}

const yourMama = (people) => {
    const cena = people * 2000;
    return cena;
    // return `Catering od Your Mama pro ${people} lidi stoji ${cena}.`
}

const FlavorHeaven = (people) => {
    const cena = people * 3000;
    return cena;
}


const createEvent = (event, people, catering) => {
    return `Udalost ${event} s cateringem pro ${people} lidi bude za ${catering}. `
}

console.log(createEvent('Inaugurace', 100, yourMama(100)))