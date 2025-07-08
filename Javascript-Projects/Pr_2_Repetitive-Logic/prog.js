let str = ' ';
let i = 1;

do{
    if(i % 2 == 0){
        str = str + i + ' ';
    }
    i++;
}while(i <= 10);

console.log(str);