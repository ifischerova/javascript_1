console.log('funguju!');

const bulb = document.querySelector(".bulb");

const lightBulb = () => {
    bulb.classList.toggle("bulb--on");
}

bulb.addEventListener('keydown', lightBulb);
