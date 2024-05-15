const btn = document.querySelector('.btn');
const backgroundColor = document.querySelector('.bg');
const letters = ['A' , 'B', 'C' , 'D' , 'E' , 'F' , '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7'];
const colorCode = document.querySelector('.color');

btn.addEventListener('click',function(){
    let newColorCode = '#';
    for(i = 0; i < 6; i++){
        let random = getRandomLetter();
        newColorCode += letters[random];
    }
    backgroundColor.style.backgroundColor = newColorCode;
    colorCode.innerHTML = newColorCode;
})

function getRandomLetter(){
    return Math.floor(Math.random() * letters.length);
}