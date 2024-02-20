import React from 'react';
import Card from './Card';

function Slider(props) {
  return (
    <div id="player-slider" className="slider">
      <Card cardData={props.cardData} toggleLike={props.toggleLike}/>
    </div>
  );
}

export default Slider;
