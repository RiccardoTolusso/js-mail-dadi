// quando l'utente preme un pulsante
const diceButton = document.getElementById("throw-dice")
const screenOutput = document.getElementById("text-output")
const dots = [
    [
        document.getElementById("dot-a1"),
        document.getElementById("dot-a2"),
        document.getElementById("dot-a3")
    ],
    [
        document.getElementById("dot-b1"),
        document.getElementById("dot-b2"),
        document.getElementById("dot-b3")
    ],
    [
        document.getElementById("dot-c1"),
        document.getElementById("dot-c2"),
        document.getElementById("dot-c3")
    ]
]


function randomDiceNumber(){
    const num = Math.floor((Math.random()*6)+1)
    return num
    
}

function resetDice(){
    for(let i = 0; i < dots.length; i++){
        for(n=0; n < dots[i].length; n++){
            dots[i][n].hidden = true;
        }
    }
}

function diceRollAnimation(number, enemyNumber){
    displayDiceNumber()
    setTimeout(displayDiceNumber, 100)
    setTimeout(displayDiceNumber, 200)
    setTimeout(displayDiceNumber, 500)
    setTimeout(displayDiceNumber, 800)
    setTimeout(displayDiceNumber, 1200)
    setTimeout(displayDiceNumber, 1600)
    setTimeout(displayDiceNumber, 2100)
    setTimeout(displayDiceNumber, 2600)
    setTimeout(displayDiceNumber, 3200)
    setTimeout(displayDiceNumber, 4000, number)
    setTimeout(outputWinner, 4100, number, enemyNumber)
}

function displayDiceNumber(number){
    resetDice(1)
    if (number == null){
        number = randomDiceNumber()
    }
    switch (number){
        case (1):
            dots[1][1].hidden = false
            break
        case (2):
            dots[0][2].hidden = false
            dots[2][0].hidden = false
            break
        case (3):
            dots[0][0].hidden = false
            dots[1][1].hidden = false
            dots[2][2].hidden = false
            break
        case (4):
            dots[0][0].hidden = false
            dots[0][2].hidden = false
            dots[2][2].hidden = false
            dots[2][0].hidden = false
            break
        case (5):
            dots[0][0].hidden = false
            dots[0][2].hidden = false
            dots[2][2].hidden = false
            dots[2][0].hidden = false
            dots[1][1].hidden = false
            break
        case (6):
            dots[0][0].hidden = false
            dots[0][2].hidden = false
            dots[1][0].hidden = false
            dots[1][2].hidden = false
            dots[2][0].hidden = false
            dots[2][2].hidden = false
            break
    }
}


function outputWinner(userNumber, computerNUmber){
    if (userNumber > computerNUmber){
        // se numeroUtente > NumeroCompute 
        // vince l'utente
        screenOutput.innerText = "Hai vinto!"
    } else if (userNumber === computerNUmber){
        // se numeroUtente = NumeroComputer è un pareggio
        screenOutput.innerText = "Avete pareggiato"
    } else {
        // altrimenti vince il computer
        screenOutput.innerText = "Hai perso :("
    }

    // riattivo il pulsante
    diceButton.innerText = "LANCIA I DADI"
    diceButton.disabled = false

}


diceButton.addEventListener('click', function(){
    // evito che la persona prema il pulsante di nuovo prima del risultato
    diceButton.innerText = "LANCIO IN CORSO..."
    diceButton.disabled = true
    
    // resetto il testo all'interno dello screenOutput
    screenOutput.innerText = ""
    
    // genero 2 numeri casuali da 1 a 6
    

    const numeroUtente = randomDiceNumber() 
    const numeroComputer = randomDiceNumber()

    diceRollAnimation(numeroUtente, numeroComputer)

})

