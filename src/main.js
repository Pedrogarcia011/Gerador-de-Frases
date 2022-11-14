import "./style.css"

const buttonEl = document.querySelector('button')
const text = document.querySelector('h3')
const paragrayp = document.querySelector('p')

const resultFrase = (dados) => {
    console.log(dados);
    text.innerHTML =  `${dados.quote}`;
    paragrayp.innerHTML = `${dados.author}`
}

buttonEl.addEventListener('click', () => {
    const resut = fetch('https://dummyjson.com/quotes/random')
    .then((response) => response.json())
    .then((data) => resultFrase(data))
})