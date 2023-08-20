let resetBtn = document.getElementById("again-btn");
let outputRes = document.getElementById("output");
let checkBtn = document.getElementById("check-btn");
let container = document.getElementById("container");
let msg = document.querySelector(".message");
let guess = document.querySelector(".guessNumber");
let res = document.querySelector(".res");
let score = document.querySelector(".score");
let scores = 20;
let highScoreData = document.querySelector(".highscore");
let highScore = 20;

let randomnumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomnumber);

// applying event handler to rest button
resetBtn.addEventListener("click", () => {
  resetFnc();
});

//function to rest game
let resetFnc = () => {
  let randomnumber = Math.trunc(Math.random() * 20) + 1;
  console.log("re",randomnumber);
  container.style.backgroundColor = "#222222";
  res.innerText = "Start guessing...";
  score.innerHTML = 20;

  highScoreData.innerHTML = highScore;
  // window.location.reload();
};

//function to check number
let checkFnc = () => {
  let inputNumber = Number(guess.value);
  console.log(inputNumber);
  if (inputNumber < randomnumber) {
    container.style.backgroundColor = "red";
    res.innerText = "low";
    scores--;
    score.innerHTML = scores;
    highScore--;
    highScoreData.innerHTML = highScore;
  } else if (inputNumber === randomnumber) {
    container.style.backgroundColor = "green";
    res.innerText = "Good Job";
    score.innerHTML = scores;
    highScoreData.innerHTML = highScore;
  } else {
    container.style.backgroundColor = "blue";
    res.innerText = "high";
    scores--;
    score.innerHTML = scores;
    highScore--;
    highScoreData.innerHTML = highScore;
  }

  //   if(highScore < score){
  //     highScoreData.innerHTML= scores
  //   }
};

// applying event handler to check button
checkBtn.addEventListener("click", checkFnc);
