let breeds = document.getElementById("breeds");
let dogImg = document.getElementById("dog-img");
const fetchApi = async () => {
  try {
    let breed = breeds.value;
    let res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    let data = await res.json();
    dogImg.src = data.message;
  } catch (error) {
    console.log(error.message);
    
  }
};

const breedsApi = async () => {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/list/all");
    let data = await res.json();
    data = Object.keys(data.message);
    selectOption(data);
    fetchApi();
  } catch (error) {
    console.log(error.message);
  }
};

const selectOption = (data) => {
  data.forEach((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerText = value;
    breeds.append(option);
  });
};

breedsApi();
