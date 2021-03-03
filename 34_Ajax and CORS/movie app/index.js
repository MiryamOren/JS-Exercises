const APIgenLink = 'http://www.omdbapi.com/';
const myAPIkey = '&apikey=2c087629';
// ?i=tt3896198

function displayMovie(movieObj) {
  const name = document.querySelector('.movie-name');
  const poster = document.querySelector('.poster');
  const genre = document.querySelector('.genre');
  const year = document.querySelector('.year');
  const plot = document.querySelector('.plot');
  const director = document.querySelector('.director');
  const actors = document.querySelector('.actors');

  name.innerHTML = movieObj.Title;
  poster.style.backgroundImage = `url(${movieObj.Poster})`;
  genre.innerHTML = `<b>genere:</b> ${movieObj.Genre}`;
  year.innerHTML = `<b>year:</b> ${movieObj.Year}`;
  plot.innerHTML = `<b>plot:</b> ${movieObj.Plot}`;
  director.innerHTML = `<b>director:</b> ${movieObj.Director}`;
  actors.innerHTML = `<b>actors:</b> ${movieObj.Actors}`;
}
async function fetchMovie(movieName) {
  try {
    const fetchRes = await fetch(`${APIgenLink}?t=${movieName}${myAPIkey}`);
    const movieObj = await fetchRes.json();
    console.log(movieObj);
    if (movieObj.Response === 'True') {
      console.log('found :)');
      displayMovie(movieObj);
    } else if (movieObj.Response === 'False') {
      console.log('not found :/');
    }
  } catch (err) {
    console.log(err);
  }
}

function submit() {
  const movieName = document.querySelector('input').value;
  console.log(movieName);
  fetchMovie(movieName);
}
const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', submit);
