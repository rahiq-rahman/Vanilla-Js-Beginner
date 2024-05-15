const decreaseButton = document.querySelector('.decrease');
const increaseButton = document.querySelector('.increase');
const resetButton = document.querySelector('.reset');
const count = document.querySelector('.count');
let currentCount = 0;

decreaseButton.addEventListener('click',function(){
    currentCount--;
    count.innerHTML = currentCount;
})

increaseButton.addEventListener('click',function(){
    currentCount++;
    count.innerHTML = currentCount;
})

resetButton.addEventListener('click',function(){
    currentCount = 0;
    count.innerHTML = currentCount;
})