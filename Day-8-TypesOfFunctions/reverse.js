const reverseString = (str) => {
    let length = 0;

    while(str[length] !== undefined){
        length++;
    }

    let reversed = "";

    for(let i = length - 1; i >= 0; i--){
        reversed = reversed + str[i];
    }

    console.log(`Original String: `, str);
    console.log(`Reversed String: `, reversed);
}

reverseString("hello");