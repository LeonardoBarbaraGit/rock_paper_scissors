let playerPick = prompt("Pick your hand");

while (
  playerPick.toLowerCase() !== "rock" &&
  playerPick.toLowerCase() !== "paper" &&
  playerPick.toLowerCase() !== "scissors"
) {
  alert("You need to pick Rock, Paper or Scissors");
  playerPick = prompt("Pick again");
}

function getComputerScore() {
  let pick = Math.floor(Math.random() * 3) + 1;
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  switch (pick) {
    case 1:
      return rock;
      break;
    case 2:
      return paper;
      break;
    case 3:
      return scissors;
      break;
  }
}

function playRound(myPick, computerPick) {
  myPick = myPick.toLowerCase();

  switch (myPick) {
    case "rock":
      if (computerPick === "rock") {
        return "draw";
      } else if (computerPick === "paper") {
        return "lose";
      } else if (computerPick === "scissors") {
        return "win";
      }
      break;
    case "paper":
      if (computerPick === "rock") {
        return "win";
      } else if (computerPick === "paper") {
        return "draw";
      }
      if (computerPick === "scissors") {
        return "lose";
      }

      break;
    case "scissors":
      if (computerPick === "rock") {
        return "lose";
      } else if (computerPick === "paper") {
        return "win";
      } else if (computerPick === "scissors") {
        return "draw";
      }

      break;
  }
}

function game() {
  let myScore = 0;
  let pcScore = 0;
  for (i = 0; i < 5; i++) {
    let initialize = playRound(playerPick, getComputerScore());
    if (initialize === "win") {
      myScore++;
    } else if (initialize === "lose") {
      pcScore++;
    }
  }

  if (myScore > pcScore) {
    console.log(
      `Congratulations! You won the game with a score of ${myScore} to ${pcScore}!`
    );
  } else if (myScore < pcScore) {
    console.log(
      `Unlucky!! You lost the game with a score of ${myScore} to ${pcScore}.`
    );
  } else {
    console.log(
      `You both drew the game with a score of ${myScore} to ${pcScore}..`
    );
  }
}
