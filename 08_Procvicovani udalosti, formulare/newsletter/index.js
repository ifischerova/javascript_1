const formElm = document.querySelector('#newsletterRegistration');

formElm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailAddress = document.querySelector("#newsletterEmailAddress");
    const emailAddressValue = emailAddress.value;
    formElm.innerHTML = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${emailAddressValue}.`
})