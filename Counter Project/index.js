const buttons = document.querySelectorAll('.button');

const count = document.querySelector('.count');
//intial count
let currentCount = 0;

buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            currentCount--;
        }
        else if(styles.contains('increase')){
            currentCount++;
        }
        else{
            currentCount = 0;
        }

        if(currentCount > 0){
            count.style.color = 'green';
        }
        else if(currentCount < 0){
            count.style.color = 'red';
        }
        else
            count.style.color = 'black';

        count.innerHTML = currentCount;
    })
})