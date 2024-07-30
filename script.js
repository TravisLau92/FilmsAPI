const inputNumberElement = document.getElementById('inputNum');
const searchButtonElement = document.getElementById('searchButton');
const resultContainerElement = document.getElementById('result-container');


async function fetchFilms(filmId) {
  const response = await fetch(`https://swapi.dev/api/films/${filmId}`);
  const data = await response.json();
  return data;
}

searchButtonElement.addEventListener('click', async () => {
const inputNumberValue = inputNumberElement.value;

const filmsData = await fetchFilms(inputNumberValue);

resultContainerElement.innerHTML = `
  <h1>${filmsData.title}</h1>
  <p>Director: ${filmsData.director}</p>
  <p>Opening Crawl: ${filmsData.opening_crawl}</p>
  <p>Release Date: ${filmsData.release_date}</p>
  <p>Url: ${filmsData.url}<p>
  `

})