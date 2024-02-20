import React from 'react';

function NavButton(props) {
  return <button className={props.style}>{props.content}</button>;
}

export default NavButton;
