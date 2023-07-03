const cat1 = document.querySelector('.cat1');
const scoreDisplay = document.querySelector('.score');

let score = 0;

const changeCat = () => {
    cat1.src = "https://i.pinimg.com/564x/b4/5f/6a/b45f6a22a04be2f1022ff81808590cc2.jpg";
    score++;
    scoreDisplay.textContent = score;
}

cat1.addEventListener("click", changeCat);