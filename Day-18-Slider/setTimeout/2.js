let text = "Wait for it... Text changed after 5 seconds!";
console.log(text);

setTimeout(() => {
    text = "Text has been changed!";
    console.log(text);
}, 5000);