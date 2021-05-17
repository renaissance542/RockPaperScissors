let playerSelection;
let playerHealth = 5;
let computerHealth = 5;

const weapons = document.getElementsByClassName('weapon');
for (let i = 0; i < weapons.length; i++){
    weapons[i].addEventListener("click", selectWeapon);
};


function selectWeapon(e){
    let weapon = e.srcElement.id;
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
    document.getElementById('computerChoice').innerHTML 
        = `Computer chose ${play}.`;
    console.log(`computer chose ${play}`);
    return play;
}

function playRound() {
    let computerSelection = computerPlay();

    if (playerSelection.toLowerCase().includes("rock")) {
        if(computerSelection.toLowerCase().includes("scissors")){
            document.getElementById('result').innerHTML = "You Won! Rock beats Scissors.";
            computerHealth--;
        } else if (computerSelection.toLowerCase().includes("paper")){
            document.getElementById('result').innerHTML  = "You Lost! Paper beast Rock";
            playerHealth--;
        } else {
            document.getElementById('result').innerHTML  = "Tie game! You both picked Rock.";
        }
    } else if (playerSelection.toLowerCase().includes("paper")){
        if(computerSelection.toLowerCase().includes("scissors")){
            document.getElementById('result').innerHTML  = "You Lost! Scissors beats Paper.";
            playerHealth--;
        } else if (computerSelection.toLowerCase().includes("rock")){
            document.getElementById('result').innerHTML  = "You Won! Paper beast Rock";
            computerHealth--;
        } else {
            document.getElementById('result').innerHTML  = "Tie game! You both picked Paper.";
        }

    } else if (playerSelection.toLowerCase().includes("scissors")){
        if(computerSelection.toLowerCase().includes("paper")){
            document.getElementById('result').innerHTML  = "You Won! Scissors beats Paper.";
            computerHealth--;
        } else if (computerSelection.toLowerCase().includes("rock")){
            document.getElementById('result').innerHTML  = "You Lost! Rock beats Scissors";
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
      let message;
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
    document.getElementById('result').innerHTML = '';
    document.getElementById('computerChoice').innerHTML = message;      
  }

  
