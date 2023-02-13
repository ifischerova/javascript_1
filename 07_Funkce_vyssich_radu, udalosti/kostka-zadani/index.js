console.log('funguju!');

const dice = document.querySelector('.dice');
let side = 1;

const changeNumber = () => {
    side = side + 1;
    if (side === 7) {
        side = 1;
    }
    dice.src=`img/side${side}.svg`
}

dice.addEventListener('click', changeNumber)

