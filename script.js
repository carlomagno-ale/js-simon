/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA:
non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

/*BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:
Pensate prima in italiano, in inglese o nella lingua che preferite.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/

let numberList = document.getElementById('number-list')
let timer = document.getElementById("timer");
let startBtn = document.getElementById("start-btn");
let formInput = document.getElementById("form-input")
let checkBtn = document.getElementById("check-btn")
let userInput = document.getElementById("user-input")
let userOne = document.getElementById("user-number-1")
let userTwo = document.getElementById("user-number-2")
let userThree = document.getElementById("user-number-3")
let userFour = document.getElementById("user-number-4")
let userFive = document.getElementById("user-number-5")
let resultGame = document.getElementById("result-game")

startBtn.addEventListener('click',startGame)

let fiveNumbers = []

// funzione che fa partire il gioco evocata nel bottone startBtn, fa apparire timer e numeri, cancella bottone di inizio
function startGame(){ 

    startBtn.classList.add('d-none')
    timer.classList.remove('d-none')

for (let i = 1; i <= 5; i++){
    let randomNumber = (Math.floor(Math.random() * 100));
    fiveNumbers.push(randomNumber);
    numberList.innerHTML += `<li>${randomNumber}</li>`;

} countdown()
}

console.log(fiveNumbers)

function hideNumbers(){
    numberList.classList.add('d-none')
    timer.classList.add('d-none')
}

// serve a visualizzare il timer a schermo col conto alla rovescia
let counter = 7;
let timeInterval

function updateTimer() {
    counter--; 
    timer.innerHTML = counter; 

    if (counter <= 5){
        timer.classList.add('text-danger')
    } if (counter <= 0) {
        clearInterval(timerInterval);  
        timerInterval = null;
        userInputShow()
    } 
}

function countdown() {
timerInterval = setInterval(updateTimer, 1000);

// serve a far partire dopo 5 secondi la funzione hideNumbers che cancella i numeri 
const clock = setInterval(hideNumbers, 7000)

}

function userInputShow(){

    formInput.classList.remove('d-none')
    checkBtn.classList.remove('d-none')

}

//al click confronta i due array e conferma il risultato
let userNumbers = []
let score = 0;

checkBtn.addEventListener('click', checkUserInput)

function checkUserInput(){

    userNumbers.push(userOne.value,userTwo.value,userThree.value,userFour.value,userFive.value)
    console.log(userNumbers)

    for (let k = 0; k < fiveNumbers.length; k++) {

        for (let i = 0; i < userNumbers.length; i++) {

            if(fiveNumbers[k] == userNumbers[i]){
                score++
            } 
        }
    }
    console.log(score)
    checkBtn.classList.add('d-none')
    resultGame.innerHTML = `Hai indovinato ${score} numeri su 5`

}



