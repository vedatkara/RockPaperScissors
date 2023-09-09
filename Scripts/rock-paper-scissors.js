{
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}


function play(choice){
    const cChoice = ComputersChoice();
    const result = PlayersChoice(choice, cChoice);
    showResult(result);
    showChoices(choice, cChoice);
    showScore();
}

function showResult(result) {
    const buttonLm = document.querySelector('.js-result-text');
    buttonLm.innerText = 'You ' + result;
}

function showChoices(pChoice, cChoice) {
    const buttonLm = document.querySelector('.js-choices-text');
    buttonLm.innerText = 'Player: ' + pChoice +
    ' | Computer: '+cChoice;
}

function showScore(result) {
    const buttonLm = document.querySelector('.js-score-text');
    buttonLm.innerText = 'Wins: ' + score.wins
        + ' Loses: ' + score.losses 
        + ' Ties: ' + score.ties;
}



function ComputersChoice(){

    const choice = Math.floor(Math.random() * 3);
    let choiceStr = '';
    if(choice === 0)
        choiceStr = 'Rock';
    if(choice === 1)
        choiceStr = 'Paper';
    if(choice === 2)
        choiceStr = 'Scissors';

    return choiceStr;
}

function PlayersChoice(playersChoise, computersChoice){
    
    let result = "";
    if(playersChoise === "Rock"){

        if(computersChoice === "Rock")
            result = "Tie";
        else if(computersChoice === "Paper")
            result = "Lose";
        else if(computersChoice === "Scissors")
            result = "Win";
    }

    else if(playersChoise === "Paper"){

        if(computersChoice === "Rock")
            result = "Win";
        else if(computersChoice === "Paper")
            result = "Tie";
        else if(computersChoice === "Scissors")
            result = "Lose";
        }
    
    else if(playersChoise === "Scissors"){

        if(computersChoice === "Rock")
            result = "Lose";
        else if(computersChoice === "Paper")
            result = "Win";
        else if(computersChoice === "Scissors")
            result = "Tie";
        }

    if(result === "Win")
    score.wins ++;
    else if(result === "Lose")
    score.losses ++;
    else if(result === "Tie")
    score.ties ++;

    localStorage.setItem('score', JSON.stringify(score));
    return result;
    
    


}
}