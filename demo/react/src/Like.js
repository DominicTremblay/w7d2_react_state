import React from 'react';

function Like(props) {
  return <button className={props.liked ? "like-button liked": "like-button"} onClick={() => props.toggleLike(props.id)} >Like</button>;
}

export default Like;
