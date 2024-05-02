"use strict"
// array contenete le email che hanno diritto di accedere al sito
const allowedEmails = [
    "pippo@mail.com",
    "pluto@mail.com",
    "paperino@mail.com"
]

const inputEmailField = document.getElementById("input-email")
const submitButton = document.getElementById("submit")

function reset(){
    inputEmailField.value = "youremailhere@mail.com"
}

reset()

submitButton.addEventListener('click', function(){
    let tempUserEmail = inputEmailField.value.toLowerCase()
    if( tempUserEmail === ""){
        window.alert("Formato email non valido")
        return
    }
    for(let i=0; i < allowedEmails.length; i++){
        if (allowedEmails.at(i) === tempUserEmail){
            window.alert("login effettuato con successo")
            reset()
            return
        }
    }
    window.alert("Mail non valida")
    reset()
    return
})
// aggiungo un event listner che al click del bottone inserisca in una variabile tempUserEmail
// il valore contenuto nel campo di input

// controllo che il campo non sia vuoto
// salto altri tipi di validazione in quanto per questo particolare esercizio è non necessario

// creo un loop che iteri tra tutti i valori di allowedEmails
// se trova un valore che corrisponde manda un feedback positivo all'utente
// se non trova un valore che corrisponde manda un feedback negativo all'utente

