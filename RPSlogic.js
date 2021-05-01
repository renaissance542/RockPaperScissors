function msg(){
    alert("Hello World");
}

function computerPlay (){
    let options = ['Rock', 'Paper', 'Scissors'];
    let play = options[Math.floor(Math.random() * options.length)];
    console.log(play);
    return play;
}

function playRound(playerSelection, computerSelection) {
    let result = '';
    if (playerSelection.toLowerCase().includes("rock")) {
        if(computerSelection.toLowerCase().includes("scissors")){
            result = "You Win! Rock beats Scissors.";
        } else if (computerSelection.toLowerCase().includes("paper")){
            result = "You Lose! Paper beast Rock";
        } else {
            result = "Tie game! You both picked Rock.";
        }
    } else if (playerSelection.toLowerCase().includes("paper")){
        if(computerSelection.toLowerCase().includes("scissors")){
            result = "You Lose! Scissors beats Paper.";
        } else if (computerSelection.toLowerCase().includes("rock")){
            result = "You Win! Paper beast Rock";
        } else {
            result = "Tie game! You both picked Paper.";
        }

    } else if (playerSelection.toLowerCase().includes("scissors")){
        if(computerSelection.toLowerCase().includes("paper")){
            result = "You Win! Scissors beats Paper.";
        } else if (computerSelection.toLowerCase().includes("rock")){
            result = "You Lose! Rock beats Scissors";
        } else {
            result = "Tie game! You both picked Scissors.";
        }

    }

    return result;
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;  
    
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose Rock, Paper, or Scissors");
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("Win")){
            playerScore++;
        } else if (result.includes("Lose")){
            computerScore++;
        }
        console.log(result);
    }
    console.log(`Final Score:  Player: ${playerScore} || Computer : ${computerScore}`);

  }

  game();
  
