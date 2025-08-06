let timeLeft = 10;

const timer = setInterval(() => {
    timeLeft--;
    
    console.log(`Time left: ${timeLeft} seconds`);

    if(timeLeft === 0){
        clearInterval(timer);
        console.log("Time is Up!");
    }
}, 1000);