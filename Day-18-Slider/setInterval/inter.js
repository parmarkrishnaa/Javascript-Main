let count = 0;
const myInterval = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;

    if(count === 10){
        clearInterval(myInterval);
        console.log("Interval Stopped.");
    }
}, 2000);