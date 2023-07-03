const cat1 = document.querySelector(".cat1");
const scoreDisplay = document.querySelector(".score");

let score = 0;
let isClicked = false; // 클릭 상태를 저장하는 변수
let previousSrc = cat1.src;

const changeCat = () => {
    if (!isClicked) {
        isClicked = true; // 클릭 상태로 변경
        cat1.src ="https://i.pinimg.com/564x/b4/5f/6a/b45f6a22a04be2f1022ff81808590cc2.jpg";
        score++;
        scoreDisplay.textContent = score;
    }
};

const restoreCat = () => {
    if (isClicked) {
        cat1.src = previousSrc; // 이전 이미지로 변경
        isClicked = false; // 클릭 상태 해제
    }
};

cat1.addEventListener("mousedown", changeCat);
cat1.addEventListener("mouseup", restoreCat);
