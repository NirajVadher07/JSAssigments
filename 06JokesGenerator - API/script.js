const button = document.querySelector(".container button");
const joke = document.querySelector(".container .joke");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


button.addEventListener("click", getjoke);

async function getjoke(){
    fetch(url).then(data => data.json())
    .then(item =>{joke.textContent = `${item.joke}`;});
}