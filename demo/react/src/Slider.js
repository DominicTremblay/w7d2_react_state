import React from 'react';
import Slide from './Slide';

function Slider(props) {
  return (
    <div id="player-slider" className="slider">
      <Slide cardData={props.cardData} likeCard={props.likeCard}/>
    </div>
  );
}

export default Slider;
