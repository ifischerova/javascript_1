const buttonElem = document.querySelector("#btn-order");
const changeOrderText = () => {
    buttonElem.textContent = "objednano";
    document.body.innerHTML += '<p>klik!</p>';
}

buttonElem.addEventListener('click', changeOrderText)

setTimeout(() => {
    buttonElem.textContent = "Objednat";
    buttonElem.disabled = false;
  }, 8000);