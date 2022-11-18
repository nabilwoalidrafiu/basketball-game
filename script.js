const btn1Add1 =document.getElementById('btn1-add1')
const btn1Add2 =document.getElementById('btn1-add2')
const btn1Add3 =document.getElementById('btn1-add3')
const btn2Add1 =document.getElementById('btn2-add1')
const btn2Add2 =document.getElementById('btn2-add2')
const btn2Add3 =document.getElementById('btn2-add3')
const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score');
const newGame = document.getElementById('new-game')

btn1Add1.addEventListener('click', function() {
    const add1 = parseInt(btn1Add1.innerText) + parseInt(homeScore.innerText)
    homeScore.innerText = add1
})
btn1Add2.addEventListener('click', function() {
    const add2 = parseInt(btn1Add2.innerText) + parseInt(homeScore.innerText)
    homeScore.innerText = add2
})
btn1Add3.addEventListener('click', function() {
    const add3 = parseInt(btn1Add3.innerText) + parseInt(homeScore.innerText)
    homeScore.innerText = add3
})

btn2Add1.addEventListener('click', function() {
    const add21 = parseInt(btn2Add1.innerText) + parseInt(guestScore.innerText)
    console.log(add21)
    guestScore.innerText = add21
})
btn2Add2.addEventListener('click', function() {
    const add22 = parseInt(btn2Add2.innerText) + parseInt(guestScore.innerText)
    guestScore.innerText = add22
})
btn2Add3.addEventListener('click', function() {
    const add31 = parseInt(btn2Add3.innerText) + parseInt(guestScore.innerText)
    guestScore.innerText = add31
})

newGame.addEventListener('click', function(){
    homeScore.innerText = "0"
    guestScore.innerText = "0"
})