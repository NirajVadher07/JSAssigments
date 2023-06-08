let userscore = document.querySelector("#userScoreVal")
let compscore = document.querySelector("#compScoreVal")

let userchoiceshow = document.querySelector("#result-user-stat")
let compchoiceshow = document.querySelector("#result-comp-stat")
let winner = document.querySelector("#result-final-stat")

let ch = ["rock","paper","scissors"]
let userpoints = 0
let computerpoints = 0
let userchoice
let computerchoice

let choices = document.querySelectorAll(".choices")

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        userchoice = e.target.getAttribute("alt");
        userchoiceshow.innerText = "User: "  + userchoice;

        computerchoice = ch[Math.floor(Math.random()*3)];
        compchoiceshow.innerText = "Computer: " + computerchoice

        resultcall();
    })
});

function resultcall(){
    check  = userchoice+computerchoice

    if( check == "rockscissors" || check == "scissorspaper" || check=="paperrock"){
        winner.innerText = "You win";
        userpoints++;
        userscore.innerText = userpoints;
    }
    
    if(check== "scissorsrock" || check== "paperscissors" || check== "rockpaper"){
        winner.innerText = "Computer win"
        computerpoints++
        compscore.innerText = computerpoints;
    }
    if(check == "scissorsscissors" || check == "paperpaper" || check == "rockrock"){
        winner.innerText = "Its a draw";
      }
}   

