const cardsData = [
  {
    id: 1,
    name: 'Auston Matthews',
    team: 'Toronto Maple Leafs',
    position: 'Center',
    stats: {
      gamesPlayed: 80,
      goals: 47,
      assists: 35,
      points: 82,
    },
    imageUrl: './images/matthews.jpg',
  },
  {
    id: 2,
    name: 'Connor McDavid',
    team: 'Edmonton Oilers',
    position: 'Center',
    stats: {
      gamesPlayed: 82,
      goals: 41,
      assists: 75,
      points: 116,
    },
    imageUrl: './images/mcdavid.jpg',
  },
  {
    id: 3,
    name: 'Alex Ovechkin',
    team: 'Washington Capitals',
    position: 'Left Wing',
    stats: {
      gamesPlayed: 81,
      goals: 48,
      assists: 42,
      points: 90,
    },
    imageUrl: './images/ovechkin.jpg',
  },
  {
    id: 4,
    name: 'Nathan MacKinnon',
    team: 'Colorado Avalanche',
    position: 'Center',
    stats: {
      gamesPlayed: 69,
      goals: 35,
      assists: 58,
      points: 93,
    },
    imageUrl: './images/mackinnon.jpg',
  },
  {
    id: 5,
    name: 'Elias Pettersson',
    team: 'Vancouver Canucks',
    position: 'Center',
    stats: {
      gamesPlayed: 82,
      goals: 28,
      assists: 46,
      points: 74,
    },
    imageUrl: './images/pettersson.jpg',
  },
  {
    id: 6,
    name: 'Josh Anderson',
    team: 'Montreal Canadiens',
    position: 'Right Wing',
    stats: {
      gamesPlayed: 78,
      goals: 23,
      assists: 19,
      points: 42,
    },
    imageUrl: './images/anderson.jpg',
  },
];

const createSlide = function (cardData) {
  return `<article class="slide">
  <img src="${cardData.imageUrl}" alt="${cardData.name}">
  <div class="info">
    <h3>${cardData.name}</h3>
    <p>${cardData.team}</p>
    <ul>
      <li>Position: ${cardData.position}</li>
      <li>Games Played: 80</li>
      <li>Goals: 47</li>
      <li>Assists: 35</li>
      <li>Points: 82</li>
    </ul>
    <button class="like-button">Like</button>
  </div>
</article>`;
};

let currentSlide = 0;
const totalSlides = cardsData.length;

const showSlide = function (n, slides) {
  createSlide(slides[n]);
  $('.slide').hide().fadeIn();
  $('.slide').html(createSlide(slides[n]));
};

const moveSlide = function (n, slides) {
  currentSlide += n;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  showSlide(currentSlide, slides);
};

$(document).ready(function () {
  showSlide(currentSlide, cardsData);

  $('.prev-arrow').click(function (e) {
    e.preventDefault();
    console.log('prev');
    moveSlide(-1, cardsData);
  });

  $('.next-arrow').click('.like-button', function (e) {
    e.preventDefault();
    console.log('next');
    moveSlide(1, cardsData);
  });

  $('#player-slider').click('.like-button', function (e) {
    e.preventDefault();
    console.log(this);
    $(this).find('.like-button').toggleClass('liked');
  });
});
