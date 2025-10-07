let loginForm = document.getElementById('loginForm');
let email = document.getElementById('email');
let password = document.getElementById('password');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let showAlert = () => {
    alert('Form Submitted Successfully');
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(email.value === ''){
        emailError.classList.add('d-block');
        emailError.classList.remove('d-none');
    }
    else{
        emailError.classList.remove('d-block');
        emailError.classList.add('d-none');
    }

    if(password.value === ''){
        passwordError.classList.add('d-block');
        passwordError.classList.remove('d-none');
    }
    else{
        passwordError.classList.remove('d-block');
        passwordError.classList.add('d-none');
    }

    if(email.value !== '' && password.value !== ''){
        showAlert();
    }
})