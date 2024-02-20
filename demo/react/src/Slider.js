import React from 'react';
import Slide from './Slide';

function Slider(props) {
  return (
    <div id="player-slider" className="slider">
      <Slide cardData={props.cardData} />
    </div>
  );
}

export default Slider;
