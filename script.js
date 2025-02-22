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

startBtn.addEventListener('click',startGame)

let fiveNumbers = []

function startGame(){

    startBtn.classList.add('d-none')
    timer.classList.remove('d-none')

for (let i = 1; i <= 5; i++){
    let randomNumber = (Math.floor(Math.random() * 100));
    fiveNumbers.push(randomNumber);
    numberList.innerHTML += `<li>${randomNumber}</li>`;

}}

console.log(fiveNumbers)

const clock = setInterval(hideNumbers, 5000)

function hideNumbers(){
    numberList.classList.add('d-none')
    timer.classList.add('d-none')
}



