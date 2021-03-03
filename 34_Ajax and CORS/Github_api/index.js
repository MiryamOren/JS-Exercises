const API = 'https://api.github.com/users/';
// const API = '#';
const alreadyFetchedUsers = {};

function changeCurrentCard(cardClass) {
  const initialCard = document.querySelector('.initial-card');
  const errorCard = document.querySelector('.error-card');
  const usrCard = document.querySelector('.user-card');
  const serchingCard = document.querySelector('.serching-card');
  const cards = [initialCard, errorCard, usrCard, serchingCard];
  cards.forEach((card) => {
    card.style.opacity = '0';
  });

  document.querySelector(`.${cardClass}`).style.opacity = '1';
}

function display(userObject) {
  const img = document.querySelector('.user-card__image');
  const name = document.querySelector('a');
  const repos = document.querySelector('.user-card__repos');
  img.style.backgroundImage = `url(${userObject.avatar_url})`;
  name.innerHTML = userObject.name || userObject.login;
  name.setAttribute('href', `${userObject.html_url}`);
  repos.innerHTML = `Number of Public Repo's: ${userObject.public_repos}`;
  changeCurrentCard('user-card');
}
function diplayError(message) {
  const errorCard = document.querySelector('.error-card');
  errorCard.innerHTML = message;
  changeCurrentCard('error-card');
}
async function fetchUser(userName) {
  fetch(API + userName)
    .then((response) => response.json())
    .then((userObject) => {
      if (userObject.message === 'Not Found') {
        diplayError(
          `No such user ${userName}<br><br> please check your spelling and try again`
        );
      } else {
        alreadyFetchedUsers[userName] = userObject;
        display(userObject);
      }
    })
    .catch((error) => {
      console.log(error);
      diplayError(
        `Oops, there was a problem.<br> please try again in a few minutes`
      );
    });
}
function submitEvent() {
  changeCurrentCard('serching-card');
  const userName = document.querySelector('input').value;
  document.querySelector('input').value = '';
  if (alreadyFetchedUsers.hasOwnProperty(userName)) {
    display(alreadyFetchedUsers[userName]);
  } else {
    fetchUser(userName);
  }
}

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', submitEvent);
const input = document.querySelector('input');
input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    submitEvent();
  }
});
