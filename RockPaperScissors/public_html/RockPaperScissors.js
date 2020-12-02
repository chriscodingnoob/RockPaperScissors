function generateComputerChoice() {
var computerChoice = Math.random() * 3;
computerChoice = Math.floor(computerChoice) +1;
if (computerChoice === 1) {
    generateComputerChoice = "Rock";
    } else if (computerChoice === 2) {
        generateComputerChoice = "Paper";
    } else {
        generateComputerChoice = "Scissors";
    } 
    return generateComputerChoice;
} 

//generate a random number between 1 and 3
//1 = rock, 2 = paper, 3 = scissors
//the function should return the name of the computer's choice

function PlayTheGame() {
    var radioButtons = document.getElementsByName ("choice");
    var index = 0;
    while (index < radioButtons.length) {
        if (radioButtons [index].checked === true ) {
            rpsChoice = radioButtons[index].value;
        }
        ++index;
    }
    let cpuWeapon = generateComputerChoice();
    alert ("Computer chose " + cpuWeapon);
    if (rpsChoice === cpuWeapon) {
        alert ("It's a tie!");
    }
    else if (rpsChoice === "Rock") {
        if (cpuWeapon === "Scissors") {
            alert ("You win, Rock breaks Scissors.");
        } else {
            alert ("You lose, Paper covers Rock.");
        }
    }
    else if (rpsChoice === "Paper") {
        if (cpuWeapon === "Rock") {
            alert ("You win, Paper covers Rock.");
            } else {
                if (cpuWeapon === "Scissors") {
                    alert ("You lose, Scissors cut Paper.");
                }
        }
    }
    else if (rpsChoice === "Scissors") {
        if (cpuWeapon === "Rock") {
            alert ("You lose, Rock breaks Scissors.");
        } else {
            if (cpuWeapon === "Paper") {
                alert ("You win, Scissors cut Paper.");
            }
        }
    }
//declare variables to hold the player choice and the computer choice



//use getElementsByName to get the form radio button values
//loop through the array to find which one is checked
//store the checked radio button's value in the variable for player choice


    
//Call the generateComputerChoice function and store the returned value
//in the variable for computer choice



//compare the player's choice and the computer's choice to determine the winner
//rock beats scissors, scissors beat paper, paper beats rock



//use an alert box to tell the player who won, or if it was a tie
//when displaying the winner, display both the computer choice and the
//player choice in your message


}

