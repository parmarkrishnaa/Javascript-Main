function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Hello my name is ${name}.\nI am ${age} years old.`)
    };
}

let p1 = new Person(`Krishna`,18);

p1.sayHello();