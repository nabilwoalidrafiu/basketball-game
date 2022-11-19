const btn1Add1 =document.getElementById('btn1-add1')
const btn1Add2 =document.getElementById('btn1-add2')
const btn1Add3 =document.getElementById('btn1-add3')
const btn2Add1 =document.getElementById('btn2-add1')
const btn2Add2 =document.getElementById('btn2-add2')
const btn2Add3 =document.getElementById('btn2-add3')
const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score');
const newGame = document.getElementById('new-game')
const leaderEL = document.getElementById('leader-el')

btn1Add1.addEventListener('click', function() {
    const add1 = parseInt(btn1Add1.innerText) + parseInt(homeScore.innerText)
    homeScore.innerText = add1
    leader()
  
})
btn1Add2.addEventListener('click', function() {
    const add2 = parseInt(btn1Add2.innerText) + parseInt(homeScore.innerText)
    homeScore.innerText = add2
    leader()
})
btn1Add3.addEventListener('click', function() {
    const add3 = parseInt(btn1Add3.innerText) + parseInt(homeScore.innerText)
    homeScore.innerText = add3
    leader()
})

btn2Add1.addEventListener('click', function() {
    const add21 = parseInt(btn2Add1.innerText) + parseInt(guestScore.innerText)
    guestScore.innerText = add21
    leader()
})
btn2Add2.addEventListener('click', function() {
    const add22 = parseInt(btn2Add2.innerText) + parseInt(guestScore.innerText)
    guestScore.innerText = add22
    leader()
})
btn2Add3.addEventListener('click', function() {
    const add31 = parseInt(btn2Add3.innerText) + parseInt(guestScore.innerText)
    guestScore.innerText = add31
    leader()
})

newGame.addEventListener('click', function(){
    homeScore.innerText = "0"
    guestScore.innerText = "0"
})
console.log(parseInt(homeScore.innerText))
function leader() {
    if (parseInt(homeScore.innerText) > parseInt(guestScore.innerText)) {
        leaderEL.innerText = "Home is leading";
    } else if (parseInt(guestScore.innerText) > parseInt(homeScore.innerText)) {
        leaderEL.innerText = "Guest is leading";
    }else{
        leaderEL.innerText = "Equal points"
    }
}