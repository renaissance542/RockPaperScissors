let playerSelection;
let playerHealth = 5;
let computerHealth = 5;


function selectWeapon(weapon){
    deselectWeapons();
    document.getElementById(weapon).classList.add('selected');
    playerSelection = weapon;
    document.getElementById("shoot").style.visibility = 'visible';
}

function deselectWeapons (){
   let y = document.getElementsByClassName("weapon");
    for (let i = 0; i < y.length; i++){
        y[i].classList.remove('selected');
    } 
}

function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    let play = options[Math.floor(Math.random() * options.length)];
    console.log(`computer chose ${play}`);
    return play;
}

function playRound() {
    let computerSelection = computerPlay();

    if (playerSelection.toLowerCase().includes("rock")) {
        if(computerSelection.toLowerCase().includes("scissors")){
            document.getElementById('result').innerHTML = "You Win! Rock beats Scissors.";
            computerHealth--;
        } else if (computerSelection.toLowerCase().includes("paper")){
            document.getElementById('result').innerHTML  = "You Lose! Paper beast Rock";
            playerHealth--;
        } else {
            document.getElementById('result').innerHTML  = "Tie game! You both picked Rock.";
        }
    } else if (playerSelection.toLowerCase().includes("paper")){
        if(computerSelection.toLowerCase().includes("scissors")){
            document.getElementById('result').innerHTML  = "You Lose! Scissors beats Paper.";
            playerHealth--;
        } else if (computerSelection.toLowerCase().includes("rock")){
            document.getElementById('result').innerHTML  = "You Win! Paper beast Rock";
            computerHealth--;
        } else {
            document.getElementById('result').innerHTML  = "Tie game! You both picked Paper.";
        }

    } else if (playerSelection.toLowerCase().includes("scissors")){
        if(computerSelection.toLowerCase().includes("paper")){
            document.getElementById('result').innerHTML  = "You Win! Scissors beats Paper.";
            computerHealth--;
        } else if (computerSelection.toLowerCase().includes("rock")){
            document.getElementById('result').innerHTML  = "You Lose! Rock beats Scissors";
            playerHealth--;
        } else {
            document.getElementById('result').innerHTML  = "Tie game! You both picked Scissors.";
        }
    }
    deselectWeapons();
    document.getElementById("shoot").style.visibility = 'hidden';
    playerHealthField.innerHTML = playerHealth;
    computerHealthField.innerHTML = computerHealth;
    if (playerHealth === 0 || computerHealth === 0){
          displayGameOverResults();
    }
  }

  function displayGameOverResults(){
      if(playerHealth ===0){
          message = "Game Over: You lost.";
      } else if (computerHealth === 0){
          message = "Game Over: You Won!";
      } else {
          message = "Error: game ended without victory condition"
      }
      let y = document.getElementsByClassName("weapon");
        for (let i = 0; i < y.length; i++){
            y[i].style.visibility = 'hidden';
        } 
  }

//   function game() {
//     let playerScore = 0;
//     let computerScore = 0;  
    
//     for(let i = 0; i < 5; i++){
//         const playerSelection = prompt("Choose Rock, Paper, or Scissors");
//         const computerSelection = computerPlay();
//         let result = playRound(playerSelection, computerSelection);
//         if (result.includes("Win")){
//             playerScore++;
//         } else if (result.includes("Lose")){
//             computerScore++;
//         }
//         console.log(result);
//     }
//     console.log(`Final Score:  Player: ${playerScore} || Computer : ${computerScore}`);

//   }

//   game();
  
