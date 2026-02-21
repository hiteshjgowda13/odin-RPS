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
function getHumanChoice(){
    let user_choice = prompt("Rock,Paper,Scissor \nEnter valid choice :")
    return user_choice.toUpperCase()
}


let h_score = 0
let c_score = 0
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

function PlayGame(){
    let winner=PlayRound(h_choice,c_choice)
    alert(`${winner}\nhuman = ${h_score}\t computer = ${c_score} `)
}

// game starts

alert("5 rounds of ROCK PAPER SCISSOR STARTS NOW!!!")


h_choice=getHumanChoice()
c_choice=getComputerChoice()
PlayGame()

h_choice=getHumanChoice()
c_choice=getComputerChoice()
PlayGame()

h_choice=getHumanChoice()
c_choice=getComputerChoice()
PlayGame()

h_choice=getHumanChoice()
c_choice=getComputerChoice()
PlayGame()

h_choice=getHumanChoice()
c_choice=getComputerChoice()
PlayGame()

if(h_score > c_score){
    alert(`Game ended!!!\nYou win \n${h_score}\t${c_score}\nRefresh to Restart`)
}
else if(h_score < c_score){
    alert(`Game ended!!!\nYou Lost \n${h_score}\t${c_score}\nRefresh to Restart`)
}
else{
    alert(`Game ended!!!\nIts a Tie \n${h_score}\t${c_score}\nRefresh to Restart`)
}




