const startScreen = 
document. getElementById("start-screen");
const gameScreen = 
document.getElementById("game-screen");
const endScreen = 
document.getElementById("end-screen");

const timeEl = 
document.getElementById("time")
;
const scoreEl = 
document.getElementById("score")
;
const problemEl = 
document.getElementById("problem")
;
const answerEl = 
document.getElementById("answer")
;
const finalScoreEl = 
document.getElementById("final-score");

let score = 0;
let timeLeft = 120;
let correctAnswer = 0;
let timerId = null;

function randInt(min, max)  {
    return Math.floor(Math.random() * (max- min + 1)) + min;
}

function newProblem() {
    const type = randInt(1, 4);
    let a, b;

    if (type === 1) {
// addition
    a = randInt(2, 100);
    b = randInt(2, 100);
    correctAnswer = a + b;
    problemEl.textContent = a + " + " + b;
    } else if (type === 2) {
// subtraction
    a = randInt(2, 100);
    b = randInt(2, 100);
    correctAnswer = a;
    problemEl.textContent = (a+ b) + " - " + b;
    } else if (type === 3)  {
//multiplication
    a = randInt(2, 12);
    b = randInt(2, 100);
    correctAnswer = a * b;
    problemEl.textContent = a +" × " + b;
    } else {
//division
    a = randInt(2, 12);
    b = randInt(2, 100);
    correctAnswer = b;
    problemEl.textContent = (a * b) + " ÷ " + a
    }
}

answerEl.addEventListener("input",
 function () {
    if (Number(answerEl.value)
=== correctAnswer) {
    score++;
    scoreEl.textContent = score;
    answerEl.value = "";
    newProblem();
    }
});

function tick() {
    timeLeft--;
    timeEl.textContent =
timeLeft;
    if (timeLeft <= 0){
        endGame();
    }
}

function startGame() {
    score = 0;
    timeLeft = 120;
    scoreEl.textContent = 0;
    timeEl.textContent = 120;
    answerEl.value = "";

    
startScreen.classList.add("hidden");

endScreen.classList.add("hidden");

gameScreen.classList.remove("hidden");

    newProblem();
    answerEl.focus();
    timerId = setInterval(tick,
1000);
}

function endGame() {
    clearInterval(timerId);

gameScreen.classList.add("hidden");

endScreen.classList.remove("hidden");
    finalScoreEl.textContent = score;
}

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("restart-btn").addEventListener("click", startGame);
