import { useState } from 'react';
import './App.css';
import Header from './Header';
import NavButton from './NavButton';
import Slider from './Slider';

function App() {
  const [cardsData, setCardsData] = useState([
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
      imageUrl: '/images/matthews.jpg',
      liked: false,
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
      liked: false,
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
      imageUrl: '/images/ovechkin.jpg',
      liked: false,
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
      imageUrl: '/images/mackinnon.jpg',
      liked: false,
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
      liked: false,
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
      liked: false,
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);


  const changeSlide = (action) => {
    // if it's prev => -1
    // if it's next => +1

    if (action === 'prev') {
      setCurrentSlide(
        currentSlide === 0 ? cardsData.length - 1 : currentSlide - 1
      );
    } else if (action === 'next') {
      setCurrentSlide(
        currentSlide === cardsData.length - 1 ? 0 : currentSlide + 1
      );
    }
  };

  const toggleLike = (id) => {

      const updatedCards = cardsData.map((card) => {
        if (card.id === id) {
          card.liked = !card.liked;
        }
        return card;
      });
    
    // trigger the state update
    setCardsData(updatedCards);

  }

  return (
    <main>
      <section id="slider-container">
        <Header />
        <Slider cardData={cardsData[currentSlide]} toggleLike={toggleLike} />
        <NavButton action="prev" content="&#10094;" changeSlide={changeSlide}/>
        <NavButton action="next" content="&#10095;" changeSlide={changeSlide}/>
      </section>
    </main>
  );
}

export default App;
