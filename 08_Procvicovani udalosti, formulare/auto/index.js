const carImage = document.querySelector('.car__image');

carImage.addEventListener('keyup', (e) => {
    if (e.code === "ArrowRight") {
        carImage.classList.add('move'); 
    } else if (e.code === "ArrowLeft") {
        carImage.classList.remove('move'); 
    } else {
        console.log('tahle klavesa s autem neudela nic.')
    }
});