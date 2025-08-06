let items = document.querySelectorAll('.slider-img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let currentIndex = 0;

function removeActiveClass(){
    items.forEach(item => item.classList.remove('active'));
}

const prevSlide = () => {
    currentIndex = (currentIndex - 1 % items.length) % items.length;
    removeActiveClass();
    items[currentIndex].classList.add('active');
}

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % items.length;
    removeActiveClass();
    items[currentIndex].classList.add('active');
}

setInterval(nextSlide, 4000);

clearInterval(nextSlide);