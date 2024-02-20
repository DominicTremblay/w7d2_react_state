import React from 'react';

function LikeButton(props) {
  return (
    <button className={props.like ? 'like-button liked': 'like-button'}>
      Like
    </button>
  );
}

export default LikeButton;
