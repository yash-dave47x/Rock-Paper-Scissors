let getComputerChoice = () => {
  let choiceGenerator = Math.floor(Math.random() * 3);
  let cpChoice;
  if (choiceGenerator == 0) {
    cpChoice = "rock";
  } else if (choiceGenerator == 1) {
    cpChoice = "paper";
  } else {
    cpChoice = "scissors";
  }
  return cpChoice;
};

let getHumanChoice = () => {
  let n = Number(prompt("Rock:0, Paper:1, Scissors:2"));

  let humanChoice;
  if (n == 0) {
    humanChoice = "rock";
  } else if (n == 1) {
    humanChoice = "paper";
  } else {
    humanChoice = "scissors";
  }
  return humanChoice;
};

const playGame = () => {
  let humanScore = 0,
    computerScore = 0;

  const playRound = (hs, cs) => {
    let result;
    if (hs == cs) {
      result =
        "you choose: " + hs + ", computer chooses: " + cs + " Its a draw!";
    } else {
      if (hs == "rock" && cs == "paper") {
        result =
          "you choose: " + hs + ", computer chooses: " + cs + " Computer wins!";
        computerScore += 1;
      } else if (hs == "rock" && cs == "scissors") {
        result =
          "you choose: " + hs + ", computer chooses: " + cs + " you win!";
        humanScore += 1;
      } else if (hs == "paper" && cs == "scissors") {
        result =
          "you choose: " + hs + ", computer chooses: " + cs + " computer wins";
        computerScore += 1;
      } else if (hs == "paper" && cs == "rock") {
        result =
          "you choose: " + hs + ", computer chooses: " + cs + " you win!";
        humanScore += 1;
      } else if (hs == "scissors" && cs == "rock") {
        result =
          "you choose: " + hs + ", computer chooses: " + cs + " computer wins!";
        computerScore += 1;
      } else if (hs == "scissors" && cs == "paper") {
        result =
          "you choose: " + hs + ", computer chooses: " + cs + " you win!";
        humanScore += 1;
      }
    }
    return result;
  };
  // for (let i = 0; i < 5; i++) {
  // let humanSelection;
  const computerSelection = getComputerChoice();
  //   console.log(playRound(humanSelection, computerSelection));
  //   console.log(humanScore, computerScore);
  // }

  const rock = document.createElement("button");
  const paper = document.createElement("button");
  const scissors = document.createElement("button");
  rock.classList.add("rock");
  paper.classList.add("paper");
  scissors.classList.add("scissors");

  rock.innerText = "Rock";
  paper.innerText = "Paper";
  scissors.innerText = "scissors";

  const body = document.body;
  body.appendChild(rock);
  body.appendChild(paper);
  body.appendChild(scissors);
  const btns = document.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const humanSelection = e.target.className;
      const result = playRound(humanSelection, computerSelection);
      const declare = document.createElement("div");
      declare.innerText = result;
      body.appendChild(declare);
    });
  });
};

playGame();
