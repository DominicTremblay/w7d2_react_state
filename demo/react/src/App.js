import { useState } from 'react';
import './App.css';
import Slider from './Slider';
import Header from './Header';
import NavButton from './NavButton';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Alex Ovechkin',
      team: 'Washington Capitals',
      position: 'Left Wing',
      stats: {
        gamesPlayed: 81,
        goals: 48,
        assists: 42,
        points: 90,
      },
      imageUrl: '/images/ovechkin.jpg',
      like: false,
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
      imageUrl: '/images/mcdavid.jpg',
      like: false,
    },
    {
      id: 3,
      name: 'Nathan MacKinnon',
      team: 'Colorado Avalanche',
      position: 'Center',
      stats: {
        gamesPlayed: 69,
        goals: 35,
        assists: 58,
        points: 93,
      },
      imageUrl: '/images/mackinnon.jpg',
      like: false,
    },
    {
      id: 4,
      name: 'Auston Matthews',
      team: 'Toronto Maple Leafs',
      position: 'Center',
      stats: {
        gamesPlayed: 80,
        goals: 47,
        assists: 35,
        points: 82,
      },
      imageUrl: '/images/matthews.jpg',
      like: false,
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
      imageUrl: '/images/pettersson.jpg',
      like: false,
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
      imageUrl: '/images/anderson.jpg',
      like: false,
    },
  ]);

  const [currentCard, setCurrentCard] = useState(0);

  const changeSlide = (action) => {
    if (action === 'next') {
      setCurrentCard(currentCard === cards.length - 1 ? 0 : currentCard + 1);
    } else {
      setCurrentCard(currentCard === 0 ? cards.length - 1 : currentCard - 1);
    }
  }

  const likeCard = (id) => {  
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, like: !card.like };
      }
      return card;
    });
    setCards(newCards);
  }


  return (
    <main>
      <section id="slider-container">
        <Header />

        <Slider cardData={cards[currentCard]} likeCard={likeCard}/>

        <NavButton
          action="prev"
          style="slide-arrow prev-arrow"
          content="&#10094;"
          changeSlide={changeSlide}
        />
        <NavButton
          action="next"
          style="slide-arrow next-arrow"
          content="&#10095;"
          changeSlide={changeSlide}
        />
      </section>
    </main>
  );
}

export default App;
