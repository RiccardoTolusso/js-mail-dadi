<!-- 
! Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. -->

-- HTML --
Creo un campo di input type text con id="input-email"
Creo un bottone con id = "submit"

-- JAVASCRIPT --
Creo un array di stringhe allowedEmails che conterrà una lista di indirizzi email accettati

allowedEmails = [
    'pippo@mail.com'
    'pluto@mail.com'
    'paperino@mail.com'
]

aggiungo un event listner che al click del bottone inserisca in una variabile tempUserEmail
il valore contenuto nel campo di input

controllo che il campo non sia vuoto
salto altri tipi di validazione in quanto per questo particolare esercizio è non necessario

creo un loop che iteri tra tutti i valori di allowedEmails
se trova un valore che corrisponde manda un feedback positivo all'utente
se non trova un valore che corrisponde manda un feedback negativo all'utente