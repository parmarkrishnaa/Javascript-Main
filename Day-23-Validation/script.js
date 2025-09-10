let inputs = document.querySelectorAll('input');
let errors = {};

let registration = (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        let { name, value, checked, type } = input;

        if (value === "") {
            document.querySelector(`.${name}-message`).innerText = "This field is required";
        } else if ((type === "radio" || type === "checkbox") && !checked) {
            document.querySelector(`.${name}-message`).innerText = "This field is required";
        } else {
            document.querySelector(`.${name}-message`).innerText = "";
        }
    })
}