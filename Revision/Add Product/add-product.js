let inputs = document.querySelectorAll('#product input');
let form = document.querySelector('#product');
let products = JSON.parse(localStorage.getItem('products')) || [];
let data = {};

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        data = {...data, [name]:value};
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    products.push(data);
    localStorage.setItem('products', JSON.stringify(products));
    form.reset();
})