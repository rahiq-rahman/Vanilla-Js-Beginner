const reviews = [
    {
        id: 1,
        name: 'susan',
        job: 'web',
        text:'yoooooooooooo',
    },
    {
        id: 2,
        name: 'jusan',
        job: 'designer',
        text:'how r u?',
    },
    {
        id: 3,
        name: 'emily',
        job: 'hacker',
        text:'hello',
    },
    {
        id: 4,
        name: 'jack',
        job: 'engineer',
        text:'loremipsum',
    }
]
// select items
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const review = document.querySelector('.review');

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const surpriseBtn = document.querySelector('.surprise');

//set start item
let currentItem = 0;

//show person based on item
function showPerson(){
    let item = reviews[currentItem];
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    review.innerHTML = item.text;
}
//load initial item
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});

leftBtn.addEventListener("click", function (){
    currentItem--;
    if(currentItem < 0)
        currentItem = reviews.length - 1;
    showPerson(currentItem);
});

rightBtn.addEventListener("click", function (){
    currentItem++;
    if(currentItem > reviews.length - 1)
        currentItem = 0;
    showPerson(currentItem);
});

surpriseBtn.addEventListener("click", function (){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
});
