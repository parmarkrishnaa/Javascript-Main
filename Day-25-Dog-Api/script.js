let dogImg = document.getElementById("dog-img");
let loader = document.querySelector(".loader");
let loaderSpan = document.querySelector("#loader-span");
let interval;

function startinterval() {
    interval = setInterval(() => {
        loaderSpan.textContent += ".";
    }, 500);
}

function stopLoader() {
    loader.style.display = "none";
    loaderSpan.textContent = "";
    clearInterval(interval);
}

const fetchDogImage = () => {
    loader.style.display = "block";
    dogImg.style.display = "none";
    startinterval();
    setTimeout(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                loader.style.display = "none";
                dogImg.style.display = "block";
                dogImg.src = data.message;
              stopLoader();
            })
            .catch((error) => {
                console.error(error.message);
            })
    }, 1500)
}

function startFetching() {
    fetchDogImage();
}