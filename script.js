const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerScore() {
  let pick = Math.floor(Math.random() * 3) + 1;

  switch (pick) {
    case 1:
      console.log(rock);
      break;
    case 2:
      console.log(paper);
      break;
    case 3:
      console.log(scissors);
      break;
  }
}
