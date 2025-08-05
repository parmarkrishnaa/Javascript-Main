let items = document.querySelectorAll(".slider-img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let currentIndex = 0;

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    items.forEach(item => item.classList.remove("active"))
    items[currentIndex].classList.add("active");
});

prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items.forEach(item => item.classList.remove("active"))
    items[currentIndex].classList.add("active");
})