
let cards = []
let message = "";
let hasBlackjack = false;
let isAlive = false;


let messageEl = document.querySelector(".message-el")
let sumEl = document.querySelector(".sum-el")
let cardEl = document.querySelector(".card-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }     
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard()
    let secodCard = getRandomCard()
    cards = [firstCard, secodCard]
    sum = firstCard+secodCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "cards: "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum;
    if(sum <= 20){
        message = "do you want to draw a new deck"
    }
    else if(sum === 21){
        message = "woohoo you won the blackjack"
        hasBlackjack = true
    }
    else{
        message = "you are out of the game"
        isAlive = false
    }
    messageEl.textContent  = message;
}
function newCard(){
    if(isAlive  === true && hasBlackjack === false){
        let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }   
}


// function rollDice(){
//     let randomNumber = Math.floor(Math.random()*6)+1
//     return randomNumber
// }

// console.log(rollDice())

// let randomNumber =Math.floor( Math.random()*6) + 1
// console.log(randomNumber)

// let flooredNumber = Math.floor(3.4562)
// console.log(flooredNumber)

// let hadSolveChallenge = false
// let hasHintLeft = false 
// if(hadSolveChallenge === false && hasHintLeft === false){
//      showSolution()
// }
// function showSolution(){
//     console.log("greetings")
// }