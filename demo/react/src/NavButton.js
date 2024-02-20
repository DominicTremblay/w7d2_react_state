import React from 'react';

function NavButton(props) {
  return (
    <button
      className={props.style}
      onClick={() => props.changeSlide(props.action)}
    >
      {props.content}
    </button>
  );
}

export default NavButton;
