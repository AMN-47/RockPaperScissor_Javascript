const compChoiceDis = document.getElementById('COMP-CHOICE')
const usChoiceDis = document.getElementById('PLAYER-CHOICE')
const showRes = document.getElementById('daRESULT')
const possibleChoices = document.querySelectorAll('button')
let usChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    usChoice = e.target.id
    usChoiceDis.innerHTML = usChoice
    generateCompChoice()
}))

function generateCompChoice(){
    const randoNum = Math.floor(Math.random() * 3) 
    console.log(randoNum)
}