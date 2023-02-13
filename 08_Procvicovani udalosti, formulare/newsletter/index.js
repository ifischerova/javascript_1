const formElm = document.querySelector('#newsletterRegistration');
const emailAddress = document.querySelector("#newsletterEmailAddress");

const signup = (event) => {
    event.preventDefault();
    const emailAddressValue = emailAddress.value;
    formElm.innerHTML = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${emailAddressValue}.`
}

const checking = () => {
    if (emailAddress.value === '' || !emailAddress.value.includes('@')) {
        emailAddress.classList.add('error');
    } else {
        emailAddress.classList.remove('error');
    }
}

formElm.addEventListener('submit', signup);
emailAddress.addEventListener('input', checking);



/*
const orderForm = document.querySelector('#orderForm');

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    orderForm.innerHTML = `<h1>Hotovo</h1>
    <p>Objednavka odeslana ke zpracovani.</p>
    `
}) */