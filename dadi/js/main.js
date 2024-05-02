// quando l'utente preme un pulsante
const diceButton = document.getElementById("throw-dice")


diceButton.addEventListener('click', function(){
    // evito che la persona prema il pulsante di nuovo prima del risultato
    diceButton.innerText = "LANCIO IN CORSO..."
    diceButton.disabled = true
    
    
    // genero 2 numeri casuali da 1 a 6
    

    const numeroUtente = Math.floor((Math.random()*6)+1)
    const numeroComputer = Math.floor((Math.random()*6)+1)

    
    if (numeroUtente > numeroComputer){
        // se numeroUtente > NumeroCompute 
        // vince l'utente
        alert("hai vinto")
    } else if (numeroUtente === numeroComputer){
        // se numeroUtente = NumeroComputer è un pareggio
        alert("hai pareggiato")
    } else {
        // altrimenti vince il computer
        alert("hai perso")
    }

    // riattivo il pulsante
    diceButton.innerText = "LANCIA I DADI"
    diceButton.disabled = false


})