const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

let userScore = 0;
let compScore = 0;

let getCompChoice = () => {
  const choices = ["r", "p", "s"];
  const randNumb = Math.floor(Math.random() * 3);
  return choices[randNumb];
};

let toWord = (alphabate) => {
  if (alphabate === "r") return "Rock";
  if (alphabate === "p") return "Paper";
  if (alphabate === "s") return "Scissors";
};

const subSmallWord = (word) => {
  return word.fontsize(3).sub();
};

let win = (userChoice, compChoice) => {
  console.log("win");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_div.innerHTML = `${toWord(userChoice)}${subSmallWord(
    "user"
  )} beats ${toWord(compChoice)}${subSmallWord("comp")}. You Win 🔥`;
  //   for win effect
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 400);
};

let lose = (userChoice, compChoice) => {
  console.log("lose");
  compScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_div.innerHTML = `${toWord(userChoice)}${subSmallWord(
    "user"
  )} loses to ${toWord(compChoice)}${subSmallWord("comp")}. You lose 💩`;
  //   for loos effect
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 400);
};

let draw = (userChoice, compChoice) => {
  console.log("draw");
  result_div.innerHTML = `${toWord(userChoice)}${subSmallWord(
    "user"
  )} equals ${toWord(compChoice)}${subSmallWord("comp")}. And it's tie !`;
  //   for draw effect
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 400);
};

let game = (userChoice) => {
  //   console.log("💩 🔥" + userChoice);
  const compChoice = getCompChoice();
  console.log("user choose: " + userChoice);
  console.log("comp choose: " + compChoice);
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      //   console.log("user wins 🔥");
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      //   console.log("user lost 💩");
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      //   console.log("its draw !");
      draw(userChoice, compChoice);
      break;
  }
};

let main = () => {
  rock_div.addEventListener("click", () => {
    // console.log("clicked the rock");
    game("r");
  });

  paper_div.addEventListener("click", () => {
    // console.log("clicked the paper");
    game("p");
  });

  scissors_div.addEventListener("click", () => {
    // console.log("clicked the scissors");
    game("s");
  });
};

main();
