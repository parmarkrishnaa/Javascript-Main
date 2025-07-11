const isPalindrome = (str) => {
    let length = 0;

    while(str[length] !== undefined){
        length++;
    }

    let reversed = "";

    for(let i = length - 1; i >= 0; i--){
        reversed = reversed + str[i];
    }

    if(str == reversed){
        console.log(str + `is a paindrome.`);
    }else{
        console.log(str + `is not a paindrome.`);
    }
}

isPalindrome("madam");
isPalindrome("hello");