
const result = document.querySelector(".result")
const humanscore = document.querySelector("#human-score")
const machinescore = document.querySelector("#machine-score")

let humanscorenumber = 0
let machinescorenumber = 0

const playhuman = (humanchoice) => {

    playthegame(humanchoice, playmachine())
}


const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randonumber = Math.floor(Math.random() * 3)



    return choices[randonumber]
}

const playthegame = (human, machine) => {


    if (human === machine) {
        result.innerHTML = " Deu Empate! "
    } else if (
         (human === 'paper' && machine === 'rock') || 
         (human === 'rock' && machine === 'scissors') ||
         (human === ' scissors' && machine === 'paper')
    ) { 
        humanscorenumber++
        humanscore.innerHTML = humanscorenumber
        result.innerHTML = "Voçê Ganhou!"
    } else {
        machinescorenumber++
        machinescore.innerHTML = machinescorenumber
        result.innerHTML = "Voçê Perdeu , vai a alexa!"
    }

}