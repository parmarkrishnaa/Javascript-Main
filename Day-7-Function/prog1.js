// Function Declarations

function greet(name) {
    console.log(`Hello`,name,`!`);
}

greet("krishna");

// Arrow Functions

const add = (a, b) => a + b;
console.log(add(3, 5))

// Var Name Function

function name() {

}

const addi = () => ({

})

    // Immediately Invoked Function Expressions (IIFEs)

(function () {
    const varr = "This is my private place.";
    console.log(varr);
})();

// (function () {
//     const privateVar = "I am private";
//     console.log(privateVar);
// })();