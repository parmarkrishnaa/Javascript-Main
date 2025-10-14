class Data{
    constructor(){
        this.name = "Krishna";
        this.age = 21;
    }

    getData(){
        console.log(`Your name is ${this.name} and your age is ${this.age}.`);
    }
}

let d = new Data();

d.getData();