function computerChoice(max){
    return Math.floor(Math.random() * max);
}

var player_score=0; 
var computer_score=0;
 //starting a game:
var playerChoice = document.getElementById("player");
playerChoice.addEventListener("click" , (e)=> {
    
    const c_choice = computerChoice(3)

    const gmaeScore=document.getElementById("gmaeScore"); 
    const gmaeResult=document.getElementById("gmaeResult"); 


// FOR PC : 0 == PAPER , 1 == SCISSORS , 2 == ROCK

//game logic 
if(document.getElementById("paper").checked){
    
    if(c_choice == 0) {
        gmaeResult.innerText = "DRAW!"
        document.getElementById("computerChoice").innerText = "computer choose : paper"
    }
    else if (c_choice == 1)
    {
        gmaeResult.innerText = "COMPUTER WON!"
        computer_score += 1 
        document.getElementById("computerChoice").innerText = "computer choose : scissors"
    }

    else if (c_choice == 2){
        gmaeResult.innerText = "you won !"
        player_score += 1
        document.getElementById("computerChoice").innerText = "computer choose : rock"
    }
}
if(document.getElementById("scissors").checked){
    
    if(c_choice == 0) {
        gmaeResult.innerText = "you won !"
        player_score += 1
        document.getElementById("computerChoice").innerText = "computer choose : paper"
    }
    else if (c_choice == 1)
    {
        gmaeResult.innerText = "DRAW!"
        document.getElementById("computerChoice").innerText = "computer choose : scissors"
    }

    else if (c_choice == 2){
       gmaeResult.innerText = "COMPUTER WON!"
        computer_score += 1 
        document.getElementById("computerChoice").innerText = "computer choose : rock"
    }
}
if(document.getElementById("rock").checked){
    if(c_choice == 0) {
        gmaeResult.innerText = "COMPUTER WON!"
        computer_score += 1 
        document.getElementById("computerChoice").innerText = "computer choose : paper"
    }
    else if (c_choice == 1)
    {
        gmaeResult.innerText = "you won !"
        document.getElementById("computerChoice").innerText = "computer choose : scissors"
        player_score += 1
    }

    else if (c_choice == 2){
        gmaeResult.innerText = "DRAW!"
        document.getElementById("computerChoice").innerText = "computer choose : rock"
    }
}

gmaeScore.innerText=`Ai: ${computer_score} | Player: ${player_score}`;
rock.checked=false;
scissor.checked=false;
paper.checked=false;
}
)