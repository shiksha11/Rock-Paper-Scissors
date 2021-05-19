//caching the DOM's required elements
let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("user-score")
const compScoreSpan = document.getElementById("computer-score")

const resultPara = document.querySelector(".result > p")
const scoreBoardDiv = document.querySelectorAll(".score_board") 

const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

//Dictionary
const dict = {
    "r" : "Rock",
    "s" : "Scissors",
    "p" : "Paper"
}


function getComputerChoice()
{
   
    const choices = ['r','p' , 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}

function win(userChoice,computerChoice)
{
    userScore+=1;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    userScoreSpan.innerHTML = userScore;
    resultPara.innerHTML = `${dict[userChoice]}${smallUserWord} beats ${dict[computerChoice]}${smallCompWord}. You Won.`
}

function lose(userChoice,computerChoice)
{
    compScore+=1;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    compScoreSpan.innerHTML = compScore;
    resultPara.innerHTML = `${dict[userChoice]}${smallUserWord} loses to ${dict[computerChoice]}${smallCompWord}. You Lost.`
}

function draw(userChoice,computerChoice)
{
    
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    resultPara.innerHTML = `${dict[userChoice]}${smallUserWord} equals ${dict[computerChoice]}${smallCompWord}. Its a draw.`

}

function  game(userChoice)
{

    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice)
    {
          case "rs":
          case "pr":
          case "sp":
              win(userChoice, computerChoice);
              break;
          case "rp":
          case "ps":
          case "sr":
            lose(userChoice, computerChoice);
            break;
          case "rr":
          case "pp":
          case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function main()
{
    rock_div.addEventListener('click', (event) => game("r"))
    paper_div.addEventListener('click', (event) => game("p"))
    scissors_div.addEventListener('click', (event) => game("s"))
}

main();

