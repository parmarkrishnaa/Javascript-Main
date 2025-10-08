let timer = document.getElementById('timer');
let seconds = 0;

setInterval(() => {
    seconds++;
    if(seconds === 10){
        seconds = 0;
    }
    timer.textContent = seconds;
}, 1000);