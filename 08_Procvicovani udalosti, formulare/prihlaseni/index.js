const user = {
    email: 'bartolomej.rozumbrada@gmail.com',
    password: 'vimzenicnevim',
    name: 'Bartoloměj',
};


const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#loggingForm');

const checkInputs = (event) => {
    event.preventDefault();
    if (email.value === user.email && password.value === user.password ) {
        form.innerHTML = `Prihlaseny uzivatel: ${ user.name }`;
    } else {
        form.innerHTML = `Neplatne prihlasovaci udaje!!!!`
    }
}

console.log(user.email, user.name)

form.addEventListener('submit', checkInputs);