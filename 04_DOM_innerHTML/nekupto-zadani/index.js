const product1 = {
  image: 'img/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'img/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'img/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};




// First product card

const card1 = document.getElementById('product1');
card1.classList.add('border-primary');

const product1HTML = `
  <img class="card-img-top" src="${product1.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product1.name}</h2>
    <p class="card-text">${product1.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

card1.innerHTML = product1HTML;

//Second product card
const card2 = document.getElementById('product2')

const product2HTML = `
  <img class="card-img-top" src="${product2.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product2.name}</h2>
    <p class="card-text">${product2.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

card2.innerHTML = product2HTML;

const btnCard2 = document.querySelector('#product2 button');
btnCard2.classList.remove('btn-primary');

// Third product card

const card3 = document.getElementById('product3')

const product3HTML = `
  <img class="card-img-top" src="${product3.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product3.name}</h2>
    <p class="card-text">${product3.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

card3.innerHTML = product3HTML;

const cardTitle = document.querySelector('#product3 .card-title');
cardTitle.classList.toggle('text-center');