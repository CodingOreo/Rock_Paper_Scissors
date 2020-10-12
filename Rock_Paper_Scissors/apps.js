//Variables 
let   playerScore = 0; // Tracks User Score 
let   computerScore = 0; // Tracks Computer Score
const playerScore_span = document.getElementById("player-score"); //From Span Tag
const computerScore_span = document.getElementById("computer-score"); //From Span Tag 
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock"); //Rock variable
const paper_div = document.getElementById("paper"); //Paper variable
const scissors_div = document.getElementById("scissors"); //Scissors variable


//Testing
/*
rock_div.addEventListener('click', function() {
    console.log("You clicked on Rock"); 
})
*/

//Function for getting Computer option
function getComputerChoice() {

    //Variables
    const choices = ["rock", "paper", "scissors"]; //Computer Choices to Pick from 
    const randNum = Math.floor(Math.random() * 3); 
    return choices[randNum]; //Returns the random whole number generated which will then transfer to either rock, paper or scissors 

    /*
    Math.floor rounds numbers down to whole numbers 
    Math.random generates random numbers 
    * 3 means going between 0-2
    */ 
}

//Player Wins
function win(userChoice, computerChoice) {

    //Variables
    playerScore++; //Player Score Increases 
    playerScore_span.innerHTML = playerScore; // Player Score 
    computerScore_span.innerHTML = computerScore; //Computer Score 
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow'); 

    //Winning Text

    if(userChoice == "rock")
    {
        result_p.innerHTML = userChoice + " crushes " + computerChoice + ". YOU WIN";

    }
    else if(userChoice == "paper")
    {
        result_p.innerHTML = userChoice + " suffocates " + computerChoice + ". YOU WIN";

    }
    else if(userChoice == "scissors")
    {
        result_p.innerHTML = userChoice + " cuts up " + computerChoice + ". YOU WIN";

    }

    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow') }, 1000); //Timing out the Green Glow CSS Class in 1000ms (1 second)
}


    //console.log("YOU WIN"); test 
    

//PLAYER LOSES
function lose(userChoice, computerChoice) {

    //Variables
    computerScore++; //Computer Score Increases
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = userChoice + " loses to " + computerChoice + ". YOU LOSE"; // Text Result 
    userChoice_div.classList.add('red-glow'); 

    //Losing Text

    if(userChoice == "rock")
    {
        result_p.innerHTML = userChoice + " is suffocated by " + computerChoice + ". YOU LOSE";

    }
    else if(userChoice == "paper")
    {
        result_p.innerHTML = userChoice + " is cut up by " + computerChoice + ". YOU LOSE";

    }
    else if(userChoice == "scissors")
    {
        result_p.innerHTML = userChoice + " is smashed by " + computerChoice + ". YOU LOSE";

    }

    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow') }, 1000); //Timing out the Red Glow CSS Class in 1000ms (1 second)
     

    //console.log("YOU LOSE");
  
    }

//NO ONE WINS 
function draw(userChoice, computerChoice) {

    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = userChoice + " ties with " + computerChoice + " DRAW!!";
    userChoice_div.classList.add('grey-glow'); 

    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow') }, 1000); //Timing out the grey Glow CSS Class in 1000ms (1 second)


    //console.log("D R A W W W W W W ! ! ! ! !")
    }



//Function of Game 
function game(userChoice) {
    
    //variables 
    const computerChoice = getComputerChoice(); //computerChoice becomes whatever random number was generated and converted to rock, paper or scissors
  
    //Switch Case for Win,Lose, Draw 
   switch(userChoice + computerChoice) {

       case "rockscissors": //Player choice is Rock | Computer choice is Scissors
       case "paperrock": // Player choice is Paper | Computer choice is Rock
       case "scissorspaper": // Player choice is scissors | computer choice is paper
           console.log("You Win");
            win(userChoice, computerChoice);
            break; 

        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, computerChoice); 
            break; 
        
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors": 
            draw(userChoice, computerChoice);
            break; 
   }

   //Testing 
    //console.log("user choice => " + userChoice); 
    //console.log("computer choice =>" + computerChoice); 
    
}


//MAIN FUNCTION
function main() {

// Clicking On Rock
rock_div.addEventListener('click', function() {
       game("Rock"); 
})

//Clicking on paper 
paper_div.addEventListener('click', function() {
        game("Paper");
})

//Clicking on scissors 
scissors_div.addEventListener('click', function() {
            game("Scissors");

})


}
main();
game(); 