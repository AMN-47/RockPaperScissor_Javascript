const compChoiceDis = document.getElementById('COMP-CHOICE')
const usChoiceDis = document.getElementById('PLAYER-CHOICE')
const showRes = document.getElementById('daRESULT')
const possibleChoices = document.querySelectorAll('button')
let usChoice
let comChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    usChoice = e.target.id
    usChoiceDis.innerHTML = usChoice
    generateCompChoice()
}))

function generateCompChoice(){
    const randoNum = Math.floor(Math.random() * 3) + 1
    console.log(randoNum)

    if (randoNum === 1){
        comChoice = 'ROCK'
    }
    if (randoNum === 2){
        comChoice = 'SCISSOR'
    }
    if (randoNum === 3){
        comChoice = 'PAPER'
    }
    compChoiceDis.innerHTML = comChoice

}