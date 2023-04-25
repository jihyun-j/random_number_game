const elForm = document.querySelector("form");
const elBetweenNum = document.querySelector("#betweenNum");
const elGuessNum = document.querySelector("#guessNum");
let elShowNum = document.querySelector(".showNums");
let elResult = document.querySelector(".result");

function handlePlay(e) {
  e.preventDefault();
  let getBetweenNum = parseInt(elBetweenNum.value, 0);
  const randomNum = Math.floor(Math.random() * getBetweenNum + 1);
  let getGuessNum = parseInt(elGuessNum.value, 0);

  elShowNum.innerText = `You chose: ${getBetweenNum}, the machine chose ${randomNum}`;

  console.log(randomNum, getGuessNum);

  if (randomNum === getGuessNum) {
    elResult.innerText = "You Win!";
  } else {
    elResult.innerText = "You lost!";
  }
}

elForm.addEventListener("submit", handlePlay);
