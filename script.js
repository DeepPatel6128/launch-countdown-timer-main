//second
const secondAnimation = document.querySelector('.second-update')
const topSecond = document.querySelector('.top-second')
const updateSecond = document.querySelector('.updated-second')
const bottomSecond = document.querySelector('.bottom-second')

//minute
const minuteAnimation = document.querySelector('.minute-update')
const topMinute = document.querySelector('.top-minute')
const updateMinute = document.querySelector('.updated-minute')
const bottomMinute = document.querySelector('.bottom-minute')

const hourAnimation = document.querySelector('.hour-update')
const dayAnimation = document.querySelector('.day-update')

const hourCardNumber = document.querySelectorAll('.hour')
const dayCardNumber = document.querySelectorAll('.day')


setInterval(setTimer , 1000)
let i =1;

function setTimer(){
    secondAnimation.classList.add('animate')
    if(topSecond.innerHTML === '60'){
        reset()
        updateMinutes()
    }
    topSecond.innerHTML = parseInt(topSecond.innerHTML) + i;
    updateSecond.innerHTML = parseInt(updateSecond.innerHTML) + i;
    bottomSecond.innerHTML = parseInt(bottomSecond.innerHTML) + i;
}

function updateMinutes(){
    minuteAnimation.classList.add('animate-once')
    topMinute.innerHTML = parseInt(topMinute.innerHTML) - i;
    updateMinute.innerHTML = parseInt(updateMinute.innerHTML) - i;
    bottomMinute.innerHTML = parseInt(bottomMinute.innerHTML) - i;
    setTimeout(()=>{
        minuteAnimation.classList.remove('animate-once')
    },1000)
}
function reset(){
    topSecond.innerHTML ='00'
    updateSecond.innerHTML = '00'
    bottomSecond.innerHTML = '00'
}

