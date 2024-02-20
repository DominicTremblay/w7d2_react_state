import React from 'react';

function NavButton(props) {
  return (
    <button
      className={
        props.action === 'prev'
          ? 'slide-arrow prev-arrow'
          : 'slide-arrow next-arrow'
      }
      // we need to specify is it the next or previous button
      // we need to change the current slide value when the button is clicked

      onClick={() => props.changeSlide(props.action)}
    >
      {props.content}
    </button>
  );
}

export default NavButton;
