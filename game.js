function getComputerChoice() {
    let ran = Math.random();
    if(ran<=0.333){
        return ("ROCK")
    }
    else if(ran>0.333 && ran<=0.666){
        return ("PAPER")
    }
    else{
        return ("SCISSOR")
    }
}
// function getHumanChoice(){
//     let user_choice = prompt("Rock,Paper,Scissor \nEnter valid choice :")
//     return user_choice.toUpperCase()
// }


let h_score = 0
let c_score = 0
const targetScore = 5;
let gameLocked = false;
const humanScore = document.querySelector("#human");
const compScore =document.querySelector("#computer");
const resultDiv = document.querySelector("#result");
const humanHand = document.querySelector("#human-hand");
const computerHand = document.querySelector("#computer-hand");
const rockBtn = document.querySelector("#r");
const paperBtn = document.querySelector("#p");
const scissorBtn = document.querySelector("#s");
const resetBtn = document.querySelector("#reset");
const handEmoji = {
    ROCK: "✊",
    PAPER: "✋",
    SCISSOR: "✌️"
}

function formatRoundResult(text){
    if(text.includes("Tie!!")){
        return "Tie round. Both played the same."
    }
    if(text.includes("You WIN!!")){
        return `You won! ${text.split(",")[1]}`
    }
    if(text.includes("You LOOSE!!")){
        return `You lost! ${text.split(",")[1]}`
    }
    return text
}

function PlayRound(human,computer){
    if(human==computer){
        return("Tie!!,both played same")
    }
    // user win conditions
    else if(human=="ROCK" && computer=="SCISSOR"){
        h_score = h_score + 1
        return ("You WIN!!,Rock beats Scissor")
    }
    else if(human=="PAPER" && computer=="ROCK"){
        h_score = h_score + 1
        return ("You WIN!!,Paper beats Rock")
    }
    else if(human=="SCISSOR" && computer=="PAPER"){
        h_score = h_score + 1
        return ("You WIN!!,Scissor beats Paper")
    }
    // computer win conditions
    else if(human=="ROCK" && computer=="PAPER"){
        c_score = c_score + 1
        return ("You LOOSE!!,Paper beats Rock")
    }
    else if(human=="PAPER" && computer=="SCISSOR"){
        c_score = c_score + 1
        return ("You LOOSE!!,Scissor beats Paper")
    }
    else if(human=="SCISSOR" && computer=="ROCK"){
        c_score = c_score + 1
        return ("You LOOSE!!,Rock beats Scissor")
    }
    else{
        alert("Thats not acceptable")
    }
}

function PlayGame(human){
    if(gameLocked){
        return;
    }
    let computer = getComputerChoice();
    let roundResult = PlayRound(human,computer)
    humanScore.textContent = `Player: ${h_score}`;
    compScore.textContent = `Computer: ${c_score}`;
    resultDiv.textContent = formatRoundResult(roundResult);
    humanHand.textContent = handEmoji[human];
    computerHand.textContent = handEmoji[computer];

    if (h_score === targetScore || c_score === targetScore){
        gameLocked = true;
        winner();
        setTimeout(() => {
            reset();
            gameLocked = false;
        }, 1800);
    }
    //alert(`${roundResult}\nhuman = ${h_score}\t computer = ${c_score} `)
}

// game starts

rockBtn.addEventListener("click", ()=>{
    PlayGame("ROCK");
})
paperBtn.addEventListener("click", ()=>{
    PlayGame("PAPER");  
})
scissorBtn.addEventListener("click", ()=>{
    PlayGame("SCISSOR");
})
resetBtn.addEventListener("click",()=>{
    reset();
    gameLocked = false;
})
function reset(){
    h_score =0;
    c_score =0;
    humanScore.textContent = `Player: ${h_score}`;
    compScore.textContent = `Computer: ${c_score}`;
    resultDiv.textContent = "Pick your move";
    humanHand.textContent = handEmoji.ROCK;
    computerHand.textContent = handEmoji.ROCK;
}
function winner(){
    if(h_score > c_score){
        resultDiv.textContent = `Game Over. You won ${h_score}-${c_score}`;
        
    }
    else if(h_score < c_score){
        resultDiv.textContent = `Game Over. You lost ${h_score}-${c_score}`;
    }
    else{
        resultDiv.textContent = `Game Over. It's a tie ${h_score}-${c_score}`;
    }
}




