// let div = document.createElement('div');
// div.classList.add('div');
// document.body.appendChild(div);
var form = document.getElementById('formOfTheDecks')
let buttonWhichShowsTheForm = document.getElementById('createrOfTheDecks')
// FUNÇÃO QUE ENTRA NO FORMULARIO DOS DECKS
buttonWhichShowsTheForm.addEventListener('click', () => {
    form.style.visibility = 'visible'
})
// FUNÇÃO QUE SAI NO FORMULARIO DOS DECKS
let buttonWhichLeavesFromTheForm = document.getElementById('leaveFromTheForm')
buttonWhichLeavesFromTheForm.addEventListener('click', () => {
    form.style.visibility = 'hidden'
})
let buttonWhichCreatesTheDecks = document.getElementById('createrDecks')
buttonWhichCreatesTheDecks.addEventListener('click', creatingTheDecks)

function creatingTheDecks() {
    let main = document.getElementsByTagName('main')[0]
    let name = document.getElementById('nameOfTheDeck').value
    var deck = document.createElement('div')
    deck.classList.add('divs')
    var nameDeck = document.createElement('p')
    nameDeck.textContent = `${name}`
    deck.appendChild(nameDeck)
    main.appendChild(deck)

}